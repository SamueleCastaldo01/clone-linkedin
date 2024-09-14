import {
  ADD_EXPERIENCE,
  DELETE_EXPERIENCE,
  EXPERIENCE_ERROR,
  FETCH_EXPERIENCES,
  MODIFY_EXPERIENCE,
  UPLOAD_EXPERIENCE_IMAGE_FAIL,
  UPLOAD_EXPERIENCE_IMAGE_SUCCESS,
} from "../actions/types";

const initialState = {
  experiences: [],
  error: null,
  isLoading:false
};

export const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXPERIENCES:
      return {
        ...state,
        experiences: action.payload, // Aggiorna l'intera lista con i dati fetchati
        error: null,
      };

    case ADD_EXPERIENCE:
      return {
        ...state,
        experiences: [...state.experiences, action.payload], // Aggiungi la nuova esperienza alla lista
        error: null,
      };

    case MODIFY_EXPERIENCE:
      return {
        ...state,
        experiences: state.experiences.map((exp) =>
          exp._id === action.payload.id
            ? { ...exp, ...action.payload.data } // Sostituisci l'esperienza modificata
            : exp
        ),
        error: null,
      };

    case DELETE_EXPERIENCE:
      return {
        ...state,
        experiences: state.experiences.filter(
          (experience) => experience._id !== action.payload
        ), // Rimuovi l'esperienza dalla lista
        error: null,
      };

    case EXPERIENCE_ERROR:
      return {
        ...state,
        error: action.payload, // Gestione degli errori
      };
    case UPLOAD_EXPERIENCE_IMAGE_SUCCESS:
      return {
        ...state,
        experiences: state.experiences.map((exp) =>
          exp._id === action.payload._id ? action.payload : exp
        ),
        loading: false,
        error: null,
      };
    case UPLOAD_EXPERIENCE_IMAGE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default experienceReducer;
