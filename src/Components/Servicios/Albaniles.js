import React, { Component } from 'react';
import '../../css/Latera.css';
import '../../css/Menus.css';
import '../../css/Principal/Estilos.css';
//import Filtro from '../ListaHome/Filtro';
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
                <body className="animsition">
                    <div className="page-wrapper">
                        <header className="header-mobile d-block d-lg-none">
                            <div className="header-mobile__bar">
                                <div className="container-fluid">
                                    <div className="header-mobile-inner">
                                        <a className="logo" href="index.html">
                                            <img src="/img/Logo.ico" alt="Officium" />
                                        </a>
                                        <button className="hamburger hamburger--slider" type="button">
                                            <span className="hamburger-box">
                                                <span className="hamburger-inner"></span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <nav className="navbar-mobile">
                                <div className="container-fluid">
                                    <ul className="navbar-mobile__list list-unstyled">
                                        <li className="has-sub">
                                            <a className="js-arrow" href="index">
                                                <i className="fas fa-tachometer-alt"></i>Categorias
                                            </a>
                                            <ul className="navbar-mobile-sub__list list-unstyled js-sub-list">
                                                <li>
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
                                                <li>
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
                                                <li >
                                                    <Link to="/Plomeria">Plomeria</Link>
                                                </li>
                                                <li>
                                                    <Link to="/Tecnicos">Tecnicos</Link>
                                                </li>
                                            </ul>
                                            <li className="has-sub">
                                                <a className="js-arrow" href="index">
                                                    <i className="fas fa-copy"></i>Registro
                                                </a>
                                                <ul className="navbar-mobile-sub__list list-unstyled js-sub-list">
                                                    <li>
                                                        <a href="login.html">Login</a>
                                                    </li>
                                                    <li>
                                                        <a href="register.html">Register</a>
                                                    </li>
                                                    <li>
                                                        <a href="forget-pass.html">Forget Password</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-sub">
                                                <a className="js-arrow" href="index">
                                                    <i className="fas fa-copy"></i>Anuncio
                                                </a>
                                                <ul className="navbar-mobile-sub__list list-unstyled js-sub-list">
                                                    <li>
                                                        <a href="login.html">Crear Servicio</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </header>
                        <aside className="menu-sidebar d-none d-lg-block">
                            <div className="logo">
                                <a href="index">
                                    <img src="/img/Logo.ico" alt="Officium" />
                                </a>
                            </div>
                            <div className="menu-sidebar__content js-scrollbar1">
                                <nav className="navbar-sidebar">
                                    <ul className="list-unstyled navbar__list">
                                        <li className="active has-sub">
                                            <a className="js-arrow" href="index">
                                                <i className="fas fa-tachometer-alt"></i>Categorias
                                            </a>
                                            <ul className="list-unstyled navbar__sub-list js-sub-list">
                                                <li>
                                                    <Link to="/Albaniles">Albañiles</Link>
                                                </li>
                                                <li>
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
                                                <li>
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
                                                <li >
                                                    <Link to="/Plomeria">Plomeria</Link>
                                                </li>
                                                <li>
                                                    <Link to="/Tecnicos">Tecnicos</Link>
                                                </li>
                                            </ul>
                                            <li className="has-sub">
                                                <a className="js-arrow" href="index">
                                                    <i className="fas fa-copy"></i>Registro
                                                </a>
                                                <ul className="navbar-mobile-sub__list list-unstyled js-sub-list">
                                                    <li>
                                                        <a href="login.html">Login</a>
                                                    </li>
                                                    <li>
                                                        <a href="register.html">Register</a>
                                                    </li>
                                                    <li>
                                                        <a href="forget-pass.html">Forget Password</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-sub">
                                                <a className="js-arrow" href="index">
                                                    <i className="fas fa-copy"></i>Anuncio
                                                </a>
                                                <ul className="navbar-mobile-sub__list list-unstyled js-sub-list">
                                                    <li>
                                                        <a href="login.html">Crear Servicio</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </aside>
                        <div className="page-container">
                            <header className="header-desktop">
                                <div className="section__content section__content--p30">
                                    <div className="container-fluid">
                                        <div className="header-wrap">
                                            <form className="form-header" action="" method="POST">
                                                <input className="au-input au-input--xl" type="text" name="search"
                                                    placeholder="Search for datas &amp; reports..." />
                                                <button className="au-btn--submit" type="submit">
                                                    <i className="zmdi zmdi-search"></i>
                                                </button>
                                            </form>
                                            <div className="account-wrap">
                                                <div className="account-item clearfix js-item-menu">
                                                    <div className="image">
                                                        <img src="/img/camilo.jpg" alt="Camilo Andres" />
                                                    </div>
                                                    <div className="content">
                                                        <a className="js-acc-btn" href="index">Camilo</a>
                                                    </div>
                                                    <div className="account-dropdown js-dropdown">
                                                        <div className="info clearfix">
                                                            <div className="image">
                                                                <a href="index">
                                                                    <img src="/img/camilo.jpg" alt="Camilo Andres" />
                                                                </a>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="name">
                                                                    <a href="index">Camilo</a>
                                                                </h5>
                                                                <span className="email">johndoe@example.com</span>
                                                            </div>
                                                        </div>
                                                        <div className="account-dropdown__body">
                                                            <div className="account-dropdown__item">
                                                                <a href="index">
                                                                    <i className="zmdi zmdi-account"></i>Account</a>
                                                            </div>
                                                            <div className="account-dropdown__item">
                                                                <a href="index">
                                                                    <i className="zmdi zmdi-settings"></i>Setting</a>
                                                            </div>
                                                            <div className="account-dropdown__item">
                                                                <a href="index">
                                                                    <i className="zmdi zmdi-money-box"></i>Billing</a>
                                                            </div>
                                                        </div>
                                                        <div className="account-dropdown__footer">
                                                            <a href="index">
                                                                <i className="zmdi zmdi-power"></i>Logout</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </header>

                            <div className="main-content">
                                <div className="section__content section__content--p30">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="overview-wrap">
                                                    <h2 className="title-1">Albañiles</h2>
                                                    <button className="au-btn au-btn-icon au-btn--blue">
                                                        <i className="zmdi zmdi-plus"></i>add item</button>
                                                </div>
                                                <div>
                                                    <ListaContainer />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </div>

        );
    }
}
export default Albaniles;