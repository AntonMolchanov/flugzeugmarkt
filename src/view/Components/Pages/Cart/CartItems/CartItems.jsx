import React, {Component} from 'react';
import './cartItems.scss'

function CartItems(props) {
    const listOfCartItems = props.cart.map(cartItem => <p>{cartItem.name}</p>)

    return (
        <div className="cart-items-wrapper">
            <p className="cart-title">Cart</p>
            {listOfCartItems}
        </div>);
}

export default CartItems;
