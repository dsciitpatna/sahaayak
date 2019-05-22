import { REGISTER_BUSINESS_SUCCESS } from '../actions/type';

const initialState = {
  status: null,
  msg: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER_BUSINESS_SUCCESS:
      return {
        ...state,
        status: action.payload.status,
        msg: action.payload.msg
      }
    default:
      return state;
  }
}