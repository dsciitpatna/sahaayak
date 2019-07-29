import { FETCH_CATEGORY_SUCCESS, ADD_CATEGORY_SUCCESS,DELETE_CATEGORY_SUCCESS,UPDATE_CATEGORY_SUCCESS } from '../actions/type';

const initialState = {
  categories: [],
  status: null,
  statusType: null
}

export default function (state = initialState, action) {
  switch (action.type) { 
    case FETCH_CATEGORY_SUCCESS:
      return {
        categories: action.payload,
        status: 200,
        statusType: "fetchCategory"
      }
    case ADD_CATEGORY_SUCCESS:
      return {
        categories: [...state.categories.categories,action.payload],
        status:200,
        statusType: "addCategory"
      }
    case DELETE_CATEGORY_SUCCESS:
      return {
        categories: state.categories.categories.filter((category)=>{
          return category._id!==action.payload
        })
      }
    case UPDATE_CATEGORY_SUCCESS:
      return {
        categories: state.categories.categories.map((category) => {
          if(category._id===action.payload){
            category.name=action.packet
          }
          return category
        })
      }
    default:
      return state;
  }
}