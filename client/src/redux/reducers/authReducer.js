import { USER_LOADING, USER_LOADED, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL, REGISTER_SUCCESS, REGISTER_FAIL, AUTH_ERROR } from '../actions/type';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: false,
  user: null
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
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...action.payload,
        isAuthenticated: true,
        isLoading: false
      }
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case LOGOUT_SUCCESS:
    case AUTH_ERROR:
      localStorage.removeItem('token');
      return {
        isLoading: false,
        isAuthenticated: false,
        user: null,
        token: null
      }
    default:
      return state;
  }
}