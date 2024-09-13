import { FETCH_JOBS_SEARCH, JOBS_ERROR } from "../actions/types"

const initialState = {
    jobs: [],
    error: null,
    isLoading:false
}

export const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_JOBS_SEARCH:
            // Controllo che il payload sia un array
            if (Array.isArray(action.payload)) {
                return {
                    ...state,
                    jobs: action.payload,
                    error: null
                }
            } else {
                // Se il payload non è valido, restituisco un errore
                console.error("Il payload ricevuto non è un array valido:", action.payload);
                return {
                    ...state,
                    error: "Dati ricevuti non validi"
                }
            }

        case JOBS_ERROR:
            // Controllo che l'errore sia una stringa valida
            if (typeof action.payload === 'string') {
                return {
                    ...state,
                    error: action.payload
                }
            } else {
                console.error("Il payload di errore non è valido:", action.payload);
                return {
                    ...state,
                    error: "Errore sconosciuto"
                }
            }

        default:
            return state;
    }
}
