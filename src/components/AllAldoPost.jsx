import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPostsAction,
  deletePostAction,
  updatePostAction,
} from "../redux/actions/profileActions";
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
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import { Modal, Button } from "react-bootstrap";
import CardMedia from "@mui/material/CardMedia";
import CommentAldo from "./CommentAldo";

const AllAldoPost = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  const [expandedPosts, setExpandedPosts] = useState({});
  const [editPost, setEditPost] = useState(null);
  const [editText, setEditText] = useState("");
  const [show, setShow] = useState(false);
  const [postId, setPostId] = useState("");
  const [likedPosts, setLikedPosts] = useState({});

  // Effetto per caricare i post quando il componente è montato
  useEffect(() => {
    dispatch(fetchPostsAction());
  }, [dispatch]);

  // Funzione per avviare la modifica di un post
  const handleEditPost = (post) => {
    setEditPost(post);
    setEditText(post.text);
    setPostId(post._id);
    setShow(true);
  };

  // Funzione per eliminare un post
  const handleDeletePost = (postId) => {
    dispatch(deletePostAction(postId));
    setShow(false);
  };

  // Funzione per salvare le modifiche al post
  const handleSaveEditPost = () => {
    dispatch(updatePostAction(editPost._id, { text: editText }));
    setShow(false);
  };

  // Funzione per gestire l'espansione dei commenti
  const handleExpandClick = (postId) => {
    setExpandedPosts((prevExpanded) => ({
      ...prevExpanded,
      [postId]: !prevExpanded[postId],
    }));
  };

  // Funzione per alternare il "mi piace" su un post
  const toggleLike = (postId) => {
    setLikedPosts((prevLikes) => ({
      ...prevLikes,
      [postId]: !prevLikes[postId],
    }));
  };

  // Funzione per gestire il click sul pulsante dei commenti
  const handleCommentClick = (postId) => {
    handleExpandClick(postId);
  };

  // Funzione per gestire il click sul pulsante "mi piace"
  const handleLikeClick = (postId) => {
    toggleLike(postId);
  };

  // Funzione chiamata quando un commento è stato aggiunto
  const handleCommentAdded = () => {
    console.log("Commento aggiunto! Aggiorna i commenti o lo stato qui.");
  };

  // Stili per i pulsanti
  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    padding: "10px",
    border: "none",
    background: "none",
    color: "inherit",
    transition: "color 0.3s ease, background-color 0.3s ease",
  };

  // Stili per i pulsanti delle icone
  const iconButtonStyle = {
    transition: "color 0.3s ease",
  };

  return (
    <div style={{ marginBottom: "100px" }}>
      {/* Mappa attraverso tutti i post e li visualizza */}
      {posts.map((post) => (
        <Card
          sx={{ maxWidth: 345 }}
          key={post._id}
          className="my-3 rounded-4 cardOmbra"
        >
          <CardHeader
            sx={{ padding: "15px 10px 0px 10px" }}
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {post.username[0]}
              </Avatar>
            }
            action={
              <IconButton
                aria-label="settings"
                onClick={() => handleEditPost(post)}
                style={iconButtonStyle}
              >
                <MoreVertIcon />
              </IconButton>
            }
            title={post.username}
            subheader={
              <span style={{ display: "flex", alignItems: "center" }}>
                {new Date(post.createdAt).toLocaleString()}
                <IconButton aria-label="public" style={iconButtonStyle}>
                  <PublicIcon style={{ fontSize: "20px" }} />
                </IconButton>
              </span>
            }
          />
          <CardContent sx={{ padding: "8px 10px 15px 10px" }}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {post.text}
            </Typography>
          </CardContent>

          <CardMedia
            component="img"
            height="300"
            image="https://placedog.net/500"
            alt="Paella dish"
          />
          <CardActions
            disableSpacing
            className="d-flex justify-content-end mx-3"
          >
            {/* Rimosso il componente ExpandMore */}
          </CardActions>
          <div className="d-flex justify-content-around flex-grow-1 mb-2">
            <div className="d-flex align-items-center">
              <IconButton
                aria-label="add to favorites"
                onClick={() => handleLikeClick(post._id)}
                style={{ ...iconButtonStyle, marginRight: "8px" }}
              >
                {likedPosts[post._id] ? <ThumbUpIcon /> : <ThumbUpOffAltIcon />}
              </IconButton>
              <button
                onClick={() => handleLikeClick(post._id)}
                style={buttonStyle}
              >
                Consiglia
              </button>
            </div>
            <div className="d-flex align-items-center">
              <IconButton
                aria-label="add comment"
                onClick={() => handleCommentClick(post._id)}
                style={iconButtonStyle}
              >
                <CommentIcon />
              </IconButton>
              <button
                onClick={() => handleCommentClick(post._id)}
                style={buttonStyle}
              >
                Commenta
              </button>
            </div>
            <div className="d-flex align-items-center">
              <IconButton aria-label="share" style={iconButtonStyle}>
                <ShareIcon />
              </IconButton>
              <button style={buttonStyle}>Condividi</button>
            </div>
            <div className="d-flex align-items-center">
              <IconButton aria-label="send" style={iconButtonStyle}>
                <SendIcon />
              </IconButton>
              <button style={buttonStyle}>Invia</button>
            </div>
          </div>
          <Collapse in={expandedPosts[post._id]} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography sx={{ marginBottom: 2 }}>
                <CommentAldo
                  postId={post._id}
                  handleCommentAdded={handleCommentAdded}
                />
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}

      {/* Modal per la modifica del post */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TextField
            label="Modifica il testo del post"
            multiline
            rows={4}
            fullWidth
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Annulla
          </Button>
          <Button variant="primary" onClick={handleSaveEditPost}>
            Salva Cambiamenti
          </Button>
          <Button variant="danger" onClick={() => handleDeletePost(postId)}>
            Elimina Post
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AllAldoPost;
