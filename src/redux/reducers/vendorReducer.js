import { REGISTER_BUSINESS_SUCCESS,GET_VENDOR_SERVICES,ADD_REVIEW_SUCCESS } from '../actions/type';

const initialState = {
  status: null,
  services: [],
  review: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER_BUSINESS_SUCCESS:
      return {
        ...state,
       status:action.payload
      }
      case GET_VENDOR_SERVICES:
      return{
        ...state,
        services: action.payload.services
      }
      case ADD_REVIEW_SUCCESS:
      return{
        ...state,
        status: 200,
        review: action.payload.review
      }
    default:
      return state;
  }
}