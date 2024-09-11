import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsAction } from "../redux/actions/profileActions";

const TestPostsPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts); // Accesso ai post dal reducer
  const error = useSelector((state) => state.posts.error); // Accesso agli errori dal reducer

  useEffect(() => {
    // Richiama l'azione al caricamento della pagina
    dispatch(fetchPostsAction());
  }, [dispatch]);

  // Usa un secondo useEffect per loggare i post quando cambiano
  useEffect(() => {
    if (posts && posts.length > 0) {
      console.log('Array post fetch:', posts);
    }
  }, [posts]);

  return (
    <div>
      <h1>Posts</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {posts && posts.map((post, index) => (
            <li key={index}>{post.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TestPostsPage;

