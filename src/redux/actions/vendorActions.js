import { REGISTER_BUSINESS_SUCCESS } from './type';
import axios from "axios";
import {returnErrors} from './errorActions';
import { tokenConfig } from './authActions';

import {url} from '../../helper/url';

export const registerBusiness = ({businessname, description, residence, phone, categoryName,establishedYear,email,website,openingTime,closingTime}) => (dispatch, getState) => {
  const detail = {
    description: description,
    location: residence,
    contact: phone,
    establishedDate: establishedYear,
    email: email,
    operationalTime: openingTime + " to "  + closingTime
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
