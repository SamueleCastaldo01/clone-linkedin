function SingleComment(props) {
  const handleDelete = (commentId) => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + commentId, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmUyYmNiNjU0M2E0YzAwMTU5MDFlMTkiLCJpYXQiOjE3MjYxMzU0NzgsImV4cCI6MTcyNzM0NTA3OH0.zqvix3VlQQc_YEOZqgIjN6p7UYvvFRZHJiHAWVImpI4",
      },
    })
      .then((response) => {
        if (response.ok) {
          //eliminato con sucesso
          props.onCommentDeleted(); // aggiorna la lista dei commenti
        } else {
          alert("Errore nella cancellazione del commento, riprova più tardi.");
          throw new Error("Errore durante la cancellazione");
        }
      })
      .catch((err) => {
        alert("Errore di rete: " + err.message);
      });
  };

  return (
    <>
      <div className="d-flex justify-content-between" key={props._id}>
        <p>{props.comment}</p>
        <p>{props.rate}</p>
        <button onClick={() => handleDelete(props._id)}>delete</button>
      </div>
    </>
  );
}

export default SingleComment;
