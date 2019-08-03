import { USER_UPDATE, USER_UPDATE_FAIL,CHANGING_PASSWORD_FAIL,CHANGING_PASSWORD_SUCCESS } from '../actions/type';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')),
  passwordChangeStatus: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_UPDATE:
      localStorage.setItem('user', JSON.stringify(action.payload));
      return {
        user: action.payload,
      }
    case USER_UPDATE_FAIL:
      return {
        ...state,
      }
    case CHANGING_PASSWORD_SUCCESS: 
    return{
      ...state,
      passwordChangeStatus: "Done"
    }
    case CHANGING_PASSWORD_FAIL:
      return{
        ...state,
        passwordChangeStatus: "Fail"
      }
    default:
      return state;
  }
}