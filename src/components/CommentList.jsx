
import SingleComment from "./SingleComment";
import { Alert } from "react-bootstrap";
import CircularProgress from "@mui/material/CircularProgress";

function CommentList(props) {
  console.log(props.asin);
  return (
    <>
      <h5>Commenti</h5>
      {props.isLoading && <CircularProgress />}
      {props.isError && (
        <Alert variant="danger">Oops! Qualcosa è andato storto 😱</Alert>
      )}

      {props.comments.map((comment) => {
        return (
          <SingleComment
            onCommentDeleted={props.onCommentAdded}
            comment={comment.comment}
            rate={comment.rate}
            _id={comment._id}
          />
        );
      })}
    </>
  );
}

export default CommentList;