import {FETCH_CATEGORY,DELETE_CATEGORY,ADD_CATEGORY,UPDATE_CATEGORY} from './type';
import axios from 'axios';
import {url} from '../../helper/url';
import { tokenConfig } from './authActions';

export const fetchCategory = () => (dispatch) => {
	axios.get(`${url}/categories`)
  	.then( res => {
			dispatch({
    		type:FETCH_CATEGORY,
        payload: res.data.categories,
      })
    })
};

export const deleteCategory = (id) => (dispatch,getState) =>{
	axios.delete(`${url}/categories/`+id,tokenConfig(getState))
		.then(( ) => {
			dispatch({
				type:DELETE_CATEGORY,
				payload: id,
			})
		})  
};

export const addCategory = (name) => (dispatch,getState) => {
	const body = JSON.stringify({ name }) ;
	axios.post(`${url}/categories`,body,tokenConfig(getState))
		.then(res => {
			dispatch({
				type:ADD_CATEGORY,
        payload: res.data,
			})
		})
}

export const updateCategory =(name,id)=>(dispatch,getState) =>{
	const body = JSON.stringify({ name });
	axios.patch(`${url}/categories/`+id,body,tokenConfig(getState))
		.then(res => {
			dispatch({
				type:UPDATE_CATEGORY, 
			  payload: id,
        newCategory:res.data,
	    })
    })
};