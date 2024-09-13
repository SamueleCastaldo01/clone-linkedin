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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CommentAldo from "./CommentAldo";

const ExpandMore = ({ expand, onClick, ...other }) => {
  return (
    <div
      {...other}
      style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
    >
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
      <span onClick={onClick} style={{ marginLeft: "8px", cursor: "pointer" }}>
        Commenti
      </span>
    </div>
  );
};

const AllAldoPost = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  const [expandedPosts, setExpandedPosts] = useState({}); // Stato per tenere traccia dell'espansione dei post
  const [editPost, setEditPost] = useState(null); // Post corrente in modifica
  const [editText, setEditText] = useState(""); // Testo del post in modifica
  const [show, setShow] = useState(false);
  const [postId, setPostId] = useState("");
  const [likedPosts, setLikedPosts] = useState({}); // Stato per tenere traccia dei post "likati"

  useEffect(() => {
    dispatch(fetchPostsAction());
  }, [dispatch]);

  useEffect(() => {
    console.log("i miei post", posts)
  }, [posts])

  const handleEditPost = (post) => {
    setEditPost(post);
    setEditText(post.text);
    setPostId(post._id);
    setShow(true);
  };

  const handleDeletePost = (postId) => {
    dispatch(deletePostAction(postId));
    setShow(false);
  };

  const handleSaveEditPost = () => {
    dispatch(updatePostAction(editPost._id, { text: editText }));
    setShow(false);
  };

  // Funzione per gestire l'espansione di un singolo post
  const handleExpandClick = (postId) => {
    setExpandedPosts((prevExpanded) => ({
      ...prevExpanded,
      [postId]: !prevExpanded[postId], // Alterna lo stato di espansione per il post selezionato
    }));
  };

  // Funzione per gestire il "like" dei post
  const toggleLike = (postId) => {
    setLikedPosts((prevLikes) => ({
      ...prevLikes,
      [postId]: !prevLikes[postId], // Alterna il valore "like" del post
    }));
  };

  // Funzione per gestire l'apertura dei commenti
  const handleCommentClick = (postId) => {
    handleExpandClick(postId); // Usa la funzione di espansione esistente
  };

  // Funzione per gestire il "like" dei post
  const handleLikeClick = (postId) => {
    toggleLike(postId); // Alterna il "like" quando si clicca
  };

  // Funzione per ricaricare i commenti
  const handleCommentAdded = () => {
    // Se vuoi fare qualcosa dopo che un commento è stato aggiunto (ad esempio aggiornare lo stato)
    console.log("Commento aggiunto! Aggiorna i commenti o lo stato qui.");
  };

  return (
    <div style={{ marginBottom: "100px" }}>
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
              >
                <MoreVertIcon />
              </IconButton>
            }
            title={post.username}
            subheader={
              <span style={{ display: "flex", alignItems: "center" }}>
                {new Date(post.createdAt).toLocaleString()}
                <IconButton aria-label="public">
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
            <ExpandMore
              expand={expandedPosts[post._id]} // Controlla lo stato di espansione per il post
              onClick={() => handleExpandClick(post._id)} // Espandi o chiudi il post
              aria-expanded={expandedPosts[post._id]}
              aria-label="show more"
            />
          </CardActions>
          <div className="d-flex justify-content-around flex-grow-1 mb-2">
            <div className="d-flex justify-content-center align-items-center">
              <IconButton
                className="pe-0"
                aria-label="add to favorites"
                onClick={() => handleLikeClick(post._id)} // Alterna il "like" anche con il clic sul testo "Consiglia"
                style={{ transition: "none", cursor: "pointer" }} // Rimuove le animazioni e aggiunge il cursore
              >
                {likedPosts[post._id] ? <ThumbUpIcon /> : <ThumbUpOffAltIcon />}
              </IconButton>
              <p
                style={{
                  fontSize: "14px",
                  margin: 0,
                  fontWeight: "bold",
                  cursor: "pointer",
                  padding: "10px",
                }}
                onClick={() => handleLikeClick(post._id)} // Alterna il "like" anche con il clic sul testo "Consiglia"
              >
                Consiglia
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <IconButton
                className="pe-0"
                aria-label="add comment"
                onClick={() => handleCommentClick(post._id)} // Aggiungi gestore per CommentIcon
                style={{ cursor: "pointer" }}
              >
                <CommentIcon />
              </IconButton>
              <p
                style={{
                  fontSize: "14px",
                  margin: 0,
                  fontWeight: "bold",
                  cursor: "pointer",
                  padding: "10px",
                }}
                onClick={() => handleCommentClick(post._id)} // Aggiungi gestore per "Commenta"
              >
                Commenta
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <IconButton
                className="pe-0"
                aria-label="share"
                style={{ cursor: "pointer" }}
              >
                <ShareIcon />
              </IconButton>
              <p
                style={{
                  fontSize: "14px",
                  margin: 0,
                  fontWeight: "bold",
                  cursor: "pointer",
                  padding: "10px",
                }}
              >
                Condividi
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <IconButton
                className="pe-0"
                aria-label="send"
                style={{ cursor: "pointer" }}
              >
                <SendIcon />
              </IconButton>
              <p
                style={{
                  fontSize: "14px",
                  margin: 0,
                  fontWeight: "bold",
                  cursor: "pointer",
                  padding: "10px",
                }}
              >
                Invia
              </p>
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
