import { GET_ALL_USERS, GET_ALL_USERS_FAIL, DELETE_USER, DELETE_USER_FAIL } from "./type";
import axios from "axios";
import { returnErrors } from "./errorActions";
import { tokenConfig } from "./authActions";

import { url } from "../../helper/url";

export const getAllUsers = () => (dispatch, getState) => {
  axios
    .get(`${url}/users`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_ALL_USERS,
        payload: res.data.users
      });
    })
    .catch(err => {
      console.log(err.response);
      dispatch( returnErrors(err.response.data,err.response.status,"GET_ALL_USERS_FAIL"));
      dispatch({
        type: GET_ALL_USERS_FAIL
      })
    });
};

export const deleteUser = (userId) => (dispatch, getState) => {
    axios
      .delete(`${url}/users/${userId}`, tokenConfig(getState))
      .then(res => {
        console.log(res.data);
        dispatch({
          type: DELETE_USER
        });
      })
      .catch(err => {
        console.log(err.response);
        dispatch( returnErrors(err.response.data,err.response.status,"GET_ALL_USERS_FAIL"));
        dispatch({
          type: DELETE_USER_FAIL
        })
      });
  };
