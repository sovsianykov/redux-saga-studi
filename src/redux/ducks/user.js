import { GET_USER, SET_USER } from "./types";

const initialState  =  {
    user: undefined

}

export const userReducer =  ( state = initialState, action) =>{

    switch (action.type) {
        case SET_USER :
            const {user} = action
            return { ...state, user : user }
        default :
            return state;
    }


}
