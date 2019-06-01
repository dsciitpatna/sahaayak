import { 
  USER_UPDATE, 
  USER_LOADED, 
  USER_UPDATE_FAIL ,
  USER_UPDATE_NO_PASS_SUCCESS,
  USER_UPDATE_NO_PASS_FAIL
} from './type';
import axios from 'axios';
import { returnErrors } from './errorActions';
import { tokenConfig } from './authActions';

import {url} from '../../helper/url';

export const updateUser = ({updatedUser, userId}) => (dispatch, getState) => {
  axios.patch(`${url}/users/`+userId, updatedUser, tokenConfig(getState))
  .then(res => {
    dispatch({
      type: USER_UPDATE,
      payload: res.data
    })
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  })
  .catch(err => {
    dispatch(returnErrors(err.response.data, err.response.status, 'USER_UPDATE_FAIL'));
    dispatch({ type: USER_UPDATE_FAIL })
  })
}
export const updateUserNoPass = ({updatedUser},userId)=>(dispatch,getState)=>{
  axios.patch(`${url}/users/updates/${userId}`,updatedUser,tokenConfig(getState))
      .then(res => {
        dispatch({
          type:USER_UPDATE_NO_PASS_SUCCESS,
          payload: res.data
        })
        .dispatch({
          type: USER_LOADED,
          payload:res.data
        })
        .catch(err=>{
          dispatch(returnErrors(err.response.data, err.response.status, "USER_UPDATE_NO_PASS_FAIL"));
          dispatch({type: USER_UPDATE_NO_PASS_FAIL})
        })
      })
}