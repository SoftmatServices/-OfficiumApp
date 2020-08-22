import React, { Component } from 'react';
import '../../css/Latera.css';
import '../../css/Menus.css';
import Filtro from '../ListaHome/Filtro';
import ListaContainer from '../ListaHome/ListaContainer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class Albaniles extends Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                    <nav id="sidebar">
                        <div className="sidebar-header">
                            <h3>Albañiles</h3>
                        </div>
                    </nav>
                </div>
                <div>
                    <ListaContainer />
                </div>
            </div>
        );
    }
}
export default Albaniles;