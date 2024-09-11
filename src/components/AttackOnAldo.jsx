import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useParams, Link } from "react-router-dom"; // Importa Link per la navigazione
import { useDispatch, useSelector } from "react-redux";
import { fetchProfiles } from "../redux/actions/profileActions";
import { fetchJobsAction } from "../redux/actions/profileActions";

const AttackOnAldo = () => {
  const { searchTerm } = useParams(); // Ottieni il parametro dalla route
  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.profile.profiles);
  const jobs = useSelector((state) => state.jobs.jobs);

  React.useEffect(() => {
    if (searchTerm) {
      dispatch(fetchProfiles(searchTerm));
      dispatch(fetchJobsAction(searchTerm));
    }
  }, [dispatch, searchTerm]);

  const handleClick = () => {
    dispatch(fetchProfiles());
  };

  return (
    <div className="tabPro mt-2">
      <h2>Risultati della ricerca per "{searchTerm}"</h2>

      <div className="bg-white rounded-4 position-relative tabPro p-4 mb-4">
        <div className=" justify-content-between mb-3">
          <h5 className="fw-bold m-0">Persone</h5>
        </div>
        {profiles.length > 0 ? (
          profiles.map((profile, index) => (
            <>
              <Link
                to={`/profile/${profile._id}`}
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={() => {
                  handleClick();
                }}
              >
                <div
                  key={index}
                  className="d-flex align-items-start justify-content-between mb-4 divprofile"
                >
                  <div className="d-flex align-items-center">
                    <div className="me-2">
                      <Avatar
                        alt={profile.username}
                        src={profile.image || "/static/images/avatar/1.jpg"}
                      />
                    </div>
                    <div>
                      <h6 className="m-0">
                        {profile.username}{" "}
                        <span style={{ color: "gray", fontSize: "15px" }}>
                          {profile.name} {profile.surname}
                        </span>{" "}
                      </h6>
                      <p className="m-0 profileCompany">
                        {profile.company_name}
                      </p>
                      <p className="m-0 jobCity">
                        {profile.candidate_required_location}
                      </p>
                    </div>
                  </div>
                </div>
                <hr></hr>
              </Link>
            </>
          ))
        ) : (
          <p>Nessun profilo trovato</p>
        )}
      </div>

      <div className="bg-white rounded-4 position-relative tabPro p-4 mb-4">
        <div className=" justify-content-between mb-3">
          <h5 className="fw-bold m-0">Offerte di Lavoro</h5>
        </div>

        {jobs.length > 0 ? (
          jobs.map((job, index) => (
            <>
              <div
                key={index}
                className="d-flex align-items-start justify-content-between mb-4 divJob"
              >
                <div className="d-flex align-items-center">
                  <div className="me-2">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuy8Th0qZPzQUtjChGa8fvmoGeCdmk9mtpWg&s"
                      style={{ width: "50px", height: "50px" }}
                      alt="company"
                    />
                  </div>
                  <div>
                    <a href={job.url} target="_blank" className="m-0 jobTitle">
                      {job.title}
                    </a>
                    <p className="m-0 jobCompany">{job.company_name}</p>
                    <p className="m-0 jobCity">
                      {job.candidate_required_location}
                    </p>
                  </div>
                </div>
              </div>
              <hr></hr>
            </>
          ))
        ) : (
          <p>Nessun lavoro trovato</p>
        )}
      </div>
    </div>
  );
};

export default AttackOnAldo;
