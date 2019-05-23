import { REGISTER_BUSINESS_SUCCESS } from '../actions/type';

const initialState = {
  registrationDone: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER_BUSINESS_SUCCESS:
      return {
        ...state,
       registrationDone: true
      }
    default:
      return state;
  }
}