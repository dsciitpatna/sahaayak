import {FETCH_CATEGORY,DELETE_CATEGORY,ADD_CATEGORY} from '../actions/type';

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
        case ADD_CATEGORY:
            return {category :state.category.concat(action.payload)}
        case DELETE_CATEGORY :
            return { category: state.category.filter(catname =>
                catname.id !== action.payload
             )}
        default: return state;
    }

}
export default fetchCategory; 