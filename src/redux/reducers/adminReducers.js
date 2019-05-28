import {FETCH_CATEGORY,DELETE_CATEGORY,ADD_CATEGORY,UPDATE_CATEGORY} from '../actions/type';

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
                catname._id !== action.payload
             )}
        case UPDATE_CATEGORY:
            return{
                category :state.category.map(item=>{
                    if(item._id===action.payload)
                    return {
                        _id:action.payload,
                        name:action.newCategory.name,
                        register_date:action.newCategory.register_date
                    }
                    else
                    return item
                })
            }
        default: return state;
    }

}
export default fetchCategory; 