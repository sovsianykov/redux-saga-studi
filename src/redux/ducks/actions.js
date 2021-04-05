import {INCREMENT, DECREMENT, GET_USER, SET_USER} from "./types";

export const increment = () => ({
    type : INCREMENT

})
export const decrement = () => ({
    type : DECREMENT

})


export const getUser = (user) => ({
    type : GET_USER,
    user : user

})
export const setUser = () => ({
    type : SET_USER

})
