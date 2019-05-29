import { REGISTER_BUSINESS_SUCCESS,GET_VENDOR_SERVICES,ADD_REVIEW_SUCCESS,ADD_REVIEW_FAIL } from './type';
import axios from "axios";
import {returnErrors} from './errorActions';
import { tokenConfig } from './authActions';

import {url} from '../../helper/url';

export const registerBusiness = ({businessname, description, residence, phone, categoryName}) => (dispatch, getState) => {
  const detail = {
    description: description,
    location: residence,
    contact: phone
  };
  const body = JSON.stringify({ name:businessname, categoryName, detail });
  const config = tokenConfig(getState);
  axios
    .post(`${url}/services`, body,config)
    .then(res =>{
      dispatch({
        type: REGISTER_BUSINESS_SUCCESS,
        payload: res.status
      })}
    )
    .catch(err =>{
      dispatch(returnErrors(err.response.data,err.response.status,'REGISTER_BUSINESS_FAIL'));
    }
    );
};

export const getServices = (id)=>(dispatch,getState)=>{

  axios.get(`${url}/services/vendors/${id}`,tokenConfig(getState))
        .then(res=>{
          dispatch({
            type: GET_VENDOR_SERVICES,
            payload: res.data
          })
        })
        .catch(err=>{
          dispatch(returnErrors(err.response.data,err.response.data,'GET_VENDOR_SERVICES_FAIL'));
        })
};

export const addReview = ({rating,review,serviceId})=>(dispatch,getState)=>{
  const body = JSON.stringify({rating,review})
    axios.post(`${url}/reviews/${serviceId}`,body,tokenConfig(getState))
    .then(res=>{
      dispatch({
        type: ADD_REVIEW_SUCCESS,
        payload: res.data
      })
    })
    .catch(err=>{
      dispatch(returnErrors(err.response.data,err.response.status,'ADD_REVIEW_FAIL'))
    })
}