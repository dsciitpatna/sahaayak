import { combineReducers } from 'redux';
import vendorReducer from './vendorReducer';
import AuthReducer from './authReducer';
import ErrorReducer from './errorReducer';
import UserReducer from './userReducer';


export default combineReducers({
  auth: AuthReducer,
  error: ErrorReducer,
  user: UserReducer,
  vendor: vendorReducer
});