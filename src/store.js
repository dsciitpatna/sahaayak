import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';

const jwt_token=localStorage.getItem('token');

const initialState = { auth: {
    token: jwt_token,
    isAuthenticated: jwt_token ? true : false,
    user: JSON.parse(localStorage.getItem('user'))
} };
const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));

export default store;