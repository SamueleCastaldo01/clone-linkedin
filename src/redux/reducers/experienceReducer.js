import { ADD_EXPERIENCE, DELETE_EXPERIENCE, EXPERIENCE_ERROR, FETCH_EXPERIENCES } from "../actions/types"

const initialState = {
    experiences: [],
    error: null,
}

export const experienceReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EXPERIENCES:
            return {
                ...state,
                experiences: action.payload,
                error: null
            };
        case ADD_EXPERIENCE:
            return {
                ...state,
                experiences: [...state.experiences, action.payload],
                error: null
            }

        case DELETE_EXPERIENCE:
            return {
                ...state,
                experiences: state.experiences.filter((experience) => experience._id !== action.payload),
                errorn:null
            }

        case EXPERIENCE_ERROR:
            return {
                ...state,
                error: action.payload
            }


        default:
            return state;
    }
}

export default experienceReducer