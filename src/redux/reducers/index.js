import { combineReducers } from 'redux';
import vendorReducer from './vendorReducer';
import AuthReducer from './authReducer';
import ErrorReducer from './errorReducer';


export default combineReducers({
  auth: AuthReducer,
  error: ErrorReducer,
  vendor: vendorReducer
});