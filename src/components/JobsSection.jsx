import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import moment from "moment";
import { fetchJobsAction } from "../redux/actions/profileActions";

const JobSection = function () {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);

  useEffect(() => {
    dispatch(fetchJobsAction("developer"));
  }, []);

  return (
    <>
      <div className="bg-white rounded-4 position-relative tabPro mt-3 p-4">
        <div className=" justify-content-between mb-3">
          <h5 className="fw-bold m-0">Offerte di lavoro per te</h5>
          <p>sulla base del tuo profilo e della tua cronologia delle ricerche</p>
        </div>

        {jobs.length > 0 ? (
          jobs.map((job, index) => (
            <>
              <div
                key={index}
                className="d-flex align-items-center justify-content-between mb-4 divJob"
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
                    <h6 className="m-0 jobTitle">{job.title}</h6>
                    <p className="m-0 jobCompany">{job.company_name}</p>
                    <p className="m-0 jobCity">{job.candidate_required_location}</p>
                  </div>
                </div>
                <div></div>
              </div>
              <hr></hr>
            </>
          ))
        ) : (
          <p>Nessuna esperienza trovata</p>
        )}
      </div>
    </>
  );
};

export default JobSection;
