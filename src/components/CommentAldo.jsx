import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Commij from "../Commj.json";
import {
  Avatar,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  IconButton,
  Icon,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import StarIcon from "@mui/icons-material/Star";
import {
  fetchCommentsAction,
  updateCommentAction,
  deleteCommentAction,
} from "../redux/actions/profileActions"; // Importa le azioni Redux

const CommentAldo = ({ postId, onCommentAdded }) => {
  const dispatch = useDispatch();

  // Accesso ai commenti, caricamento e errori dallo store Redux
  const comments = useSelector((state) => state.comments.comments);
  const isLoading = useSelector((state) => state.comments.isLoading);
  const profile = useSelector((state) => state.profile.profile);
  const profileImage = profile?.image ? profile.image : null;

  // Stato locale per il commento e il voto attuali
  const [currentComment, setCurrentComment] = useState("");
  const [currentRating, setCurrentRating] = useState(1); // Default rating
  const [editingCommentId, setEditingCommentId] = useState(null); // Stato per il commento in modifica

  const POST_TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3MzAzNjQzYTU2ODAwMTU4ZWMzZDciLCJpYXQiOjE3MjYxNjExNjgsImV4cCI6MTcyNzM3MDc2OH0.Pm-Zmxol5m8J6pz7vUBhjGnTYgZUghS2DiMUOTcX5zA";

  const addCommentAction = () => {
    const comments = {
      comment: currentComment,
      rate: currentRating,
      elementId: postId, // L'id del post al quale associare il commento
    };

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + POST_TOKEN,
      },
      body: JSON.stringify(comments),
    })
      .then((response) => {
        if (response.ok) {
          // svuota i campi
          setCurrentComment("");
          setCurrentRating(1); // Resetta il rating

          // Chiama la funzione per ricaricare i commenti
          if (onCommentAdded) {
            onCommentAdded();
          }
        } else {
          alert("Riprova più tardi");
          throw new Error("Errore durante l'aggiunta del commento");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    dispatch(fetchCommentsAction(postId)); // Fetch dei commenti del post
  }, [dispatch, postId]);

  // Gestione del cambiamento del commento
  const handleCommentChange = (event) => {
    setCurrentComment(event.target.value);
  };

  // Gestione del cambiamento del voto
  const handleRatingChange = (event) => {
    setCurrentRating(parseInt(event.target.value));
  };

  // Gestione del click sul pulsante "Carica" o "Modifica"
  const handleSubmit = () => {
    if (currentComment.trim()) {
      if (editingCommentId) {
        // Se c'è un commento in modifica, esegui l'aggiornamento
        dispatch(
          updateCommentAction(editingCommentId, {
            comment: currentComment,
            rate: currentRating,
          })
        );
        setEditingCommentId(null); // Reset dell'ID in modifica
        dispatch(fetchCommentsAction());
      } else {
        // Altrimenti aggiungi un nuovo commento
        addCommentAction();
        dispatch(fetchCommentsAction());
      }
      setCurrentComment(""); // Pulisci il campo del commento
      setCurrentRating(1); // Reset del rating
    }
  };

  // Funzione per modificare un commento
  const handleEdit = (commentId, commentText, rating) => {
    setCurrentComment(commentText);
    setCurrentRating(rating);
    setEditingCommentId(commentId);
  };

  // Funzione per eliminare un commento
  const handleDelete = (commentId) => {
    dispatch(deleteCommentAction(commentId)); // Elimina il commento
  };

  return (
    <div className="bg-white p-1">
      <div className="d-flex align-items-center">
        <Avatar
          src={profileImage}
          sx={{
            bgcolor: profileImage ? "transparent" : deepOrange[500],
            width: 45,
            height: 45,
          }}
        >
          {!profileImage && profile?.name ? profile.name[0] : ""}
        </Avatar>
        <textarea
          className="flex-grow-1 mx-2"
          placeholder="Scrivi un commento..."
          value={currentComment}
          onChange={handleCommentChange}
          style={{
            borderRadius: 20,
            padding: "5px 10px",
            border: "2px solid #ced4da",
            width: "100%",
            height: "40px",
            resize: "none",
            fontSize: "14px",
            color: "#495057",
            fontFamily: "Arial, sans-serif",
            marginLeft: "0",
          }}
        />
        <FormControl style={{ marginLeft: "10px", minWidth: 60 }}>
          <InputLabel>Voto</InputLabel>
          <Select
            value={currentRating}
            onChange={handleRatingChange}
            size="small"
            label="Voto"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <MenuItem key={num} value={num}>
                {num}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          style={{
            borderRadius: 50,
            height: "40px",
            marginLeft: "10px",
            padding: "10px 16px",
            textTransform: "none",
            alignSelf: "center",
          }}
        >
          {editingCommentId ? "Modifica" : "Carica"}
        </Button>
      </div>

      <div className="mt-3">
        <h4>Commenti:</h4>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {comments.map((comment) => (
              <div
                className=" d-flex align-items-center justify-content-between"
                key={comment._id}
                style={{
                  marginBottom: "10px",
                }}
              >
                <div className=" pe-0" style={{ width: "40px" }}>
                  <Avatar
                    src={profileImage}
                    sx={{
                      bgcolor: profileImage ? "transparent" : deepOrange[500],
                      width: 30,
                      height: 30,
                      marginRight: 10,
                    }}
                  >
                    {!profileImage && profile?.name ? profile.name[0] : ""}
                  </Avatar>
                </div>
                <div
                  className=" flex-grow-1 px-2"
                  style={{
                    backgroundColor: "#F2F2F2",
                    borderRadius: 5,
                    padding: "10px",
                    fontSize: "14px",
                    color: "#495057",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  {comment.comment}
                </div>
                <div className=" d-flex align-items-center justify-content-end ps-0 ms-2">
                  <div>
                    <span style={{ marginRight: "5px" }}>{comment.rate}</span>
                    <StarIcon style={{ color: "#FFD700" }} />
                  </div>
                  <div className="ms-2">
                    <IconButton
                      onClick={() =>
                        handleEdit(comment._id, comment.comment, comment.rate)
                      }
                    >
                      <EditIcon color="primary" />
                    </IconButton>
                    <IconButton
                      aria-label="add comment"
                      onClick={() => handleDelete(comment._id)}
                    >
                      <DeleteIcon color="error" />
                    </IconButton>
                  </div>
                </div>
              </div>
            ))}

            {Commij.comments.map((comment) => (
              <div
                className=" d-flex align-items-center justify-content-between"
                key={comment._id}
                style={{
                  marginBottom: "10px",
                }}
              >
                <div className=" pe-0" style={{ width: "40px" }}>
                  <Avatar
                    src={comment.img}
                    sx={{
                      bgcolor: profileImage ? "transparent" : deepOrange[500],
                      width: 30,
                      height: 30,
                      marginRight: 10,
                    }}
                  >
                    {!profileImage && profile?.name ? profile.name[0] : ""}
                  </Avatar>
                </div>
                <div
                  className=" flex-grow-1 px-2"
                  style={{
                    backgroundColor: "#F2F2F2",
                    borderRadius: 5,
                    padding: "10px",
                    fontSize: "14px",
                    color: "#495057",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  {comment.comment}
                </div>
                <div className=" d-flex align-items-center justify-content-end ps-0 ms-2">
                  <div>
                    <span style={{ marginRight: "5px" }}>{comment.rate}</span>
                    <StarIcon style={{ color: "#FFD700" }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentAldo;
