import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import moment from "moment";
import { fetchJobsAction } from "../redux/actions/profileActions";

const JobSection = function () {
  const dispatch = useDispatch()
  const jobs = useSelector((state) => state.jobs.jobs);

  useEffect(() => {
    dispatch(fetchJobsAction("developer"))
  }, [])
  
  return (
    <>
      <div className="bg-white rounded-4 position-relative tabPro mt-3 p-4">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h5 className="fw-bold m-0">Offerte di lavoro per te</h5>
        </div>

        {jobs.length > 0 ? (
          jobs.map((experience, index) => (
            <div
              key={index}
              className="d-flex align-items-center justify-content-between mb-4"
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
                  <h6 className="m-0 fw-bold">{experience.role}</h6>
                  <p className="m-0">{experience.area}</p>
                  <p className="m-0">
                    {moment(experience.startDate).format("DD/MM/YY")} -
                    {experience.endDate
                      ? moment(experience.endDate).format("DD/MM/YY")
                      : "Presente"}
                  </p>
                  <p className="m-0">{experience.company}</p>
                </div>
              </div>
              <div>

              </div>
            </div>
          ))
        ) : (
          <p>Nessuna esperienza trovata</p>
        )}
      </div>
    </>
  );
};

export default JobSection;
