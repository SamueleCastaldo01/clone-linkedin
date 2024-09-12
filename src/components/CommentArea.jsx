import { useState, useEffect } from "react";
import CommentList from "./CommentList";

function CommentArea({ postId }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setComments([]);
    fetchComments();
  }, [postId]);

  const fetchComments = () => {
    // recuperiamo tramite una chiamata API le nostre prenotazioni
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + postId, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmUyYmNiNjU0M2E0YzAwMTU5MDFlMTkiLCJpYXQiOjE3MjYxMzU0NzgsImV4cCI6MTcyNzM0NTA3OH0.zqvix3VlQQc_YEOZqgIjN6p7UYvvFRZHJiHAWVImpI4",
      },
    })
      .then((response) => {
        // finale buono 🙂
        if (response.ok) {
          // la chiamata ha tornato 200
          return response.json();
        } else {
          // la chiamata ha tornato 400, 401, 403, 404, 500
          throw new Error("La chiamata non è andata a buon fine");
        }
      })
      .then((arrayOfComments) => {
        console.log("PRENOTAZIONI RECUPERATE DAL SERVER", arrayOfComments);
        setComments(arrayOfComments);
        setIsLoading(false);
      })
      .catch((err) => {
        // finale cattivo 😦 problema di rete?
        console.log("ERRORE NEL RECUPERO DATI (internet)?", err);
        // spegniamo lo spinner anche qua!
        setIsLoading(false);
        setIsError(true);
      });
  };

  return (
    <>
      <CommentList
        onCommentAdded={fetchComments}
        comments={comments}
        isLoading={isLoading}
        isError={isError}
        asin={postId}
      />
    </>
  );
}

export default CommentArea;
