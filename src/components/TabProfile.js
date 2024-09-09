import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/actions/profileActions";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import EditIcon from "@mui/icons-material/Edit";

function TabProfile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.profile);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchProfile());
      setIsLoading(false);
    };
    fetchData();
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  console.log(profile);
  return (
    <>
      <div className="bg-white rounded-4 position-relative tabPro">
        <div className="bannerProfile rounded-4"></div>
        <div className="divCam">
          <IconButton size="small" aria-label="delete">
            <CameraAltIcon style={{ color: "#0A66C2" }} />
          </IconButton>
        </div>

        <div className="divAv">
          <Avatar
            src={profile.image}
            sx={{ bgcolor: deepOrange[500], width: 130, height: 130 }}
          >
            {profile.name[0]}
          </Avatar>
        </div>

        <div className="divEdi">
          <IconButton size="medium" aria-label="delete">
            <EditIcon style={{ color: "black" }} />
          </IconButton>
        </div>

        <div className="p-3">
          <div className="row mt-4">
            <div className="col-8">
              <h3 className="m-0">
                {profile.name.charAt(0).toUpperCase() + profile.name.slice(1)}{" "}
                {profile.surname.charAt(0).toUpperCase() +
                  profile.surname.slice(1)}
              </h3>
              <p className="m-0">{profile.bio}</p>{" "}
              {/* Qui viene mostrato il titolo di lavoro */}
              <p className="pTabProfile mt-1">
                {profile.area} -{" "}
                <span className="fw-medium" style={{ color: "#0A66C2" }}>
                  <a>Informazioni di contatto</a>
                </span>
              </p>
            </div>
            <div className="col-4">
              <h5>immagine</h5>
            </div>
          </div>

          <div className="d-flex justify-content-start gap-1">
            <button className="buTabProfile">Disponibile per</button>
            <button className="butProSec">Aggiungi sezione del profilo</button>
            <button className="butProSec">Migliora profilo</button>
            <button className="butProGra">Altro</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TabProfile;
