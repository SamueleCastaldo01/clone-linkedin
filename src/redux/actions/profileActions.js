import axios from "axios";
import {
  FETCH_PROFILES,
  FETCH_PROFILE,
  UPDATE_PROFILE,
  PROFILE_ERROR,
} from "./types";

const API_URL = "https://striveschool-api.herokuapp.com/api/profile/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRlYjEzNjRkMGRlZjAwMTVjZWYxMDAiLCJpYXQiOjE3MjU4NzAzOTAsImV4cCI6MTcyNzA3OTk5MH0.nK4vV-AVZXmSgtCSvtzNJCdksRFTv8gCSK4Pr8tzr9Y";

// Funzione per ottenere la lista dei profili utente o cercare profili
export const fetchProfiles =
  (searchTerm = "") =>
  async (dispatch) => {
    try {
      // Chiamata API per ottenere tutti i profili
      const response = await axios.get(`${API_URL}`, {
        headers: { Authorization: `Bearer ${TOKEN}` },
      });

      // Filtrare i profili in base ai criteri di ricerca
      const filteredProfiles = response.data.filter(
        (profile) =>
          profile.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
          profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          profile.surname.toLowerCase().includes(searchTerm.toLowerCase())
      );

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
    const response = await axios.get(`${API_URL}me`, {
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
    const response = await axios.get(`${API_URL}${userId}`, {
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
    const response = await axios.put(API_URL, profile, {
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
