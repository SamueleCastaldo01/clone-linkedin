import { Avatar, Button, TextField, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArticleIcon from "@mui/icons-material/Article";
import { useState } from "react";
import { addPostAction } from "../redux/actions/profileActions"; // Azione per creare un post
import { Modal } from "react-bootstrap";

const NewAldoPost = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.profile);

  const [show, setShow] = useState(false);
  const [newPost, setNewPost] = useState({
    text: "", // Solo il campo "text" è necessario per creare un post
  });

  const handleClose = () => {
    resetForm();
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPostAction(newPost)); // Dispatch dell'azione per creare un nuovo post
    handleClose();
  };

  const resetForm = () => {
    setNewPost({ text: "" });
  };

  return (
    <div className="bg-white p-3 rounded-3">
      <div className="d-flex">
        <Avatar
          src={profile.image}
          sx={{ bgcolor: deepOrange[500], width: 45, height: 45 }}
        />
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
          <Modal.Title>Crea un nuovo post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Di cosa vorresti parlare?"
              rows={4}
              multiline
              className="w-100 mt-3"
              value={newPost.text}
              onChange={(e) =>
                setNewPost({
                  ...newPost,
                  text: e.target.value,
                })
              }
            />
            <div className="d-flex justify-content-end align-items-center mt-3">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className="w-25"
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

