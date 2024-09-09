import { FETCH_PROFILES, FETCH_PROFILE, UPDATE_PROFILE, PROFILE_ERROR } from '../actions/types';

// Stato iniziale con una lista di profili e un profilo utente singolo
const initialState = {
    profiles: [],  // Lista di profili ottenuti dalla ricerca
    profile: {},   // Profilo utente corrente
    error: null    // Messaggio di errore
};

// Reducer per gestire le azioni relative ai profili
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        // Gestisce la lista di profili
        case FETCH_PROFILES:
            return {
                ...state,
                profiles: action.payload,
                error: null
            };
        // Gestisce il profilo utente corrente e aggiornamenti del profilo
        case FETCH_PROFILE:
        case UPDATE_PROFILE:
            return {
                ...state,
                profile: action.payload,
                error: null
            };
        // Gestisce gli errori
        case PROFILE_ERROR:
            return {
                ...state,
                error: action.payload
            };
        // Ritorna lo stato invariato per azioni non gestite
        default:
            return state;
    }
};

export default profileReducer;
