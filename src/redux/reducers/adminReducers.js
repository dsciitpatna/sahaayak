import { GET_ALL_USERS, GET_ALL_USERS_FAIL, DELETE_USER, DELETE_USER_FAIL, DELETED_ALL_SERVICES_OF_VENDOR } from '../actions/type';

const initialState = {
  users: [],
  status: null,
  statusType: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        users: action.payload,
        status: 200,
        statusType: "getAllUsers"
      }
    case GET_ALL_USERS_FAIL:
      return {
        ...state,
        status: null,
        statusType: "getAllUsers"
      }
    case DELETE_USER:
      return {
        ...state,
        status: 200,
        statusType: "deleteUser"
      }
    case DELETE_USER_FAIL:
      return {
        ...state,
        status: null,
        statusType: "deleteUser"
      }
    case DELETED_ALL_SERVICES_OF_VENDOR:
        return {
          ...state,
          status: 200,
          statusType: "deleteAllServices"
        }  
    default:
      return state;
  }
}