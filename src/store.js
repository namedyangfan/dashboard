import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};

// apply middleware (thunk) for async dispatch
const middlewareEnhancer = applyMiddleware(thunk);


// compose our middleware into an enhancer
// add Redux dev tools enhancer for use with Chrome extension
const composedEnhancers = composeWithDevTools(middlewareEnhancer);

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
