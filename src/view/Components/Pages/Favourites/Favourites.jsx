import React,{useContext} from 'react';
import GoodsItem from "../GoodsList/GoodsItem/GoodsItem";
import {Context} from "../../../../Context";
import PropTypes from 'prop-types'
import {useSelector} from "react-redux";
import {goodsSelectors} from "../../../../redux/features/goods";
import {favouritesSelectors} from "../../../../redux/features/favourites";


function Favourites(props) {
    const favourites = useSelector(favouritesSelectors.favourites)
    const goods = useSelector(goodsSelectors.goods)

    const favouriteObjects = goods.filter(object => {
        for(let id of favourites){
            if (id === object.id){
                return true
            }
        }
    })

    const favouriteList = favouriteObjects.map(favItem => <GoodsItem
        key={favItem.id}
        name={favItem.name}
        year={favItem.year}
        location={favItem.location}
        manufacturer={favItem.manufacturer}
        snippet={favItem.snippet}
        flyingHours={favItem.flyingHours}
        price={favItem.price}
        src={favItem.src}
        id={favItem.id}
    />)


    return (
        <div>{favouriteList}</div>
    );
}

export default Favourites;