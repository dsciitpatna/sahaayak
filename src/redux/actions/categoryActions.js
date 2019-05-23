import { 
    GET_ALL_CATEGORIES
  } from './type';
  import axios from 'axios';
  import { returnErrors } from './errorActions';
  import { tokenConfig } from './authActions';
  
  const url = "http://localhost:5000";
  
  export const getAllCategories = () => (dispatch) => {
      console.log("action called");
    axios.get(`${url}/categories`)
    .then(res => {
        console.log(res.data.categories);
      dispatch({
        type: GET_ALL_CATEGORIES,
        payload: res.data.categories
      })
    })
    .catch(err => {
        console.log(err.response);
      //dispatch(returnErrors(err.response.data, err.response.status, 'USER_UPDATE_FAIL'));
      //dispatch({ type: USER_UPDATE_FAIL })
    })
  }