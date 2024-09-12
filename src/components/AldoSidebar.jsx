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
  const [isExpanded, setIsExpanded] = useState(false);

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

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const maxLength = 63;

  const truncatedBio =
    profile.bio.length > maxLength
      ? profile.bio.slice(0, maxLength) + "..."
      : profile.bio;

  return (
    <>
      <div className="bg-white rounded-4 position-relative tabPro mb-4 cardOmbra">
        <div className="bannerProfile2 rounded-4">
          <div className="divCam">
       
          </div>

          <div className="divAv">
            <Avatar
              src={profile.image}
              sx={{ bgcolor: deepOrange[500], width: 80, height: 80 }}
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
            <div className="col-12">
              <h4 className="m-0">
                {profile.name.charAt(0).toUpperCase() + profile.name.slice(1)} -{" "}
                {profile.surname.charAt(0).toUpperCase() +
                  profile.surname.slice(1)}
              </h4>
              <p className="m-0">
                {" "}
                {isExpanded ? profile.bio : truncatedBio}
                {profile.bio.length > maxLength && (
                  <span
                    onClick={handleToggleExpand}
                    style={{ color: "#0A66C2", cursor: "pointer" }}
                  >
                    {isExpanded ? " Mostra meno aldo" : " Mostra aldo"}
                  </span>
                )}
              </p>{" "}
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
