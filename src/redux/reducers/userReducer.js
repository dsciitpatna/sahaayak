import { USER_UPDATE, USER_UPDATE_FAIL,USER_UPDATE_NO_PASS_SUCCESS,USER_UPDATE_NO_PASS_FAIL } from '../actions/type';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')),
  status: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_UPDATE_NO_PASS_SUCCESS:
    case USER_UPDATE:
        localStorage.setItem('user',JSON.stringify(action.payload));
      return {
        user: action.payload,
        status: 200
      }
      case USER_UPDATE_NO_PASS_FAIL:
      case USER_UPDATE_FAIL:
        return {
          ...state,
          status: null
        }
    default:
      return state;
  }
}