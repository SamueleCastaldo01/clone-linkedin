import { FETCH_POSTS, POSTS_ERROR } from "../actions/types"


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

        case POSTS_ERROR:
            return {
                ...state,
                error: action.payload,
            }

            default: 
            return state
    }
}