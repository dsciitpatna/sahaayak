import { USER_UPDATE } from '../actions/type';

const initialState = {
  user: JSON.parse(localStorage.getItem('user'))
}

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_UPDATE:
        localStorage.setItem('user',JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      }
    default:
      return state;
  }
}