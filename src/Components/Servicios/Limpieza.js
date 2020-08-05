import React, { Component } from 'react';
import '../../css/Latera.css';
import '../../css/Menus.css';
import ListaContainer from '../ListaHome/ListaContainer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class Limpieza extends Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                    <nav id="sidebar">
                        <div className="sidebar-header">
                            <h3>Limpieza</h3>
                        </div>
                        <ul className="list-unstyled components">
                            <p><Link to="/Menus">Menu</Link></p>
                            <li className="active">
                                <Link to="/Arquitectos">Limpieza</Link>
                            </li>
                            <li>
                                <a href="#menu">Arquitectos</a>
                            </li>
                            <li>
                                <a href="#menu">Belleza</a>
                            </li>
                            <li>
                                <a href="#menu">Carpinteros</a>
                            </li>
                            <li>
                                <a href="#menu">Cerrajeros</a>
                            </li>
                            <li className="active">
                                <a href="#menu">Entrenadores</a>
                            </li>
                            <li>
                                <a href="#menu">Electricistas</a>
                            </li>
                            <li>
                                <a href="#menu">Reparaciones</a>
                            </li>
                            <li>
                                <a href="#menu">Limpieza</a>
                            </li>
                            <li>
                                <a href="#menu">Pintores</a>
                            </li>
                            <li className="active">
                                <a href="#menu">Plomeria</a>
                            </li>
                            <li>
                                <a href="#menu">Tecnicos</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <ListaContainer />
                </div>
            </div>
        );
    }
}
export default Limpieza;