import React from 'react';
import './sidebar.scss'
import Werbung from './img/luftfahrtversicherung24_280x600.jpeg'
function Sidebar(props) {
    return (
        <aside className="aside">
            <div className="search">
                <div className="content-wrapper">
                    <h3>Flugzeug kaufen</h3>
                    <ul className="search-list">
                        <li className="search-item"><a className="item-text" href="#">Alle Flugzeuge</a></li>
                        <li className="search-item"><a className="item-text" href="#">Motorflugzeug kaufen</a></li>
                        <li className="search-item"><a className="item-text" href="#">Motorsegler kaufen</a></li>
                        <li className="search-item"><a className="item-text" href="#">Ultraleichtflugzeug kaufen</a></li>
                        <li className="search-item"><a className="item-text" href="#">Helikopter kaufen</a></li>
                        <li className="search-item"><a className="item-text" href="#">Jet kaufen</a></li>
                    </ul>
                </div>
            </div>
            <div className="advertisement">
                <div className="content-wrapper">
                    <img src={Werbung} alt=""/>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;