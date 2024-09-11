import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsAction } from "../redux/actions/profileActions";

const TestPostsPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts); // Accesso ai post dal reducer
  console.log('ECCO I POST',posts);
  const error = useSelector((state) => state.posts.error); // Accesso agli errori dal reducer

  useEffect(() => {
    dispatch(fetchPostsAction()); // Richiama l'azione al caricamento della pagina
    console.log('ECCO I POST',posts);
  }, [dispatch]);

  useEffect(()=> {
    console.log('Array post fetch:', posts);
  }, [])

  return (
    <div>
      <h1>Posts</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {posts.map((post, index) => (
            <li key={index}>{post.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TestPostsPage;
