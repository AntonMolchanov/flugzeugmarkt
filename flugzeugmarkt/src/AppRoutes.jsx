import React, {useContext} from 'react';
import {Switch, Route} from 'react-router-dom'
import Cart from "./view/Components/Pages/Cart/Cart";
import GoodsList from "./view/Components/Pages/GoodsList/GoodsList";
import Favourites from "./view/Components/Pages/Favourites/Favourites";


function AppRoutes(props) {

    return (
        <Switch>
            <Route path="/cart" render={() => <Cart/>}/>
            <Route path="/favourites" render={() => <Favourites/>}/>
            <Route path="/" render={() => <GoodsList/>}/>
        </Switch>
    );
}

export default AppRoutes;