import axios from "axios";
import {
  FETCH_PROFILES,
  FETCH_PROFILE,
  UPDATE_PROFILE,
  PROFILE_ERROR,
  FETCH_EXPERIENCES,
  EXPERIENCE_ERROR,
  ADD_EXPERIENCE,
  DELETE_EXPERIENCE
} from "./types";
import { type } from "@testing-library/user-event/dist/type";

const PROFILE_URL = "https://striveschool-api.herokuapp.com/api/profile/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRmZjUxM2FmNDM0YjAwMTU5ZDgzMzAiLCJpYXQiOjE3MjU5NTMyOTksImV4cCI6MTcyNzE2Mjg5OX0.n-M-g7ZghOBgKrcQWWZVAbMrGzHoBDjK8KPBUQay_9A";

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

        dispatch({
          type: FETCH_PROFILES,
          payload: filteredProfiles,
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

export const Experiencesfetch = (userId) => async (dispatch) => {
  try {
    const response = await axios.get(PROFILE_URL + userId + '/experiences', {
      headers: { Authorization: 'Bearer ' + TOKEN },
    })
    dispatch({
      type: FETCH_EXPERIENCES,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: EXPERIENCE_ERROR,
      payload: error.message
    })
  }
}

export const AddExperience = (userId, experienceData) => async (dispatch) => {
  try {
    const response = await axios.post(PROFILE_URL + userId + '/experiences', experienceData, {
      headers: {
        Authorization: 'Bearer ' + TOKEN,
      },
    })
    dispatch({
      type: ADD_EXPERIENCE,
      payload: response.data,
    })
  } catch (error) {
    dispatch({
      type: EXPERIENCE_ERROR,
      payload: error.message
    })
  }
}

export const deleteExperienceAction = (userId, experienceId) => async (dispatch) => {
  try {
    await axios.delete(PROFILE_URL + userId + '/experiences/' + experienceId, {
      headers: {
        Authorization: 'Bearer ' + TOKEN,
      },
    })
    dispatch({
      type: DELETE_EXPERIENCE,
      payload: experienceId
    })
  } catch (error) {
    dispatch({
      type:EXPERIENCE_ERROR,
      payload: error.message
    })
  }
}