import {
  USER_LOADING,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERROR,
  OPEN_LOGIN_MODAL,
  CLOSE_LOGIN_MODAL,
  OPEN_REGISTER_MODAL,
  CLOSE_REGISTER_MODAL
} from "./type";
import axios from "axios";
import { returnErrors } from "./errorActions";

import {url} from '../../helper/url';

export const loaduser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  axios
    .get(`${url}/api/login/user`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

export const register = ({ name, email, password, isVendor }) => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({ name, email, password, isVendor });
  axios
    .post(`${url}/users/signup`, body, config)
    .then(res =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({ type: REGISTER_FAIL });
    });
};

export const login = ({ email, password }) => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({ email, password });
  axios
    .post(`${url}/users/login`, body, config)
    .then(res =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({ type: LOGIN_FAIL });
    });
};

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT_SUCCESS });
};

export const openLoginModal = () => dispatch => {
  dispatch({ type: OPEN_LOGIN_MODAL });
};

export const closeLoginModal = () => dispatch => {
  dispatch({ type: CLOSE_LOGIN_MODAL });
};

export const openRegisterModal = () => dispatch => {
  dispatch({ type: OPEN_REGISTER_MODAL });
};

export const closeRegisterModal = () => dispatch => {
  dispatch({ type: CLOSE_REGISTER_MODAL });
};

export const tokenConfig = getState => {
  const token = getState().auth.token;
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
};
