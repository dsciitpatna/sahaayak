import { REGISTER_BUSINESS_FAIL,REGISTER_BUSINESS_SUCCESS } from './type';
import axios from "axios";
import { tokenConfig } from './authActions';

export const registerBusiness = ({businessname,description,residence,phone}) => (dispatch, getState) => {
  const detail = {
    description: description,
    location: residence,
    contact: phone
  };
  const body = JSON.stringify({ name:businessname, detail });
  const config = tokenConfig(getState);
  axios
    .post("/services", body,config)
    .then(res =>
      dispatch({
        type: REGISTER_BUSINESS_SUCCESS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: REGISTER_BUSINESS_FAIL
      })
    );
};
