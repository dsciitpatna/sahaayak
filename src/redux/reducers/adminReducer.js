import {FETCH_CATEGORY} from '../actions/type';

const initState={
    category:[],
}

const fetchCategory=(state=initState,action)=>{
    switch(action.type){
        case FETCH_CATEGORY:
            return {
                ...state,
                category:action.payload
            }
        default: return state;
    }

}
export default fetchCategory; 