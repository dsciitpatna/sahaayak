import { GET_ERRORS, CLEAR_ERRORS} from '../actions/type';

const initialState = {
  msg: '',
  status: '',
  id: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        msg: action.payload.msg,
        status: action.payload.status,
        id: action.payload.id
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        msg: '',
        status: '',
        id: null
      }
    default:
      return state;
  }
}