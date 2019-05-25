import {FETCH_CATEGORY} from './type';

export const fetchCategory =()=>{
    return dispatch =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => dispatch({
                type:FETCH_CATEGORY,
                payload: json,
            }))
    }
};

