import * as types from "./actionType";
import axios from "axios";

const cartAdded= (cart)=>({
    type: types.ADD_TO_CART,
    payload: cart,
});

 export const addToCart = (cart)=>{
    return function (dispatch){
        axios.post(`${process.env.REACT_APP_LOCAL_API}`, cart).then((resp)=>{
         
        //  console.log("resp", resp)
            dispatch(cartAdded());

        }).catch((error)=> console.log(error));

    };
 };

 const getCart = (carts)=>({
    type: types.GET_CART,
    payload: carts,
});

 export const loadCart = ()=>{
    return function (dispatch){
        axios.get(`${process.env.REACT_APP_LOCAL_API}`).then((resp)=>{
         
        //  console.log("resp", resp)
            dispatch(getCart(resp.data));
        }).catch((error)=> console.log(error));

    };
 };
