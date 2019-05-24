import { GET_CATEGORY_WISE_SERVICES_PENDING, GET_CATEGORY_WISE_SERVICES_SUCCESS } from '../actions/type';

const initialState = {
  pending: false,
  services: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORY_WISE_SERVICES_PENDING:
      console.log("pending");
      return {
        ...state,
        pending: true
      }
    case GET_CATEGORY_WISE_SERVICES_SUCCESS:
      console.log("reducer", action.payload);
      return {
        ...state,
        pending: false,
        services: action.payload
      }
    default:
      return state;
  }
}