import { ADD_COMMENTS, COMMENTS_ERROR, DELETE_COMMENTS, FETCH_COMMENTS, UPDATE_COMMENTS } from "../actions/types";

const initialState = {
    comments: [],
    error: null
}

export const commentReducer= (state= initialState, action) => {
    switch (action.type) {
        case FETCH_COMMENTS:
            return {
                ...state,
                comments: action.payload,
                error: null
            }

        case ADD_COMMENTS:
            return {
                ...state,
                comments: [...state.comments, action.payload],
                error: null
            }
        case DELETE_COMMENTS:
            return {
                ...state,
                comments: state.comments.filter((comment) => comment._id !== action.payload), // Rimuovi il post dall'elenco
                error: null
            };

        case UPDATE_COMMENTS:
            return {
                ...state,
                comments: state.comments.map((comment) => comment._id === action.payload.id ? { ...comment, ...action.payload.data } : comment),
                error: null
            }

        case COMMENTS_ERROR:
            return {
                ...state,
                error: action.payload,
            }

        default:
            return state
    }
} 