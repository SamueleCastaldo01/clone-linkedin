import { combineReducers } from 'redux';
import profileReducer from './profileReducer';
import experienceReducer from './experienceReducer';

// Il rootReducer combina il profileReducer in un unico reducer principale che gestisce 
// il nostro stato globale. Questo rootReducer viene poi utilizzato per creare lo store Redux.

const rootReducer = combineReducers({
    profile: profileReducer,
    experiences: experienceReducer
});

export default rootReducer;
