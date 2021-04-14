import {productsData} from "../../productsPage/productsData";
import * as actionTypes from "../actionTypes/actionTypes";

const initialState = {
        products: [...productsData],
        cart: [],
        currentItem: null,


}




const cartReducer = (state = initialState,action) => {

    switch(action.type){
        case actionTypes.ADD_TO_CART:
            const ite= state.products.find((prod) => prod.product_name === action.payload.product_name);
            const inCart = state.cart.find((item)=> item.product_name === action.payload.product_name ? true : false);
            return {
                ...state,
                cart: inCart ? state.cart.map(item => item.product_name === action.payload.product_name ? 
                    {...item,qty: item.qty + 1} :   item)
                   : [...state.cart,{...ite, qty: 1}],
            };

        case actionTypes.REMOVE_FROM_CART:
            return{
                ...state,
                cart: state.cart.filter(item => item.product_name !== action.payload.product_name),
            }

        case actionTypes.ADJUST_QTY:
            return{
                ...state,
                cart: state.cart.map(item =>item.product_name === action.payload.product_name ? {...item,qty: action.payload.qty} : item)
            }
        
        case actionTypes.LOAD_CURRENT_ITEM:
            return{
                ...state,
                currentItem: action.payload,
            }

            default:
                return state;

    }
    

}

export default cartReducer;