import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentsAction } from "../redux/actions/profileActions";

const CommentAldo = ({key}) => {
  const dispatch = useDispatch()
  const comments = useSelector((state)=> state.comments.comments)
  const error = useSelector((state) => state.comments.error)
  console.log('QUESTI SONO I COMMENT',comments)

  useEffect(()=>{
    dispatch(fetchCommentsAction())
  }, [dispatch])

  return <h3>ciao</h3>;
};
export default CommentAldo;
