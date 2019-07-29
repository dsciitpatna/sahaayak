import { FETCH_CATEGORY_SUCCESS,ADD_CATEGORY_SUCCESS,DELETE_CATEGORY_SUCCESS ,UPDATE_CATEGORY_SUCCESS} from "./type";
import axios from "axios";
import { tokenConfig } from "./authActions";
import { url } from "../../helper/url";

export const fetchCategory = () => (dispatch,getState) => {
    axios
      .get(`${url}/categories`, tokenConfig(getState))
      .then(res =>{
        dispatch({
          type:FETCH_CATEGORY_SUCCESS,
          payload:res.data
        })
      })
  }

export const addCategory = (name) => (dispatch,getState) => {
    const body = JSON.stringify({ name });
    axios
        .post(`${url}/categories`,body,tokenConfig(getState))
        .then((res) => {
          dispatch({
            type:ADD_CATEGORY_SUCCESS,
            payload:res.data
          })
        })
}

export const deleteCategory = (id) => (dispatch,getState) => {
    axios
        .delete(`${url}/categories/`+id, tokenConfig(getState))
        .then(() => {
          dispatch({
            type:DELETE_CATEGORY_SUCCESS,
            payload:id
          })
        })
}

export const updateCategory = (name,id) => (dispatch,getState) => {
    const body = JSON.stringify({ name });
    axios
        .patch(`${url}/categories/`+id,body,tokenConfig(getState))
        .then((res) => {
          dispatch({
            type:UPDATE_CATEGORY_SUCCESS,
            payload:id,
            packet:res.data
          })
        })
}