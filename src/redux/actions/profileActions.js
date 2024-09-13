import axios from "axios";
import {
  FETCH_PROFILES,
  FETCH_PROFILE,
  UPDATE_PROFILE,
  PROFILE_ERROR,
  FETCH_EXPERIENCES,
  EXPERIENCE_ERROR,
  ADD_EXPERIENCE,
  DELETE_EXPERIENCE,
  MODIFY_EXPERIENCE,
  FETCH_POSTS,
  POSTS_ERROR,
  ADD_TO_POST,
  DELETE_POST,
  UPDATE_POST,
  FETCH_JOBS_SEARCH,
  JOBS_ERROR,
  FETCH_COMMENTS,
  COMMENTS_ERROR,
  ADD_COMMENTS,
  UPDATE_COMMENTS,
  DELETE_COMMENTS,
  UPLOAD_EXPERIENCE_IMAGE_SUCCESS,
  UPLOAD_EXPERIENCE_IMAGE_FAIL,
  SET_LOADING,
} from "./types";
import { type } from "@testing-library/user-event/dist/type";

//ACTIONS PER IL PROFILE

const PROFILE_URL = "https://striveschool-api.herokuapp.com/api/profile/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRmZjUxM2FmNDM0YjAwMTU5ZDgzMzAiLCJpYXQiOjE3MjU5NTMyOTksImV4cCI6MTcyNzE2Mjg5OX0.n-M-g7ZghOBgKrcQWWZVAbMrGzHoBDjK8KPBUQay_9A";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Funzione per ottenere la lista dei profili utente o cercare profili
export const fetchProfiles =
  (searchTerm = "") =>
    async (dispatch) => {
      try {
        // Chiamata API per ottenere tutti i profili
        const response = await axios.get(`${PROFILE_URL}`, {
          headers: { Authorization: `Bearer ${TOKEN}` },
        });
        console.log("Fetch profiles:", response.data);

        // Filtrare i profili in base ai criteri di ricerca
        const filteredProfiles = response.data.filter(
          (profile) =>
            profile.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
            profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            profile.surname.toLowerCase().includes(searchTerm.toLowerCase())
        );
        console.log("Filtered profiles:", filteredProfiles);

        // Mescolare i profili filtrati
        const shuffledProfiles = shuffleArray(filteredProfiles);

        // Prendere massimo i primi 5 profili casuali
        const randomProfiles = shuffledProfiles.slice(0, 5);
        console.log("Random profiles:", randomProfiles);

        dispatch({
          type: FETCH_PROFILES,
          payload: randomProfiles,
        });
      } catch (error) {
        dispatch({
          type: PROFILE_ERROR,
          payload: error.message,
        });
      }
    };

// Funzione per ottenere il profilo utente
export const fetchProfile = () => async (dispatch) => {
  try {
    const response = await axios.get(`${PROFILE_URL}me`, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });
    dispatch({
      type: FETCH_PROFILE,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: error.message,
    });
  }
};

// Funzione per ottenere un profilo specifico
export const fetchSpecificProfile = (userId) => async (dispatch) => {
  try {
    const response = await axios.get(`${PROFILE_URL}${userId}`, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });
    dispatch({
      type: FETCH_PROFILE,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: error.message,
    });
  }
};

// Funzione per aggiornare il profilo utente
export const updateProfile = (profile) => async (dispatch) => {
  try {
    const response = await axios.put(PROFILE_URL, profile, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    dispatch({
      type: UPDATE_PROFILE,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: error.message,
    });
  }
};

// ACTIONS PER LE ESPERIENZE

export const Experiencesfetch = (userId) => async (dispatch) => {
  try {
    const response = await axios.get(PROFILE_URL + userId + "/experiences", {
      headers: { Authorization: "Bearer " + TOKEN },
    });
    dispatch({
      type: FETCH_EXPERIENCES,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: EXPERIENCE_ERROR,
      payload: error.message,
    });
  }
};

export const AddExperience = (userId, experienceData) => async (dispatch) => {
  try {
    const response = await axios.post(
      PROFILE_URL + userId + "/experiences",
      experienceData,
      {
        headers: {
          Authorization: "Bearer " + TOKEN,
        },
      }
    );
    dispatch({
      type: ADD_EXPERIENCE,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: EXPERIENCE_ERROR,
      payload: error.message,
    });
  }
};

export const deleteExperienceAction =
  (userId, experienceId) => async (dispatch) => {
    try {
      await axios.delete(
        PROFILE_URL + userId + "/experiences/" + experienceId,
        {
          headers: {
            Authorization: "Bearer " + TOKEN,
          },
        }
      );
      dispatch({
        type: DELETE_EXPERIENCE,
        payload: experienceId,
      });
    } catch (error) {
      dispatch({
        type: EXPERIENCE_ERROR,
        payload: error.message,
      });
    }
  };

export const modifyExperienceAction =
  (userId, experienceId, updateExperience) => async (dispatch) => {
    try {
      const response = await axios.put(
        `${PROFILE_URL}${userId}/experiences/${experienceId}`,
        updateExperience,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );

      // Dispatch della modifica
      dispatch({
        type: MODIFY_EXPERIENCE,
        payload: { id: experienceId, data: response.data },
      });

      // Esegui il refetch delle esperienze per aggiornare lo stato
      dispatch(Experiencesfetch(userId)); // Refetch delle esperienze
    } catch (error) {
      dispatch({
        type: EXPERIENCE_ERROR,
        payload: error.message,
      });
    }
  };

//ACTIONS PER I POSTS, GET

const POSTS_URL = "https://striveschool-api.herokuapp.com/api/posts/";

export const fetchPostsAction = () => async (dispatch) => {
  try {
    dispatch({
      type: SET_LOADING,
      payload: true
    })

    const response = await axios.get(POSTS_URL, {
      headers: { Authorization: "Bearer " + TOKEN },
    });
    const lastThirtyPosts = response.data.slice(-30);
    const sortedPosts = lastThirtyPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    dispatch({
      type: FETCH_POSTS,
      payload: sortedPosts,
    });

    dispatch({
      type: SET_LOADING,
      payload: false
    })

  } catch (error) {
    dispatch({
      type: POSTS_ERROR,
      payload: error.message,
    });
  }
};

export const addPostAction = (postData) => async (dispatch) => {
  try {
    const response = await axios.post(POSTS_URL, postData, {
      headers: {
        Authorization: "Bearer " + TOKEN,
      },
    });
    dispatch({
      type: ADD_TO_POST,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: POSTS_ERROR,
      payload: error.message,
    });
  }
};

export const deletePostAction = (postId) => async (dispatch) => {
  try {
    await axios.delete(`${POSTS_URL}/${postId}`, {
      headers: { Authorization: "Bearer " + TOKEN },
    });
    dispatch({
      type: DELETE_POST,
      payload: postId, // ID del post eliminato
    });
  } catch (error) {
    dispatch({
      type: POSTS_ERROR,
      payload: error.message,
    });
  }
};

export const updatePostAction =
  (postId, updatedPostData) => async (dispatch) => {
    try {
      const response = await axios.put(
        `${POSTS_URL}/${postId}`,
        updatedPostData,
        {
          headers: { Authorization: "Bearer " + TOKEN },
        }
      );
      dispatch({
        type: UPDATE_POST,
        payload: { id: postId, data: response.data }, // Passa l'ID e i dati aggiornati
      });
    } catch (error) {
      dispatch({
        type: POSTS_ERROR,
        payload: error.message,
      });
    }
  };

// ACTIONS PER I LAVORI

const JOBS_URL = "https://strive-benchmark.herokuapp.com/api/jobs";
const search = "?search=";
const company = "?company=";

export const fetchJobsAction = (query) => async (dispatch) => {
  try {
    const response = await axios.get(JOBS_URL + search + query);

    // Assumiamo che response.data sia l'array dei lavori che vogliamo salvare nel redux store
    const jobsArray = response.data.data; // Estrai l'array `data` dalla risposta

    // Verifica se jobsArray è un array valido
    if (Array.isArray(jobsArray)) {
      dispatch({
        type: FETCH_JOBS_SEARCH,
        payload: jobsArray.slice(0, 10), // Passa l'array al reducer
      });
      console.log("Jobs array:", jobsArray);
    } else {
      throw new Error("La struttura dei dati non è valida, array mancante.");
    }
  } catch (error) {
    dispatch({
      type: JOBS_ERROR,
      payload: error.message, // Corretto il messaggio d'errore
    });
    console.error("Errore nella fetch:", error.message);
  }
};

// AZIONI PER I COMMENTI
const COMMENTS_POST_URL =
  "https://striveschool-api.herokuapp.com/api/comments/";
const TOKEN_FOR_COMMENTS =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmUyYmNiNjU0M2E0YzAwMTU5MDFlMTkiLCJpYXQiOjE3MjYxMzU0NzgsImV4cCI6MTcyNzM0NTA3OH0.zqvix3VlQQc_YEOZqgIjN6p7UYvvFRZHJiHAWVImpI4";

export const fetchCommentsAction = () => async (dispatch) => {
  try {
    const response = await axios.get(COMMENTS_POST_URL, {
      headers: { Authorization: "Bearer " + TOKEN_FOR_COMMENTS },
    });
    dispatch({
      type: FETCH_COMMENTS,
      payload: response.data.slice(-3),
    });
  } catch (error) {
    dispatch({
      type: COMMENTS_ERROR,
      payload: error.message,
    });
  }
};

// const POST_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3MzAzNjQzYTU2ODAwMTU4ZWMzZDciLCJpYXQiOjE3MjYxNjExNjgsImV4cCI6MTcyNzM3MDc2OH0.Pm-Zmxol5m8J6pz7vUBhjGnTYgZUghS2DiMUOTcX5zA'
// export const addCommentAction = (postId, commentData) => async (dispatch) => {
//   try {
//     const response = await axios.post(`${COMMENTS_POST_URL}${postId}`, commentData, {
//       headers: { Authorization: "Bearer " + POST_TOKEN },
//     });
//     dispatch({
//       type: ADD_COMMENTS,
//       payload: response.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: COMMENTS_ERROR,
//       payload: error.message,
//     });
//   }
// };

export const updateCommentAction =
  (commentId, updatedCommentData) => async (dispatch) => {
    try {
      const response = await axios.put(
        `${COMMENTS_POST_URL}/${commentId}`,
        updatedCommentData,
        {
          headers: { Authorization: "Bearer " + TOKEN_FOR_COMMENTS },
        }
      );
      dispatch({
        type: UPDATE_COMMENTS,
        payload: { id: commentId, data: response.data },
      });
    } catch (error) {
      dispatch({
        type: COMMENTS_ERROR,
        payload: error.message,
      });
    }
  };

export const deleteCommentAction = (commentId) => async (dispatch) => {
  try {
    await axios.delete(`${COMMENTS_POST_URL}/${commentId}`, {
      headers: { Authorization: "Bearer " + TOKEN_FOR_COMMENTS },
    });
    dispatch({
      type: DELETE_COMMENTS,
      payload: commentId,
    });
  } catch (error) {
    dispatch({
      type: COMMENTS_ERROR,
      payload: error.message,
    });
  }
};
export const uploadImageAction = (postId, formData) => async (dispatch) => {
  try {
    await axios.post(
      `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Necessario per inviare il file
        },
      }
    );
    dispatch(fetchPostsAction()); // Aggiorna i post dopo il caricamento dell'immagine
  } catch (error) {
    console.error("Errore durante il caricamento dell'immagine:", error);
  }
};

export const uploadExperienceImageAction =
  (userId, experienceId, imageFile) => async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("experience", imageFile); // Nome del campo immagine

      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${experienceId}/picture/`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Errore durante il caricamento dell'immagine");
      }

      const data = await response.json();

      dispatch({
        type: UPLOAD_EXPERIENCE_IMAGE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPLOAD_EXPERIENCE_IMAGE_FAIL,
        payload: error.message,
      });
    }
  };
