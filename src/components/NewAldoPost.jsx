import { Avatar, Button, TextField, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArticleIcon from "@mui/icons-material/Article";
import { useEffect, useState } from "react";
import {
  AddExperience,
  deleteExperienceAction,
  Experiencesfetch,
  modifyExperienceAction,
} from "../redux/actions/profileActions";
import { Modal } from "react-bootstrap";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import DescriptionIcon from "@mui/icons-material/Description";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import BarChartIcon from "@mui/icons-material/BarChart";
import StarsIcon from "@mui/icons-material/Stars";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

const NewAldoPost = () => {
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.experiences.experiences);
  const profile = useSelector((state) => state.profile.profile);

  const idAldo = "66dff513af434b00159d8330";
  const [flagPerm, setFlagPerm] = useState(false);

  const [show, setShow] = useState(false);
  const [modalMode, setModalMode] = useState("add"); // "add" or "edit"
  const [currentId, setCurrentId] = useState(null);
  const [newExperience, setNewExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  useEffect(() => {
    if (profile && profile._id) {
      dispatch(Experiencesfetch(profile._id));
    }

    if (idAldo === profile._id) {
      setFlagPerm(true);
    } else {
      setFlagPerm(false);
    }
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
      dispatch(AddExperience(profile._id, newExperience));
    } else if (modalMode === "edit") {
      dispatch(modifyExperienceAction(profile._id, currentId, newExperience));
    }
    handleClose();
  };

  const resetForm = () => {
    setNewExperience({
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      area: "",
    });
    setModalMode("add");
    setCurrentId(null);
  };

  return (
    <div className="bg-white p-3 rounded-3">
      <div className="d-flex">
        <Avatar
          src={profile.image}
          sx={{ bgcolor: deepOrange[500], width: 45, height: 45 }}
        >
          {/* {profile.name[0]} */}
        </Avatar>
        <Button
          onClick={handleShow}
          className="flex-grow-1 mx-2"
          variant="outlined"
          sx={{
            textAlign: "left",
            display: "flex",
            justifyContent: "flex-start",
          }}
          style={{
            borderRadius: 50,
            textTransform: "none",
            padding: "10px 16px",
            border: "2px solid #ced4da",
            color: "#A3A3A3",
          }}
        >
          Crea un post
        </Button>
      </div>
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <InsertPhotoIcon style={{ color: "#378FE9" }} />
          <Typography variant="h6" component="div" className="ms-1">
            Contenuti multimediali
          </Typography>
        </div>
        <div className="d-flex align-items-center">
          <CalendarMonthIcon style={{ color: "#C37D16" }} />
          <Typography variant="h6" component="div" className="ms-1">
            Evento
          </Typography>
        </div>
        <div className="d-flex align-items-center">
          <ArticleIcon style={{ color: "#E06847" }} />
          <Typography variant="h6" component="div" className="ms-1">
            Scrivi un articolo
          </Typography>
        </div>
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
              label="Di cosa vorresti parlare?"
              rows={4}
              multiline
              className="w-100 mt-3"
              value={newExperience.description}
              onChange={(e) =>
                setNewExperience({
                  ...newExperience,
                  description: e.target.value,
                })
              }
            />
            <div>
              <SentimentSatisfiedAltIcon style={{ color: "#666666" }} />
            </div>
            <div className="d-flex w-50 justify-content-between mt-3">
              <InsertPhotoIcon style={{ color: "#666666" }} />
              <CalendarMonthIcon style={{ color: "#666666" }} />
              <StarsIcon style={{ color: "#666666" }} />
              <CardTravelIcon style={{ color: "#666666" }} />
              <BarChartIcon style={{ color: "#666666" }} />
              <DescriptionIcon style={{ color: "#666666" }} />
              <AccountBoxIcon style={{ color: "#666666" }} />
            </div>
            <div className="d-flex justify-content-end align-items-center ">
              <AccessTimeIcon style={{ color: "#666666" }} />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className="w-25 m-3"
                style={{
                  borderRadius: 50,
                }}
              >
                Pubblica
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default NewAldoPost;
