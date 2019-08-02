import { REGISTER_BUSINESS_SUCCESS, GET_VENDOR_SERVICES, REGISTER_BUSINESS_FAIL,REGISTER_BUSINESS_LOADING } from './type';
import axios from "axios";
import { returnErrors } from './errorActions';
import { tokenConfig } from './authActions';

import { url } from '../../helper/url';

export const registerBusiness = (registerData) => (dispatch, getState) => {
  const config = tokenConfig(getState);
  dispatch({type: REGISTER_BUSINESS_LOADING});
  axios
    .post(`${url}/services`, registerData, config)
    .then(res => {
      dispatch({
        type: REGISTER_BUSINESS_SUCCESS,
        payload: res.status
      })
    }
    )
    .catch(err => {
      dispatch({ type: REGISTER_BUSINESS_FAIL,
                  payload:err.status
                 })
    }
    );
};

export const getServices = (id) => (dispatch, getState) => {

  axios.get(`${url}/services/vendors/${id}`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_VENDOR_SERVICES,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.data, 'GET_VENDOR_SERVICES_FAIL'));
    })
};