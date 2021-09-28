import React,{useEffect,useState,useContext} from "react";
import Button from "../../../Button/Button";
import Modal from "../../../Modal/Modal";
import './GoodItem.scss'

import starempty from './icons/star-empty.svg'
import starfilled from './icons/star-full.svg'
import calendar from './icons/calendar.svg'
import time from './icons/time.svg'

import PropTypes from 'prop-types'
import {useDispatch, useSelector} from "react-redux";
import {favouritesOperations, favouritesSelectors} from "../../../../../redux/features/favourites";
import {toggleDataInLocalStorage} from "../../../../../redux/features/favourites/toggleLS";
import {cartOperations, cartSelectors} from "../../../../../redux/features/cart";
import {modalOperations, modalSelectors} from "../../../../../redux/features/modal";
import store from "../../../../../redux/store/store";

GoodsItem.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    snippet: PropTypes.string.isRequired,
    flyingHours: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
}



function GoodsItem(props) {
    let {
        name,
        year,
        location,
        manufacturer,
        snippet,
        flyingHours,
        price,
        src,
        id
    } = props

    id = id.toString()

    const dispatch = useDispatch()
    const cart = useSelector(cartSelectors.cart)
    const favourites = useSelector(favouritesSelectors.favourites)
    const modals = useSelector(modalSelectors.modal)


    const [isAddedToFavs, setIsAddedToFavs] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isInCart,setIsInCart] = useState(false)


    useEffect(()=>{
        const itemIsIncart = cart.items.some(cartID => cartID === id)
            setIsInCart(itemIsIncart)
    },[cart.items])

    useEffect(() => {
        favourites.includes(id) && setIsAddedToFavs(true)
    },[])

    const toggleFavsState = () => {
        if (isAddedToFavs) {
            dispatch(favouritesOperations.removeFromFavs(props.id))
        } else {
            dispatch(favouritesOperations.addToFavs(props.id))
        }
        toggleDataInLocalStorage(id)

        setIsAddedToFavs(!isAddedToFavs)
    }

    const openModal = () => {
        dispatch(modalOperations.openModal(props.id))
        setIsModalOpen(true)
    }
    const closeModal = () => {
        dispatch(modalOperations.closeModal(null))
        setIsModalOpen(false)
    }


    const addToCart = () => {
        dispatch(cartOperations.addToCart(props.id))
        openModal()
    }

    const removeFromCart = () => {
        dispatch(cartOperations.removeFromCart(props.id))
        openModal()
    }


    const addToCartButton = <Button
        backgroundColor='#6699ff'
        text='In den Warenkorb'
        onClick={openModal}/>

    const removeFromCartButton = <Button
        backgroundColor='#6699ff'
        text='Aus dem Warenkorb loeschen'
        onClick={openModal}/>

    const modalAddToCart = <Modal
        onClick={closeModal}
        header='Do you want to add this item to cart?'
        text={name}
        subtext={price}
        closeButton={true}
        id="firstModal"
        cssClass='modal-wrapper-first modal-wrapper'
        actions={
            [
                <Button
                    backgroundColor='#999999'
                    text='Ok'
                    onClick={addToCart}
                />,
                <Button
                    backgroundColor='#999999'
                    text='Cancel'
                    onClick={closeModal}
                />
            ]}
    />

    const modalRemoveFromCart = <Modal
        onClick={closeModal}
        header='Do you want to remove this item from cart?'
        text={name}
        subtext={price}
        closeButton={true}
        id="firstModal"
        cssClass='modal-wrapper-first modal-wrapper'
        actions={
            [
                <Button
                    backgroundColor='#999999'
                    text='Ok'
                    onClick={()=>removeFromCart()}
                />,
                <Button
                    backgroundColor='#999999'
                    text='Cancel'
                    onClick={closeModal}
                />
            ]}
    />

    let modal;
    if (isInCart){
        modal = modalRemoveFromCart
    } else {
        modal = modalAddToCart
    }


    return (
        <div className='goods-item'>
            <img className='item-img' src={src} alt=""/>
            <div className='item-info'>
                <div className="item-heading">
                    <div className="item-title-block">
                        <p className='item-title'>{name}</p>
                        <p className='item-subtitle'>{manufacturer}</p>
                    </div>
                    <div className="item-cart-fav">
                        <div className='favIcon-wrapper' onClick={toggleFavsState}>
                            <img className='favIcon' src={isAddedToFavs ? starfilled : starempty} alt=""/>
                        </div>
                        <div className='button-wrapper'>
                            {isInCart ? removeFromCartButton : addToCartButton}
                        </div>
                    </div>
                </div>
                <p className="item-price">{price}</p>
                <p className="item-snippet">{snippet}</p>
                <div className="item-addInfo">
                    <div className="addInfo">
                        <img className="addInfo-icon" src={calendar} alt=""/>
                        {year}
                    </div>
                    <div className="addInfo">
                        <img className="addInfo-icon" src={location} alt=""/>
                        {location}
                    </div>
                    <div className="addInfo">
                        <img className="addInfo-icon" src={time} alt=""/>
                        {flyingHours}
                    </div>
                </div>
            </div>
            {isModalOpen &&
            modal
            }
        </div>
    );
}
export default GoodsItem;

