import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import ErrorReducer from './errorReducer';

export default combineReducers({
  auth: AuthReducer,
  error: ErrorReducer
});