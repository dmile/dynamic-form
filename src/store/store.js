import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import rootReducer from '../reducers/root';

const initialState = {};

let middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, logger]
}

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
);

export default store;