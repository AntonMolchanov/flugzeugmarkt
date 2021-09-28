import React, {useContext} from 'react';
import GoodsItem from "./GoodsItem/GoodsItem";
import './Goodslist.scss'
import {useSelector} from "react-redux";
import {goodsSelectors} from "../../../../redux/features/goods";


function GoodsList(props) {

    const goods = useSelector(goodsSelectors.goods)

    const goodsList = goods.map(goodItem => <GoodsItem
        key={goodItem.id}
        name={goodItem.name}
        year={goodItem.year}
        location={goodItem.location}
        manufacturer={goodItem.manufacturer}
        snippet={goodItem.snippet}
        flyingHours={goodItem.flyingHours}
        price={goodItem.price}
        src={goodItem.src}
        id={goodItem.id}

    />)

    return (
        <div className="goodslist">
            {goodsList}
        </div>
    );
}

export default GoodsList;
