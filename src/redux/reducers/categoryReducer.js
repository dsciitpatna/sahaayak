import { GET_ALL_CATEGORIES_PENDING, GET_ALL_CATEGORIES_SUCCESS } from '../actions/type';

const initialState = {
  pending: false,
  categories: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CATEGORIES_PENDING:
      return {
        ...state,
        pending: true
      }
      case GET_ALL_CATEGORIES_SUCCESS:
          return {
            ...state,
            pending: false,
            categories: action.payload
          }  
    default:
      return state;
  }
}