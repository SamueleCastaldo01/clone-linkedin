import { FETCH_PROFILE, UPDATE_PROFILE, PROFILE_ERROR } from '../actions/types';

// Questo è il reducer Redux per gestire lo stato del profilo utente. 
// Gestisce le azioni FETCH_PROFILE, UPDATE_PROFILE e PROFILE_ERROR, 
// aggiornando lo stato dell'applicazione di conseguenza.

const initialState = {
    profile: {},
    error: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PROFILE:
        case UPDATE_PROFILE:
            return {
                ...state,
                profile: action.payload,
                error: null
            };
        case PROFILE_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default profileReducer;
