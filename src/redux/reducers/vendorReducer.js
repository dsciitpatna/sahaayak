import {REGISTER_BUSINESS_FAIL,REGISTER_BUSINESS_SUCCESS} from '../actions/type';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: false,
  user: null,
  openloginModal: false,
  openregisterModal: false
}

export default function(state= initialState,action){
  switch(action.type){
  case REGISTER_BUSINESS_FAIL:
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return {
      ...state,
      isLoading: false,
      isAuthenticated: false,
      user: null,
      token: null
    }
  case REGISTER_BUSINESS_SUCCESS: 
  return{
    ...state,
    msg: action.payload
  }
  default:
  return state;
}}