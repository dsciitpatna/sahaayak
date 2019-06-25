import { GET_ALL_USERS, GET_ALL_USERS_FAIL, DELETE_USER, DELETE_USER_FAIL, GET_ALL_SERVICES, GET_ALL_SERVICES_FAIL, DELETE_SERVICE, DELETE_SERVICE_FAIL, DELETED_ALL_SERVICES_OF_VENDOR } from "./type";
import axios from "axios";
import { returnErrors } from "./errorActions";
import { tokenConfig } from "./authActions";

import { url } from "../../helper/url";

export const getAllUsers = () => (dispatch, getState) => {
  axios
    .get(`${url}/users`, tokenConfig(getState))
    .then(res => {
      console.log(res.data);
      dispatch({
        type: GET_ALL_USERS,
        payload: res.data.users
      });
    })
    .catch(err => {
      dispatch( returnErrors(err.response.data,err.response.status,"ADMIN_ACTIONS_ERRORS"));
      dispatch({
        type: GET_ALL_USERS_FAIL
      })
    });
};

export const deleteUser = (userId) => (dispatch, getState) => {
  axios
    .delete(`${url}/users/${userId}`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: DELETE_USER
      });
    })
    .catch(err => {
      dispatch({
        type: DELETE_USER_FAIL
      })
    });
  };

export const deleteAllServices = (vendorId) => (dispatch, getState) => {
  axios
    .delete(`${url}/services/vendors/${vendorId}`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: DELETED_ALL_SERVICES_OF_VENDOR
      });
    })
    .catch(err => {
      dispatch( returnErrors(err.response.data,err.response.status,"ADMIN_ACTIONS_ERRORS"));
    });
  };

export const getAllServices = () => (dispatch, getState) => {
  axios
    .get(`${url}/services`, tokenConfig(getState))
    .then(res => {
      console.log(res.data);
      dispatch({
        type: GET_ALL_SERVICES,
        payload: res.data.services
      });
    })
    .catch(err => {
      dispatch( returnErrors(err.response.data,err.response.status,"ADMIN_ACTIONS_ERRORS"));
      dispatch({
        type: GET_ALL_SERVICES_FAIL
      })
    });
};

export const deleteService = (serviceId) => (dispatch, getState) => {
  axios
    .delete(`${url}/services/${serviceId}`, tokenConfig(getState))
    .then(res => {
      console.log(res.data);
      dispatch({
        type: DELETE_SERVICE
      });
    })
    .catch(err => {
      dispatch({
        type: DELETE_SERVICE_FAIL
      })
    });
  };