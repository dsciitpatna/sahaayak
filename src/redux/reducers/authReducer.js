import { USER_LOADING, USER_LOADED, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL, AUTH_ERROR, OPEN_LOGIN_MODAL, CLOSE_LOGIN_MODAL, OPEN_REGISTER_MODAL, CLOSE_REGISTER_MODAL } from '../actions/type';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: false,
  user: null,
  openloginModal: false,
  openregisterModal: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case USER_LOADED:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload
      }

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token',action.payload.token);
      localStorage.setItem('user',JSON.stringify(action.payload.user));
      return {
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
        openloginModal: false,
        openregisterModal: false
      }
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case LOGOUT_SUCCESS:
    case AUTH_ERROR:
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: null,
        token: null
      }
    case OPEN_LOGIN_MODAL:
      return {
        ...state,
        openloginModal: true,
        openregisterModal: false
      }
    case CLOSE_LOGIN_MODAL:
      return {
        ...state,
        openloginModal: false
      }
    case OPEN_REGISTER_MODAL:
      return {
        ...state,
        openregisterModal: true,
        openloginModal: false
      }
    case CLOSE_REGISTER_MODAL:
      return {
        ...state,
        openregisterModal: false
      }
    default:
      return state;
  }
}