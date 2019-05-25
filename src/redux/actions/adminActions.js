import {FETCH_CATEGORY} from './type';
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

