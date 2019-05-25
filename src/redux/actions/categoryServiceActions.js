import { 
    GET_ALL_CATEGORIES_PENDING, GET_ALL_CATEGORIES_SUCCESS, GET_CATEGORY_WISE_SERVICES_PENDING, GET_CATEGORY_WISE_SERVICES_SUCCESS
  } from './type';
  import axios from 'axios';
  import { returnErrors } from "./errorActions";

  import {url} from '../../helper/url';
  
  export const getAllCategories = () => (dispatch) => {
    dispatch({
      type: GET_ALL_CATEGORIES_PENDING
    })
    axios.get(`${url}/categories`)
    .then(res => {
      dispatch({
        type: GET_ALL_CATEGORIES_SUCCESS,
        payload: res.data.categories
      })
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status, 'CATEGORIES_FETCH_FAIL'));
    })
  }

  export const getCategoryWiseServices = (categoryName) => (dispatch) => {
    dispatch({
        type: GET_CATEGORY_WISE_SERVICES_PENDING
      })   
    axios.get(`${url}/services/categoryName/`+categoryName)
    .then(res =>{
      dispatch({
        type: GET_CATEGORY_WISE_SERVICES_SUCCESS,
        payload: res.data.services
      })
    })
    .catch(err =>{
        if(err)
        dispatch(returnErrors(err.response.data,err.response.status,'CATEGORYWISESERVICES_FETCH_FAIL'));
    });
};
