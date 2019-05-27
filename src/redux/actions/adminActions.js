import {FETCH_CATEGORY,DELETE_CATEGORY,ADD_CATEGORY,UPDATE_CATEGORY} from './type';
import axios from 'axios';

export const fetchCategory =()=>{
    return dispatch =>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res=>{
                dispatch({
                    type:FETCH_CATEGORY,
                    payload: res.data,
                })
            })
    }
};

export const deleteCategory =(e)=>{
    return dispatch =>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res=>{
                dispatch({
                    type:DELETE_CATEGORY,
                    payload: e,
                })
            })
    }
};

export const addCategory =(e)=>{
    return dispatch =>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res=>{
                dispatch({
                    type:ADD_CATEGORY,
                    payload: e,
                })
            })
    }
};

export const updateCategory =(newName,e)=>{
    return dispatch =>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res=>{
                dispatch({
                    type:UPDATE_CATEGORY,
                    payload: e,
                    newName:newName,
                })
            })
    }
};


