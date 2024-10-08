import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddExperience,
  deleteExperienceAction,
  Experiencesfetch,
  modifyExperienceAction,
} from "../redux/actions/profileActions";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";
import moment from "moment";

const Experience = () => {
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.experiences.experiences);
  const profile = useSelector((state) => state.profile.profile);

  const idAldo = "66dff513af434b00159d8330";
  const [flagPerm, setFlagPerm] = useState(false);

  const [show, setShow] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [currentId, setCurrentId] = useState(null);
  const [newExperience, setNewExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
    image: "", // Campo immagine
  });
  const [selectedImage, setSelectedImage] = useState(null); // Nuovo stato per immagine

  useEffect(() => {
    if (profile && profile._id) {
      dispatch(Experiencesfetch(profile._id));
    }

    setFlagPerm(idAldo === profile._id);
  }, [dispatch, profile]);

  const handleClose = () => {
    resetForm();
    setShow(false);
  };

  const handleShow = () => {
    setModalMode("add");
    setShow(true);
  };

  const handleEditExperience = (experience) => {
    setNewExperience({
      role: experience.role,
      company: experience.company,
      startDate: experience.startDate,
      endDate: experience.endDate,
      description: experience.description,
      area: experience.area,
      image: experience.image || "", // Imposta immagine esistente o stringa vuota
    });
    setCurrentId(experience._id);
    setModalMode("edit");
    setShow(true);
  };

  const deleteExperience = (experienceId) => {
    dispatch(deleteExperienceAction(profile._id, experienceId));
    setShow(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (modalMode === "add") {
      dispatch(AddExperience(profile._id, newExperience)).then(
        (createdExperience) => {
          if (selectedImage) {
            uploadExperienceImage(
              profile._id,
              createdExperience,
              selectedImage
            );
          }
        }
      );
    } else if (modalMode === "edit") {
      dispatch(
        modifyExperienceAction(profile._id, currentId, newExperience)
      ).then(() => {
        if (selectedImage) {
          uploadExperienceImage(profile._id, currentId, selectedImage);
        }
      });
    }
    handleClose();
  };
  const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRmZjUxM2FmNDM0YjAwMTU5ZDgzMzAiLCJpYXQiOjE3MjU5NTMyOTksImV4cCI6MTcyNzE2Mjg5OX0.n-M-g7ZghOBgKrcQWWZVAbMrGzHoBDjK8KPBUQay_9A";
  // Funzione per caricare l'immagine
  const uploadExperienceImage = async (userId, expId, imageFile) => {
    const formData = new FormData();
    formData.append("experience", imageFile); // Nome del campo immagine

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}/picture/`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Errore durante il caricamento dell'immagine");
      }

      console.log("Immagine caricata con successo!");
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]); // Salva l'immagine selezionata
  };

  const resetForm = () => {
    setNewExperience({
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      area: "",
      image: "", // Resetta il campo immagine
    });
    setSelectedImage(null); // Resetta immagine
    setModalMode("add");
    setCurrentId(null);
  };

  return (
    <>
      <div className="bg-white rounded-4 position-relative tabPro mt-3 p-4 cardOmbra">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h5 className="fw-bold m-0">Esperienza</h5>
          {flagPerm && (
            <IconButton onClick={handleShow}>
              <AddIcon style={{ color: "black", fontSize: "30px" }} />
            </IconButton>
          )}
        </div>

        {experiences.length > 0 ? (
          experiences.map((experience, index) => (
            <div
              key={index}
              className="d-flex align-items-center justify-content-between mb-4"
            >
              <div className="d-flex align-items-center">
                <div className="me-2">
                  <img
                    src={
                      experience.image ||
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuy8Th0qZPzQUtjChGa8fvmoGeCdmk9mtpWg&s"
                    }
                    style={{ width: "50px", height: "50px" }}
                    alt="company"
                  />
                </div>
                <div>
                  <h6 className="m-0 fw-bold">{experience.role}</h6>
                  <p className="m-0 pExp">{experience.company}</p>
                  <p className="m-0 jobCity">
                    {experience.area} &nbsp; &nbsp;
                    {moment(experience.startDate).format("DD/MM/YY")} - &nbsp;
                    {experience.endDate
                      ? moment(experience.endDate).format("DD/MM/YY")
                      : "Presente"}
                  </p>
                </div>
              </div>
              <div>
                {flagPerm && (
                  <>
                    <IconButton
                      onClick={() => handleEditExperience(experience)}
                    >
                      <EditIcon style={{ color: "black", fontSize: "25px" }} />
                    </IconButton>
                  </>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>Nessuna esperienza trovata</p>
        )}
      </div>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalMode === "add"
              ? "Aggiungi Esperienza"
              : "Modifica Esperienza"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Ruolo"
              variant="outlined"
              className="w-100"
              value={newExperience.role}
              onChange={(e) =>
                setNewExperience({ ...newExperience, role: e.target.value })
              }
            />
            <TextField
              label="Azienda"
              variant="outlined"
              className="w-100 mt-3"
              value={newExperience.company}
              onChange={(e) =>
                setNewExperience({ ...newExperience, company: e.target.value })
              }
            />
            <TextField
              label="Area"
              variant="outlined"
              className="w-100 mt-3"
              value={newExperience.area}
              onChange={(e) =>
                setNewExperience({ ...newExperience, area: e.target.value })
              }
            />
            <div className="d-flex justify-content-between mt-3">
              <TextField
                label="Data Inizio"
                type="date"
                variant="outlined"
                className="w-50"
                InputLabelProps={{ shrink: true }}
                value={newExperience.startDate}
                onChange={(e) =>
                  setNewExperience({
                    ...newExperience,
                    startDate: e.target.value,
                  })
                }
              />
              <TextField
                label="Data Fine"
                type="date"
                variant="outlined"
                className="w-50"
                InputLabelProps={{ shrink: true }}
                value={newExperience.endDate}
                onChange={(e) =>
                  setNewExperience({
                    ...newExperience,
                    endDate: e.target.value,
                  })
                }
              />
            </div>
            <TextField
              label="Descrizione"
              rows={4}
              multiline
              variant="outlined"
              className="w-100 mt-3"
              value={newExperience.description}
              onChange={(e) =>
                setNewExperience({
                  ...newExperience,
                  description: e.target.value,
                })
              }
            />
            <TextField
              label="Immagine URL"
              variant="outlined"
              className="w-100 mt-3"
              value={newExperience.image}
              onChange={(e) =>
                setNewExperience({
                  ...newExperience,
                  image: e.target.value,
                })
              }
            />
            <div className="mt-3">
              <label htmlFor="imageUpload">Carica Immagine</label>
              <input
                type="file"
                id="imageUpload"
                onChange={handleImageChange}
                accept="image/*"
                className="form-control"
              />
            </div>

            {modalMode === "add" ? (
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className="w-100 mt-3"
              >
                Aggiungi
              </Button>
            ) : (
              <>
                <Button
                  onClick={() => deleteExperience(currentId)}
                  variant="outlined"
                  color="error"
                  className="w-50 mt-3"
                >
                  Delete
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className="w-50 mt-3"
                >
                  Modifica
                </Button>
              </>
            )}
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Experience;
