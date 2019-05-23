import { REGISTER_BUSINESS_SUCCESS } from '../actions/type';

const initialState = {
  status: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER_BUSINESS_SUCCESS:
      return {
        ...state,
       status:action.payload
      }
    default:
      return state;
  }
}