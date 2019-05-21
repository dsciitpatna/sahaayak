import { USER_UPDATE } from './type';
import axios from 'axios';
import { returnErrors } from './errorActions';



export const updateUser = (update) => (dispatch, getState) => { 
    console.log(update);
    const updatedUser = JSON.stringify( update.updatedUser );
    const userId = update.userId;
    axios.patch('/users/'+userId, updatedUser, tokenConfig(getState))
    .then(res => dispatch({
    type: USER_UPDATE,
    payload: res.data
    }))
    .catch(err => {
        console.log("error",err.response);
    //dispatch(returnErrors(err.response.data, err.response.status, 'USER_UPDATE_FAIL'));
    //dispatch({ type: USER_UPDATE_FAIL })
    })

}

export const tokenConfig = getState => {
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