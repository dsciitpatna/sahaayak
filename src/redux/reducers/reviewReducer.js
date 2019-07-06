import {POST_REVIEW_FAIL,POST_REVIEW_SUCCESS,POST_REVIEW_LOADING} from '../actions/type'

const initialState = {
    reviewPostLoading: false,
    error: null
}

export default (state = initialState,{type,payload})=>{
    switch(type){
        case POST_REVIEW_LOADING:
            return{
                ...state,
                reviewPostLoading:true
            }
        case POST_REVIEW_SUCCESS:
            return{
                ...state,
                reviewPostLoading: false,
                postStatus: payload
            }
        case POST_REVIEW_FAIL:
            return {
                reviewPostLoading:false,
                error:payload
            }
        default:
        return state;            

    }
}