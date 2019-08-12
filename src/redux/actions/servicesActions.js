import {GET_ALL_SERVICES_LOADING,GET_ALL_SERVICES_SUCCESS,GET_ALL_SERVICES_FAIL} from './type';
import { returnErrors } from "./errorActions";
import { url } from "../../helper/url";
import Axios from "axios";

export const getAllServices = ()=>{
    return async (dispatch, getState) => {
        try {
          dispatch({
            type: GET_ALL_SERVICES_LOADING
          });
          const res = await Axios.get(
            `${url}/services`
          );
          dispatch({
            type: GET_ALL_SERVICES_SUCCESS,
            payload: res.data
          });
        } catch (err) {
          dispatch(
            returnErrors(err.response.data, err.response.status, "GET_ALL_SERVICES_FAIL")
          );
          dispatch({
            type: GET_ALL_SERVICES_FAIL,
            payload: err.response.data
          });
        }
      }
}