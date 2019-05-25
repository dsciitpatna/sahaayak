import { 
    GET_ALL_CATEGORIES_PENDING, GET_ALL_CATEGORIES_SUCCESS
  } from './type';
  import axios from 'axios';
  
  const url = "http://localhost:5000";
  
  export const getAllCategories = () => (dispatch) => {
    dispatch({
      type: GET_ALL_CATEGORIES_PENDING
    })
    axios.get(`${url}/categories`)
    .then(res => {
        console.log(res.data.categories);
      dispatch({
        type: GET_ALL_CATEGORIES_SUCCESS,
        payload: res.data.categories
      })
    })
    .catch(err => {
      console.log(err.response);
      //dispatch(returnErrors(err.response.data, err.response.status, 'USER_UPDATE_FAIL'));
    })
  }