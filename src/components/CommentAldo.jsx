import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Avatar,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import StarIcon from "@mui/icons-material/Star";

const CommentAldo = () => {
  const profile = useSelector((state) => state.profile.profile); // Accesso al profilo dallo stato Redux
  const profileImage = profile?.image ? profile.image : null;

  // Stato per il commento corrente, la lista dei commenti e il voto
  const [currentComment, setCurrentComment] = useState("");
  const [currentRating, setCurrentRating] = useState(1); // Default rating
  const [comments, setComments] = useState([]);

  // Gestione del cambiamento della textarea
  const handleCommentChange = (event) => {
    setCurrentComment(event.target.value);
  };

  // Gestione del cambiamento del voto
  const handleRatingChange = (event) => {
    setCurrentRating(parseInt(event.target.value));
  };

  // Gestione del clic sul pulsante "Carica"
  const handleSubmit = () => {
    if (currentComment.trim()) {
      setComments([
        ...comments,
        { text: currentComment, rating: currentRating },
      ]);
      setCurrentComment(""); // Pulisce la textarea dopo l'invio
      setCurrentRating(1); // Reset rating after submit
    }
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
            padding: "5px 10px", // Ridotto il padding per renderla più bassa
            border: "2px solid #ced4da",
            width: "100%",
            height: "40px", // Altezza fissa
            resize: "none",
            fontSize: "14px",
            color: "#495057",
            fontFamily: "Arial, sans-serif",
            marginLeft: "0", // Rimosso lo spazio tra la textarea e l'immagine del profilo
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
            height: "40px", // Altezza fissa
            marginLeft: "10px",
            padding: "10px 16px",
            textTransform: "none",
            alignSelf: "center", // Allinea verticalmente il bottone
          }}
        >
          Carica
        </Button>
      </div>
      <div className="mt-3">
        <h4>Commenti:</h4>
        <div>
          {comments.map((comment, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
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
              <div
                style={{
                  backgroundColor: "#F2F2F2",
                  borderRadius: 5,
                  padding: "10px",
                  fontSize: "14px",
                  color: "#495057",
                  fontFamily: "Arial, sans-serif",
                  maxWidth: "80%", // Limita la larghezza del box
                  wordWrap: "break-word", // Fa andare a capo il testo lungo
                  marginRight: "10px", // Spazio tra il box e il voto
                  flex: 1, // Permette al box di occupare spazio disponibile
                }}
              >
                {comment.text}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "auto", // Sposta il voto a destra
                }}
              >
                <span style={{ marginRight: "5px" }}>{comment.rating}</span>
                <StarIcon style={{ color: "#FFD700" }} />{" "}
                {/* Colore giallo per le stelle */}
              </div>
              s
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentAldo;
