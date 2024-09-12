import { ADD_TO_POST, DELETE_POST, FETCH_POSTS, POSTS_ERROR, UPDATE_POST } from "../actions/types"


const initialState = {
    posts: [],
    error: null
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                posts: action.payload,
                error: null
            }

        case ADD_TO_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload],
                error: null
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((post) => post._id !== action.payload), // Rimuovi il post dall'elenco
                error: null
            };

        case UPDATE_POST:
            return {
                ...state,
                posts: state.posts.map((post) => post._id === action.payload.id ? { ...post, ...action.payload.data } : post),
                error: null
            }

        case POSTS_ERROR:
            return {
                ...state,
                error: action.payload,
            }

        default:
            return state
    }
}