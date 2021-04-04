import {INCREMENT , DECREMENT} from "./types";
import { increment, decrement } from "./actions";


const initialState  =  {
    count : 0 ,
    name : '',
    id : "0"

}

 const counterReducer =  ( state = initialState, action) =>{

    switch (action.type) {
        case INCREMENT :
            return { ...state, count: state.count + 1 }
        case DECREMENT :
            return { ...state, count: state.count - 1 }
        default :
            return state;
    }


}
export default counterReducer;