import React, { useState, useEffect } from "react";
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
  const [currentComment, setCurrentComment] = useState("");
  const [currentRating, setCurrentRating] = useState(1); // Default rating
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // Recupera i commenti all'inizio
  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmUyYmNiNjU0M2E0YzAwMTU5MDFlMTkiLCJpYXQiOjE3MjYxMzU0NzgsImV4cCI6MTcyNzM0NTA3OH0.zqvix3VlQQc_YEOZqgIjN6p7UYvvFRZHJiHAWVImpI4",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`La chiamata non è andata a buon fine: ${response.status}`);
        }
      })
      .then((arrayOfComments) => {
        console.log("Commenti recuperati dal server:", arrayOfComments);
        // Limita a 10 commenti
        setComments(arrayOfComments.slice(-10));
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Errore nel recupero dati:", err.message);
        setIsLoading(false);
        setIsError(true);
      });
  };

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
          sx={{
            bgcolor: deepOrange[500],
            width: 45,
            height: 45,
          }}
        >
          A
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
          Carica
        </Button>
      </div>
      <div className="mt-3">
        <h4>Commenti:</h4>
        <div>
          {isLoading ? (
            <p>Caricamento in corso...</p>
          ) : isError ? (
            <p>Errore nel recupero dei commenti</p>
          ) : (
            comments.map((comment, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: deepOrange[500],
                    width: 30,
                    height: 30,
                    marginRight: 10,
                  }}
                >
                  A
                </Avatar>
                <div
                  style={{
                    backgroundColor: "#F2F2F2",
                    borderRadius: 5,
                    padding: "10px",
                    fontSize: "14px",
                    color: "#495057",
                    fontFamily: "Arial, sans-serif",
                    maxWidth: "80%",
                    wordWrap: "break-word",
                    marginRight: "10px",
                    flex: 1,
                    whiteSpace: "pre-wrap", // Mantiene la formattazione del testo
                    overflowWrap: "break-word", // Evita il testo fuori dal box
                  }}
                >
                  {comment.comment}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "auto",
                  }}
                >
                  <span style={{ marginRight: "5px" }}>{comment.rate}</span>
                  <StarIcon style={{ color: "#FFD700" }} />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentAldo;
