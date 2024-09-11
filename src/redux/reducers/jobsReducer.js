import { FETCH_JOBS_SEARCH, JOBS_ERROR } from "../actions/types"

const initialState = {
    jobs: [],
    error: null
}

export const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_JOBS_SEARCH:
            return {
                ...state,
                jobs: action.payload,
                error: null
            }

            case JOBS_ERROR: 
            return {
                ...state,
                error: action.payload
            }

        default: return state
    }
}