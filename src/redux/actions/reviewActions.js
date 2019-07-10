import {
  POST_REVIEW_FAIL,
  POST_REVIEW_SUCCESS,
  POST_REVIEW_LOADING
} from "./type";
import { returnErrors } from "./errorActions";
import { url } from "../../helper/url";
import { tokenConfig } from "./authActions";
import Axios from "axios";

export const postReviewAction = (id, reviewData) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: POST_REVIEW_LOADING
      });
      const res = await Axios.post(
        `${url}/reviews/${id}`,
        reviewData,
        tokenConfig(getState)
      );
      dispatch({
        type: POST_REVIEW_SUCCESS,
        payload: res.status
      });
    } catch (err) {
      dispatch(
        returnErrors(err.response.data, err.response.status, "POST_REVIEW_FAIL")
      );
      dispatch({
        type: POST_REVIEW_FAIL,
        payload: err.response.data
      });
    }
  };
};
