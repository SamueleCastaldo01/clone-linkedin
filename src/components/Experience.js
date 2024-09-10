import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Experiencesfetch } from "../actions/profileActions"; // Importa l'azione
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import moment from "moment";

const Experience = () => {
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.experiences.experiences); // Recupera le esperienze dallo stato Redux
  const profile = useSelector((state) => state.profile.profile); // Recupera il profilo dallo stato Redux

  const [show, setShow] = useState(false);
  const [newExperience, setNewExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  // Effettua il dispatch dell'azione per fetchare le esperienze quando il profilo è disponibile
  useEffect(() => {
    if (profile && profile._id) {
      dispatch(Experiencesfetch(profile._id));
    }
  }, [dispatch, profile]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addExperience = async (event) => {
    event.preventDefault();
    // Simulazione dell'aggiunta esperienza (puoi integrarla con Redux se necessario)
    setNewExperience({
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      area: "",
    });
    handleClose(); // Chiude il modal
  };

  return (
    <>
      <div className="bg-white rounded-4 position-relative tabPro mt-3 p-4">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h5 className="fw-bold m-0">Esperienza</h5>
          <IconButton onClick={handleShow}>
            <AddIcon style={{ color: "black", fontSize: "30px" }} />
          </IconButton>
        </div>

        {experiences.length > 0 ? (
          experiences.map((experience, index) => (
            <div key={index} className="d-flex align-items-center mb-4">
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
                  {moment(experience.startDate).format("DD/MM/YY")} -{" "}
                  {experience.endDate
                    ? moment(experience.endDate).format("DD/MM/YY")
                    : "Presente"}
                </p>
                <p className="m-0">{experience.company}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Nessuna esperienza trovata</p>
        )}
      </div>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi Esperienza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={addExperience}>
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
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className="w-100 mt-3"
            >
              Salva
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Experience;
