import { GET_ALL_CATEGORIES } from '../actions/type';

const initialState = {
  categories: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return {
        categories: action.payload
      }
    default:
      return state;
  }
}