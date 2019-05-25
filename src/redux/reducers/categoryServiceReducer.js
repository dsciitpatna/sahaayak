import { 
  GET_ALL_CATEGORIES_PENDING, GET_ALL_CATEGORIES_SUCCESS, GET_CATEGORY_WISE_SERVICES_PENDING, GET_CATEGORY_WISE_SERVICES_SUCCESS 
} from '../actions/type';

const initialState = {
  pending: false,
  categories: [],
  services: []
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
      case GET_CATEGORY_WISE_SERVICES_PENDING:
        return {
          ...state,
          pending: true
        }
      case GET_CATEGORY_WISE_SERVICES_SUCCESS:
        return {
          ...state,
          pending: false,
          services: action.payload
        }
    default:
      return state;
  }
}