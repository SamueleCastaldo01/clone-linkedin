import { useDispatch, useSelector } from "react-redux";

const CommentAldo = ({key}) => {
  const dispatch = useDispatch()
  const comments = useSelector((state)=> state.comments.comments)
  const error = useSelector((state) => state.comments.error)
  console.log('QUESTI SONO I COMMENT',comments)
  

  return <h3>ciao</h3>;
};
export default CommentAldo;
