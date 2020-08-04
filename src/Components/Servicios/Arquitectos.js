import React, { Component } from 'react';
import '../../css/Latera.css';
import '../../css/Menus.css';
import ListaContainer from '../ListaHome/ListaContainer';
class Arquitectos extends Component {
    render() {
        return (
            <div>
                <div class="wrapper">
                    <nav id="sidebar">
                        <div class="sidebar-header">
                            <h3>Arquitectos</h3>
                        </div>
                        <ul class="list-unstyled components">
                            <p>Bienvenidos</p>
                            <li class="active">
                                <a href="#menu">Albañiles</a>
                            </li>
                            <li>
                                <a href="#menu">Automóviles</a>
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
                            <li class="active">
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
                            <li class="active">
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
export default Arquitectos;