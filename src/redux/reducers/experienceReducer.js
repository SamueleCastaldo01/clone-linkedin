import { ADD_EXPERIENCE, EXPERIENCE_ERROR, FETCH_EXPERIENCES } from "../actions/types"

const initialState = {
    experiences: [],
    error: null,
}

const experienceReducer = (state = initialState, action) => {
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
                profile: {
                ...state.profile,
                experiences: [...state.profile.experiences, action.payload]
                },
                error: null
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