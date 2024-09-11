import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/actions/profileActions";
import { fetchSpecificProfile } from "../redux/actions/profileActions";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import EditIcon from "@mui/icons-material/Edit";
import { useParams } from "react-router";

const AldoSidebar = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const [flagPerm, setFlagPerm] = useState(false);
  const profile = useSelector((state) => state.profile.profile);
  const [isLoading, setIsLoading] = useState(true);

  const idAldo = "66dff513af434b00159d8330";

  function awaitAldo() {
    const fetchData = async () => {
      await dispatch(fetchProfile(idAldo));
      setIsLoading(false);
    };
    fetchData();
  }

  function searchAldo() {
    const fetchData = async () => {
      await dispatch(fetchSpecificProfile(userId));
      setIsLoading(false);
    };
    fetchData();
  }

  useEffect(() => {
    if (userId) {
      searchAldo();
    } else {
      awaitAldo();
    }
    if (userId === idAldo) {
      setFlagPerm(true);
    } else {
      setFlagPerm(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  if (isLoading) return <p>Loading...</p>;
  console.log("profile", profile);
  return (
    <>
      <div className="bg-white rounded-4 position-relative tabPro">
        <div className="bannerProfile2 rounded-4">
          <div className="divCam">
            <IconButton size="small" aria-label="delete">
              <CameraAltIcon style={{ color: "#0A66C2" }} />
            </IconButton>
          </div>

          <div className="divAv">
            <Avatar
              src={profile.image}
              sx={{ bgcolor: deepOrange[500], width: 90, height: 90 }}
            >
              {profile.name[0]}
            </Avatar>
          </div>
        </div>

        <div className="divEdi">
          {flagPerm && (
            <IconButton size="medium" aria-label="delete">
              <EditIcon style={{ color: "black" }} />
            </IconButton>
          )}
        </div>

        <div className="p-3">
          <div className="row mt-4">
            <div className="col-8">
              <h3 className="m-0">
                {profile.name.charAt(0).toUpperCase() + profile.name.slice(1)} -{" "}
                {profile.surname.charAt(0).toUpperCase() +
                  profile.surname.slice(1)}
              </h3>
              <p className="m-0">{profile.bio}</p>{" "}
              {/* Qui viene mostrato il titolo di lavoro */}
              <p className="pTabProfile mt-1">{profile.area} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AldoSidebar;
