import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentsAction } from "../redux/actions/profileActions";
import { Button, TextField } from "@mui/material";

const CommentAldo = ({ postId }) => {
useEffect(() => {
  console.log("Questo è l'ID del post ",postId)
},[postId]) 

  // const dispatch = useDispatch()
  // const comments = useSelector((state)=> state.comments.comments)
  // const error = useSelector((state) => state.comments.error)
  // console.log('QUESTI SONO I COMMENT',comments)

  const [comments, setComments] = useState({
    comment: "",
    rate: "",
    elementId: postId,
  });

  // useEffect(() => {
  //   dispatch(fetchCommentsAction());
  // }, [dispatch]);

  const handleSubmit = (e) => {
    //questo sarebbe il post
    e.preventDefault();
    // ora inviamo i dati alle API di EPICODE per salvare la prenotazione
    // inviamo i dati tramite una chiamata con metodo 'POST'

        // Aggiungi l'ID del post al commento prima di inviare
        setComments((prevState) => ({
          ...prevState,
          elementId: postId,
        }));

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmUyYmNiNjU0M2E0YzAwMTU5MDFlMTkiLCJpYXQiOjE3MjYxMzU0NzgsImV4cCI6MTcyNzM0NTA3OH0.zqvix3VlQQc_YEOZqgIjN6p7UYvvFRZHJiHAWVImpI4",
      },
      body: JSON.stringify(comments),
    })
      .then((response) => {
        if (response.ok) {
          // svuota i campi
          setComments({
            comment: "",
            rate: "",
            elementId: "",
          });

        } else {
          alert("riprova più tardi");
          throw new Error("errore!");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handleChange = (e, property) => {
    //questo è per i campi di input
    setComments({
      ...comments,
      [property]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField
          className="w-100"
          id="outlined-basic"
          label="Commento"
          variant="outlined"
          required
          onChange={(e) => {
            handleChange(e, "comment");
          }}
          value={comments.comment}
        />
      </div>
      <div>
        <TextField
          className="w-100 mb-2"
          id="outlined-basic"
          label="Rate"
          type="number"
          variant="outlined"
          required
          onChange={(e) => {
            handleChange(e, "rate");
          }}
          value={comments.rate}
        />
      </div>

      <Button type="submit" variant="inserisci">
        Invia
      </Button>
    </form>
  );
};
export default CommentAldo;
