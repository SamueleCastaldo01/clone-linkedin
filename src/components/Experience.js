import React, { useEffect, useState } from 'react';
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from "@mui/material/TextField";
import moment from 'moment';

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRlYjEzNjRkMGRlZjAwMTVjZWYxMDAiLCJpYXQiOjE3MjU4NzAzOTAsImV4cCI6MTcyNzA3OTk5MH0.nK4vV-AVZXmSgtCSvtzNJCdksRFTv8gCSK4Pr8tzr9Y";

function Experience() {
  const [show, setShow] = useState(false);
  const [experiences, setExperiences] = useState([]);
  const [newExperience, setNewExperience] = useState({
    role: '',
    company: '',
    startDate: '',
    endDate: '',
    description: '',
    area: '',
  });
  const profile = useSelector((state) => state.profile.profile);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Funzione per fetchare le esperienze
  const fetchExperiences = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${profile._id}/experiences`, {
        headers: {
          'Authorization': `Bearer ${TOKEN}`,
        },
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const data = await response.json();
      setExperiences(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  // Funzione per aggiungere una nuova esperienza
  const addExperience = async (event) => {
    event.preventDefault();
    
    // Log dell'oggetto newExperience prima dell'invio
    console.log("New experience to be submitted:", JSON.stringify(newExperience, null, 2));
    
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${profile._id}/experiences`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN}`,
        },
        body: JSON.stringify(newExperience),
      });

      if (!response.ok) {
        const errorBody = await response.text();  // Cattura il corpo della risposta in caso di errore
        console.error("Error response body:", errorBody);
        throw new Error(`Response status: ${response.status}, Body: ${errorBody}`);
      }
      
      console.log("Server response:", await response.json());
      
      // Ricarica le esperienze dal server
      await fetchExperiences();
      
      setNewExperience({
        role: '',
        company: '',
        startDate: '',
        endDate: '',
        description: '',
        area: '',
      });
      handleClose();
    } catch (error) {
      console.error("Full error object:", error);
      console.error("Error message:", error.message);
    }
  };

  // Funzione per eliminare un'esperienza
  const deleteExperience = async (id) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${profile._id}/experiences/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${TOKEN}`,
        },
      });

      if (!response.ok) {
        const errorBody = await response.text();
        console.error("Error response body:", errorBody);
        throw new Error(`Response status: ${response.status}, Body: ${errorBody}`);
      }

      console.log("Experience deleted:", id);

      // Ricarica le esperienze dal server
      await fetchExperiences();
    } catch (error) {
      console.error("Full error object:", error);
      console.error("Error message:", error.message);
    }
  };

  // Esegui la fetch quando il componente è montato
  useEffect(() => {
    if (profile && profile._id) {
      fetchExperiences();
    }
  }, [profile]);

  return (
    <>
      <div className="bg-white rounded-4 position-relative tabPro mt-3 p-4">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div>
            <h5 className="fw-bold m-0 p-0">Esperienza</h5>
          </div>
          <div>
            <IconButton onClick={handleShow}>
              <AddIcon style={{ color: "black", fontSize: "30px" }} />
            </IconButton>
            <IconButton>
              <EditIcon style={{ color: "black", fontSize: "30px" }} />
            </IconButton>
          </div>
        </div>

        {experiences.map((experience, index) => (
          <div key={index} className="d-flex align-items-center mb-4">
            <div className="me-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuy8Th0qZPzQUtjChGa8fvmoGeCdmk9mtpWg&s"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
            <div>
              <h6 className="m-0 fw-bold">{experience.role}</h6>
              <p className="m-0">{experience.area}</p>
              <p className="m-0">
                Data inizio 
                {moment(experience.startDate).format('DD/MM/YY')} - 
                Data fine 
                {experience.endDate ? moment(experience.endDate).format('DD/MM/YY') : ' Presente'}
              </p>
              <p className="m-0">{experience.company}</p>
            </div>
            <div>
              <IconButton onClick={() => deleteExperience(experience._id)}>
                <DeleteIcon style={{ color: "black", fontSize: "30px" }} />
              </IconButton>
            </div>
          </div>
        ))}
      </div>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="experience-form" onSubmit={addExperience}>
            <TextField
              id="outlined-basic"
              label="Role"
              variant="outlined"
              className="w-100"
              value={newExperience.role}
              onChange={(e) => setNewExperience({ ...newExperience, role: e.target.value })}
            />
            <TextField
              id="outlined-basic"
              label="Company"
              variant="outlined"
              className="w-100 mt-3"
              value={newExperience.company}
              onChange={(e) => setNewExperience({ ...newExperience, company: e.target.value })}
            />
            <TextField
              id="outlined-basic"
              label="Area"
              variant="outlined"
              className="w-100 mt-3"
              value={newExperience.area}
              onChange={(e) => setNewExperience({ ...newExperience, area: e.target.value })}
            />
            <div className="d-flex justify-content-between">
              <TextField
                id="date"
                label="Seleziona data di inizio"
                type="date"
                className="mt-3"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ width: "47%" }}
                value={newExperience.startDate}
                onChange={(e) => setNewExperience({ ...newExperience, startDate: e.target.value })}
              />
              <TextField
                id="date"
                label="Seleziona data di fine"
                type="date"
                className="mt-3"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ width: "47%" }}
                value={newExperience.endDate}
                onChange={(e) => setNewExperience({ ...newExperience, endDate: e.target.value })}
              />
            </div>
            <TextField
              id="outlined-basic"
              label="Descrizione"
              rows={4}
              multiline
              variant="outlined"
              className="w-100 mt-3"
              value={newExperience.description}
              onChange={(e) => setNewExperience({ ...newExperience, description: e.target.value })}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="contained" className="rounded-4" type="button" onClick={addExperience}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Experience;