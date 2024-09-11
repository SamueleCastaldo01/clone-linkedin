import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostAction, deletePostAction, fetchPostsAction, updatePostAction } from "../redux/actions/profileActions";

const TestPostsPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts); // Accesso ai post dal reducer
  const error = useSelector((state) => state.posts.error); // Accesso agli errori dal reducer
  const [newPostText, setNewPostText] = useState("");
  const [editPostText, setEditPostText] = useState(""); // Testo del post in modifica
  const [postToEdit, setPostToEdit] = useState(null); // Stato per il post in modifica
  
  useEffect(() => {
    // Richiama l'azione al caricamento della pagina
    dispatch(fetchPostsAction());
  }, [dispatch]);

  // Usa un secondo useEffect per loggare i post quando cambiano
  useEffect(() => {
    if (posts && posts.length > 0) {
    }
  }, [posts]);

    // Funzione per aggiungere un nuovo post
  const handleAddPost = () => {
    const newPost = {
      text: newPostText, // L'unico campo richiesto dall'API
    };
    dispatch(addPostAction(newPost));
    setNewPostText(""); // Resetta il campo di input
  };

  // Funzione per cancellare un post
  const handleDeletePost = (postId) => {
    dispatch(deletePostAction(postId)); // Dispatch dell'azione per cancellare un post
  };

    // Funzione per iniziare la modifica di un post
    const handleEditPost = (post) => {
      setPostToEdit(post); // Imposta il post in modifica
      setEditPostText(post.text); // Imposta il testo del post in modifica
    };

    const handleSaveEditPost = () => {
      const updatedPost = {
        text: editPostText, // L'unico campo modificabile
      };
      dispatch(updatePostAction(postToEdit._id, updatedPost)); // Usa l'ID del post direttamente
      setPostToEdit(null); // Resetta lo stato di modifica
      setEditPostText(""); // Resetta il campo di testo
    };



    return (
      <div>
        <h1>Gestione dei Post</h1>
  
        {error && <p>Error: {error}</p>}
  
        <div>
          <h2>Aggiungi un nuovo post</h2>
          <input
            type="text"
            value={newPostText}
            onChange={(e) => setNewPostText(e.target.value)}
            placeholder="Inserisci il testo del nuovo post"
          />
          <button onClick={handleAddPost}>Aggiungi Post</button>
        </div>
  
        <ul>
          {posts &&
            posts.map((post) => (
              <li key={post._id}>
                {postToEdit && postToEdit._id === post._id ? (
                  <div>
                    <input
                      type="text"
                      value={editPostText}
                      onChange={(e) => setEditPostText(e.target.value)}
                    />
                    <button onClick={handleSaveEditPost}>Salva</button>
                    <button onClick={() => setPostToEdit(null)}>Annulla</button>
                  </div>
                ) : (
                  <div>
                    <p><strong>Testo:</strong> {post.text}</p>
                    <p><strong>Utente:</strong> {post.username}</p> {/* Campo generato dal server */}
                    <p><strong>Creato il:</strong> {new Date(post.createdAt).toLocaleString()}</p> {/* Campo generato dal server */}
                    <p><strong>Aggiornato il:</strong> {new Date(post.updatedAt).toLocaleString()}</p> {/* Campo generato dal server */}
                    <button onClick={() => handleEditPost(post)}>Modifica</button>
                    <button onClick={() => handleDeletePost(post._id)}>Elimina</button>
                  </div>
                )}
              </li>
            ))}
        </ul>
      </div>
    );
};

export default TestPostsPage;
