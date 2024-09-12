import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPostsAction,
  deletePostAction,
  updatePostAction,
} from "../redux/actions/profileActions"; // Importa le azioni
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Collapse,
  TextField,
} from "@mui/material";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PublicIcon from "@mui/icons-material/Public";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp"; //
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import { Modal, Button } from "react-bootstrap";

import CardMedia from "@mui/material/CardMedia";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CommentAldo from "./CommentAldo";

const ExpandMore = ({ expand, onClick, ...other }) => {
  return (
    <div {...other}>
      <IconButton
        onClick={onClick}
        aria-expanded={expand}
        aria-label="show more"
        style={{
          transform: expand ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.3s ease",
        }}
      >
        <ExpandMoreIcon />
      </IconButton>
      <span>Commenti</span>
    </div>
  );
};

const AllAldoPost = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts); // Recupera i post dal Redux store

  const [expanded, setExpanded] = useState(false);
  const [editPost, setEditPost] = useState(null); // Post corrente in modifica
  const [editText, setEditText] = useState(""); // Testo del post in modifica
  const [show, setShow] = useState(false);
  const [postId, setPostId] = useState("");

  const [likedPosts, setLikedPosts] = useState({}); // Stato per tenere traccia dei post "likati"

  useEffect(() => {
    dispatch(fetchPostsAction()); // Fetch dei post al caricamento del componente
  }, [dispatch]);

  const handleEditPost = (post) => {
    setEditPost(post); // Imposta il post da modificare
    setEditText(post.text); // Imposta il testo per l'editing
    setPostId(post._id);
    setShow(true); // Mostra la modale
  };

  const handleDeletePost = (postId) => {
    dispatch(deletePostAction(postId)); // Elimina il post
    setShow(false);
  };

  const handleSaveEditPost = () => {
    dispatch(updatePostAction(editPost._id, { text: editText })); // Modifica il post
    setShow(false); // Chiudi la modale
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // Funzione per gestire il "like" dei post
  const toggleLike = (postId) => {
    setLikedPosts((prevLikes) => ({
      ...prevLikes,
      [postId]: !prevLikes[postId], // Alterna il valore "like" del post
    }));
  };

  return (
    <div>
      {posts.map((post) => (
        <Card
          sx={{ maxWidth: 345 }}
          key={post._id}
          className="my-3 rounded-4 cardOmbra"
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {post.username[0]} {/* Mostra l'iniziale dell'utente */}
              </Avatar>
            }
            action={
              <IconButton
                aria-label="settings"
                onClick={() => handleEditPost(post)}
              >
                <MoreVertIcon />
              </IconButton>
            }
            title={post.username}
            subheader={new Date(post.createdAt).toLocaleString()}
          />
          <IconButton aria-label="public">
            <PublicIcon />
          </IconButton>
          <CardContent>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {post.text}
            </Typography>
          </CardContent>

          <CardMedia
            component="img"
            height="194"
            image="https://placedog.net/500"
            alt="Paella dish"
          />
          <CardActions disableSpacing className="justify-content-end mx-3">
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            />
          </CardActions>
          <div className="d-flex justify-content-around flex-grow-1">
            {/* Icona "like" con alternanza */}
            <IconButton
              aria-label="add to favorites"
              onClick={() => toggleLike(post._id)} // Gestisce il click sull'icona
            >
              {likedPosts[post._id] ? (
                <ThumbUpIcon /> // Mostra l'icona "like" se il post è "likato"
              ) : (
                <ThumbUpOffAltIcon /> // Mostra l'icona "non like" se non è "likato"
              )}
            </IconButton>
            <IconButton aria-label="add comment">
              <CommentIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton aria-label="send">
              <SendIcon />
            </IconButton>
          </div>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography sx={{ marginBottom: 2 }}>
                <CommentAldo postId={post._id} />
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}

      {/* Modale per modificare il post */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TextField
            label="Modifica il testo"
            multiline
            rows={4}
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="w-100"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Annulla
          </Button>
          <Button variant="primary" onClick={handleSaveEditPost}>
            Salva modifiche
          </Button>
          <Button variant="danger" onClick={() => handleDeletePost(postId)}>
            DELETE
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AllAldoPost;
