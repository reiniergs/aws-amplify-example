import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import app from './reducers/app';

export default createStore(
    combineReducers({
        app,
    }),
    applyMiddleware(thunk),
);
