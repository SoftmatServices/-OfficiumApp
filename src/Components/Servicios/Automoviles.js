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


class Automoviles extends Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                    <nav id="sidebar">
                        <div className="sidebar-header">
                            <h3>Automóviles</h3>
                        </div>
                        <ul className="list-unstyled components">
                            <p><Link to="/Menus">Menu</Link></p>
                            <li className="active">
                                <Link to="/Albaniles">Albañiles</Link>
                            </li>
                            <li>
                                <Link to="/Arquitectos">Arquitectos</Link>
                            </li>
                            <li>
                                <Link to="/Automoviles">Automóviles</Link>
                            </li>
                            <li>
                                <Link to="/Belleza">Belleza</Link>
                            </li>
                            <li>
                                <Link to="/Carpinteros">Carpinteros</Link>
                            </li>
                            <li>
                                <Link to="/Cerrajeros">Cerrajeros</Link>
                            </li>
                            <li className="active">
                                <Link to="/Entrenadores">Entrenadores</Link>
                            </li>
                            <li>
                                <Link to="/Electricistas">Electricistas</Link>
                            </li>
                            <li>
                                <Link to="/Reparaciones">Reparaciones</Link>
                            </li>
                            <li>
                                <Link to="/Limpieza">Limpieza</Link>
                            </li>
                            <li>
                                <Link to="/Pintores">Pintores</Link>
                            </li>
                            <li className="active">
                                <Link to="/Plomeria">Plomeria</Link>
                            </li>
                            <li>
                                <Link to="/Tecnicos">Tecnicos</Link>
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
export default Automoviles;