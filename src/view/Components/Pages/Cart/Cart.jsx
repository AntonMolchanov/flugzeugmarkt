import React, {useContext, useEffect} from 'react';
import './Cart.scss'
import GoodsItem from "../GoodsList/GoodsItem/GoodsItem";
import {Context} from "../../../../Context";
import PropTypes from 'prop-types'
import {useSelector, useDispatch} from "react-redux";
import {goodsSelectors} from "../../../../redux/features/goods/index";
import {cartOperations, cartSelectors} from "../../../../redux/features/cart/index";
import CheckoutBtn from "./Checkout/CheckoutBtn/CheckoutBtn";
import CheckoutForm from "./Checkout/CheckoutForm/CheckoutForm";


function Cart(props) {

    const dispatch = useDispatch()

    const cart = useSelector(cartSelectors.cart)
    const goods = useSelector(goodsSelectors.goods)

    const cartObjects = goods.filter(object => {
        for (let id of cart.items) {
            if (id === object.id) {
                return true
            }
        }
    })

    useEffect(()=>{
        dispatch(cartOperations.calculatedTotalPrice(cartObjects))
    },[cart.items])


    const cartItems = cartObjects.map(cartItem => <GoodsItem key={cartItem.id}
                                                             name={cartItem.name}
                                                             year={cartItem.year}
                                                             location={cartItem.location}
                                                             manufacturer={cartItem.manufacturer}
                                                             snippet={cartItem.snippet}
                                                             flyingHours={cartItem.flyingHours}
                                                             price={cartItem.price}
                                                             src={cartItem.src}
                                                             id={cartItem.id}
    />)

    return (
        <div>
            <div className="cart-items">
                {cartItems}
                {cartItems.length >= 1 ? <CheckoutForm/> : <h1>Ihr Warenkorb ist leer</h1>}
            </div>
        </div>
    );
}

export default Cart;
