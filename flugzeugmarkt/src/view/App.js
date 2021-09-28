import React,{useState,useEffect} from "react";
import '../App.css';
import Header from "./Components/Header/Header";
import AppRoutes from "../AppRoutes";
import Sidebar from "./Components/Sidebar/Sidebar";
import {goodsOperations} from "../redux/features/goods/index";
import {favouritesOperations} from "../redux/features/favourites/index";
import {cartOperations} from "../redux/features/cart/index";
import {useDispatch} from "react-redux";

function App() {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(goodsOperations.getData())
        dispatch(favouritesOperations.getFavourites())
    },[])

    useEffect(()=>{
        dispatch(cartOperations.getCartFromLS())
    },[])

    return (
        <div className="App">
            <Header/>
            <main className="main">
                    <AppRoutes/>
                <Sidebar/>
            </main>
        </div>
    );
}

export default App;

