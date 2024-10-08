import { Avatar, Button, TextField, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArticleIcon from "@mui/icons-material/Article";
import axios from "axios";
import { useState } from "react";
import {
  addPostAction,
  fetchPostsAction,
} from "../redux/actions/profileActions"; // Azione per creare un post
import { Modal } from "react-bootstrap";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import DescriptionIcon from "@mui/icons-material/Description";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import BarChartIcon from "@mui/icons-material/BarChart";
import StarsIcon from "@mui/icons-material/Stars";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { uploadImageAction } from "../redux/actions/profileActions";

const NewAldoPost = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.profile);
  const posts = useSelector((state) => state.posts.posts);
  const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRmZjUxM2FmNDM0YjAwMTU5ZDgzMzAiLCJpYXQiOjE3MjU5NTMyOTksImV4cCI6MTcyNzE2Mjg5OX0.n-M-g7ZghOBgKrcQWWZVAbMrGzHoBDjK8KPBUQay_9A";

  const [show, setShow] = useState(false);
  const [newPost, setNewPost] = useState({
    text: "", // Solo il campo "text" è necessario per creare un post
  });
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClose = () => {
    resetForm();
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await dispatch(addPostAction(newPost));
      console.log("Post aggiunto");
  
      await dispatch(fetchPostsAction());
      console.log("Post aggiornati");
  
      // 3. Trova l'ultimo post aggiunto. Assumiamo che il post appena creato sia l'ultimo nella lista
      // Nota: Potrebbe essere necessario un modo più robusto per identificare il post appena creato
      const latestPost = posts[posts.length - 1];  //errore non prende l'ultmo posts
  
      if (latestPost && latestPost._id) {
        console.log("ID del post appena creato:", latestPost._id);
  
          console.log("Avvio del caricamento dell'immagine per il post con ID:", latestPost._id);
          handleFetchImage(latestPost._id);
    
      } else {
        console.error("Impossibile trovare l'ID del post appena creato.");
      }
      handleClose();
    } catch (error) {
      console.error("Errore durante il salvataggio del post o l'aggiornamento dei post:", error);
    }
  };
  


  const handleFetchImage = async (postId) => {
    if (!selectedImage) return;

    const formData = new FormData();
    formData.append("profile", selectedImage); // Supponendo che si sta caricando un'immagine del profilo

    try {
      await axios.post(
        `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

    } catch (error) {
      console.error(
        "Error uploading image:",
        error.response?.data || error.message
      );
    }
  };


  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]); // Memorizza l'immagine selezionata
  };

  const resetForm = () => {
    setNewPost({ text: "" });
    setSelectedImage(null);
  };

  return (
    <div className="bg-white p-3 rounded-4 cardOmbra">
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

      <div className="d-flex justify-content-between mt-3">
        <div className="d-flex align-items-center">
          <InsertPhotoIcon style={{ color: "#378FE9" }} />
          <Typography
            style={{ fontSize: "14px" }}
            variant="p"
            component="div"
            className="ms-1"
          >
            Contenuti multimediali
          </Typography>
        </div>
        <div className="d-flex align-items-center">
          <CalendarMonthIcon style={{ color: "#C37D16" }} />
          <Typography
            style={{ fontSize: "14px" }}
            variant="p"
            component="div"
            className="ms-1"
          >
            Evento
          </Typography>
        </div>
        <div className="d-flex align-items-center">
          <ArticleIcon style={{ color: "#E06847" }} />
          <Typography
            style={{ fontSize: "14px" }}
            variant="p"
            component="div"
            className="ms-1"
          >
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
              className="w-100 mt-1"
              value={newPost.text}
              onChange={(e) =>
                setNewPost({
                  ...newPost,
                  text: e.target.value,
                })
              }
              variant="standard" // Usa 'standard' per rimuovere il bordo
              InputProps={{
                disableUnderline: true, // Rimuove il bordo inferiore
              }}
            />
            <input
              type="file"
              onChange={handleImageChange}
              className="form-control mt-3"
              accept="image/*"
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
              <AccessTimeIcon style={{ color: "#666666" }} className="m-3" />
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
