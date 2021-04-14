import * as actionTypes from "../actionTypes/actionTypes";


export const addToCart = (name) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            product_name: name
    }
}
}

export const removeFromCart = (name) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            product_name: name
    }
}
}

export const adjustQty = (name,value) => {
    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            product_name: name,
            qty: value
    }
}
}


export const loadItem = (name) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: name
            
    
}
}