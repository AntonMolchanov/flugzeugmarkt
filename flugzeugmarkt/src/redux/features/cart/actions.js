import types from "./types";

const addToCart = (id) => ({
    type: types.ADDED_TO_CART,
    payload: id
})

const removeFromCart = (id) => ({
    type: types.REMOVED_FROM_CART,
    payload: id
})

const gotCartDataFromLs = (array) => ({
    type: types.GOT_CART_DATA_FROM_LS,
    payload: array
})

const calculatedTotalPrice = (totalPrice) => ({
    type: types.CALCULATED_TOTAL_PRICE,
    payload: totalPrice
})

const checkedOut = (array) => ({
    type: types.CHECKED_OUT,
    payload: array
})

export default {
    addToCart,
    removeFromCart,
    gotCartDataFromLs,
    calculatedTotalPrice,
    checkedOut
}
