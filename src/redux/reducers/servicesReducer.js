import {GET_ALL_SERVICES_LOADING,GET_ALL_SERVICES_SUCCESS,GET_ALL_SERVICES_FAIL} from '../actions/type';

const initialState= {
    services: null,
    status: null
}

export default (state=initialState,{type,payload})=>{
    switch(type){
        case GET_ALL_SERVICES_LOADING:
            return {
                ...state,
                status:"Loading"
            }
        case GET_ALL_SERVICES_SUCCESS:
            return{
                ...state,
                services: payload,
                status: "done" 
            }
        case GET_ALL_SERVICES_FAIL:
            return{
                ...state,
                status:"fail"
            }
        default:
            return state
    }
}