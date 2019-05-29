import { 
  GET_ALL_CATEGORIES_PENDING, 
  GET_ALL_CATEGORIES_SUCCESS, 
  GET_CATEGORY_WISE_SERVICES_PENDING, 
  GET_CATEGORY_WISE_SERVICES_SUCCESS,
  GET_SERVICE_PENDING,
  GET_SERVICE_SUCCESS
} from '../actions/type';

const initialState = {
  pending: false,
  categories: [],
  services: [],
  service: null
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
      case GET_SERVICE_PENDING:
        return {
          ...state,
          pending: true
        }  
      case GET_SERVICE_SUCCESS:
        return {
          ...state,
          pending: false,
          service: action.payload
        }                
    default:
      return state;
  }
}