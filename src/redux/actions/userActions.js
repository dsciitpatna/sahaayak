import { USER_UPDATE, USER_LOADED } from './type';
import axios from 'axios';
import { returnErrors } from './errorActions';


export const updateUser = ({updatedUser, userId}) => (dispatch, getState) => { 
    axios.patch('/users/'+userId, updatedUser, tokenConfig(getState))
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
      dispatch(returnErrors(err.response.data, err.response.status));
    })

}

const tokenConfig = getState => {
  const token = getState().auth.token;
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  if (token) {
    config.headers['x-auth-token'] = token;
  }
  return config;
}