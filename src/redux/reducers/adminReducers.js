import { GET_ALL_USERS, GET_ALL_USERS_FAIL, DELETE_USER, DELETE_USER_FAIL } from '../actions/type';

const initialState = {
  users: [],
  status: null,
  deletedUser: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        users: action.payload,
        status: 200
      }
    case GET_ALL_USERS_FAIL:
      return {
        ...state,
        status: null
      }
    case DELETE_USER:
      return {
        ...state,
        status: 200,
        deletedUser: true
      }
    case DELETE_USER_FAIL:
      return {
        ...state,
        status: null,
        deletedUser: false
      }
    default:
      return state;
  }
}