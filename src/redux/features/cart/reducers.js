import types from "./types";

const initialValue = {
    items: [],
    totalPrice: null
}

const cartReducers = (state = initialValue, action) => {
    const {type,payload} = action;
    const {ADDED_TO_CART,REMOVED_FROM_CART,GOT_CART_DATA_FROM_LS, CALCULATED_TOTAL_PRICE, CHECKED_OUT} = types

    switch (type){
        case ADDED_TO_CART:
            return {
                ...state,
                items: payload,
            }
        case REMOVED_FROM_CART:
            return {
                ...state,
                items: payload,
            }
        case GOT_CART_DATA_FROM_LS:
            return {
                ...state,
                items: payload,
            }
        case CALCULATED_TOTAL_PRICE:
            return {
                ...state,
                totalPrice: payload
            }
        case CHECKED_OUT:
            return {
                ...state,
                items: payload
            }
        default:
            return state
    }
}

export default {
    cart: cartReducers
}