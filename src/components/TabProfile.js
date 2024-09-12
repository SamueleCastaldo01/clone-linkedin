import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProfile,
  fetchSpecificProfile,
} from "../redux/actions/profileActions";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import EditIcon from "@mui/icons-material/Edit";
import { useParams } from "react-router";
import Modal from 'react-bootstrap/Modal';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";

function TabProfile() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const [flagPerm, setFlagPerm] = useState(false);
  const profile = useSelector((state) => state.profile.profile);
  const [isLoading, setIsLoading] = useState(true);

  //stato del modale & setimgFile
  const [showModal, setShowModal] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const idAldo = "66dff513af434b00159d8330";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRmZjUxM2FmNDM0YjAwMTU5ZDgzMzAiLCJpYXQiOjE3MjU5NTMyOTksImV4cCI6MTcyNzE2Mjg5OX0.n-M-g7ZghOBgKrcQWWZVAbMrGzHoBDjK8KPBUQay_9A";

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
  }, [userId]);

  // Modal handlers
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleFileChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!imageFile) return;

    const formData = new FormData();
    formData.append("profile", imageFile); // Supponendo che si sta caricando un'immagine del profilo

    try {
      await axios.post(
        `https://striveschool-api.herokuapp.com/api/profile/${
          userId || idAldo
        }/picture`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Recupero il profilo per ottenere l'immagine aggiornata
      if (userId) {
        dispatch(fetchSpecificProfile(userId));
      } else {
        dispatch(fetchProfile(idAldo));
      }

      handleClose();
    } catch (error) {
      console.error(
        "Error uploading image:",
        error.response?.data || error.message
      );
    }
  };

  if (isLoading) return <p>Loading...</p>;
  console.log(profile);
  return (
    <>
      <div className="bg-white rounded-4 position-relative tabPro">
        <div className="bannerProfile rounded-4">
          <div className="divCam">
            <IconButton size="small" aria-label="delete">
              <CameraAltIcon
                style={{ color: "#0A66C2" }}
                onClick={handleOpen}
              />
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

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Inserisci immagine</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <TextField
              type="file"
              fullWidth
              onChange={handleFileChange}
              sx={{ mt: 2 }}
            />
        </Modal.Body>
        <Modal.Footer>
          <Button className="me-2" variant="contained" color="error"  onClick={handleClose}>
            Close
          </Button>
          <Button variant="contained"  onClick={handleSubmit}>
            Carica
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TabProfile;
