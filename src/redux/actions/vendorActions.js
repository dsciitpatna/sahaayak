import { REGISTER_BUSINESS_SUCCESS,GET_VENDOR_SERVICES } from './type';
import axios from "axios";
import {returnErrors} from './errorActions';
import { tokenConfig } from './authActions';

const url = "https://secure-falls-92714.herokuapp.com";

export const registerBusiness = ({businessname,description,residence,phone}) => (dispatch, getState) => {
  const detail = {
    description: description,
    location: residence,
    contact: phone
  };
  const body = JSON.stringify({ name:businessname, detail });
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
// Get all services for a particular vendor
export const getServices = (id)=>(dispatch,getState)=>{
  const config = tokenConfig(getState);
  axios.get(`${url}/services/vendors/${id}`,config)
        .then(res=>{
          dispatch({
            type: GET_VENDOR_SERVICES,
            payload: res.data
          })
        })
        .catch(err=>{
          dispatch(returnErrors(err.response.data,err.response.data,'GET_VENDOR_SERVICE_FAIL'));
        })
};