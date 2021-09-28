import React from 'react';
import './header.scss'
import logo from './img/logo.png'
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-logo">
                    <img src={logo} alt="logo"/>
                </div>
                <nav className="header-nav">
                    <ul className="header-nav-list">
                        <li className="list-item"><NavLink exact to="/" className="list-item-text" activeClassName="list-item-active">Startseite</NavLink></li>
                        <li className="list-item"><NavLink to="/cart" className="list-item-text" activeClassName="list-item-active">Warenkorb</NavLink></li>
                        <li className="list-item"><NavLink to="favourites" className="list-item-text" activeClassName="list-item-active">Merkliste</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className="header-heading">
                <h1>Segelflugzeug kaufen</h1>
                <p>Hier können Sie ein neues oder gebrauchtes Segelflugzeug kaufen</p>
            </div>
        </header>
    );
}

export default Header;