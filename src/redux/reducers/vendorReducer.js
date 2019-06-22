import { REGISTER_BUSINESS_SUCCESS, GET_VENDOR_SERVICES, REGISTER_BUSINESS_FAIL } from '../actions/type';

const initialState = {
  status: null,
  services: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER_BUSINESS_SUCCESS:
      return {
        ...state,
        status: action.payload
      }
    case GET_VENDOR_SERVICES:
      return {
        ...state,
        services: action.payload.services
      }
    case REGISTER_BUSINESS_FAIL:
      return {
        ...state,
      }
    default:
      return state;
  }
}