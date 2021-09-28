import actions from "./actions";

const getCartFromLS = () => (dispatch) => {
    let localStorageData = JSON.parse(localStorage.getItem("cart"));
    if (!localStorageData) {
        return
    } else {
        dispatch(actions.gotCartDataFromLs(localStorageData))
    }
}

const addToCart = (id) => (dispatch,getState) => {
    const cart = getState().cart.items;
    const updatedCart = [...cart, id];
    localStorage.setItem("cart", JSON.stringify(updatedCart))
    dispatch(actions.addToCart(updatedCart))
}

const removeFromCart = (id) => (dispatch, getState) => {
    const cart = getState().cart.items;
    const updatedCart = cart.filter(cartID => cartID !== id)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
    dispatch(actions.removeFromCart(updatedCart))
}

const calculatedTotalPrice = (arr) => (dispatch) => {
    const arrayOfPrices = arr.map(cartObject => +cartObject.price.replace('USD', '').trim('').replace('$', '').trim('').replace(/\s+/g, ''))
    const totalPrice = arrayOfPrices.reduce((acc, cur) => {
        return acc + cur;
    },0)
    dispatch(actions.calculatedTotalPrice(totalPrice))
}

const checkedOut = (array) => (dispatch) => {
    localStorage.setItem('cart', JSON.stringify([]))
    dispatch(actions.checkedOut(array))
}


export default {
    addToCart,
    removeFromCart,
    getCartFromLS,
    calculatedTotalPrice,
    checkedOut
}

