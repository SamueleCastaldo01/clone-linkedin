import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from './reducers';

// Configura e crea lo store Redux, applicando il middleware thunk per gestire le azioni asincrone. 
// Fornisce lo store all'intera applicazione.

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
