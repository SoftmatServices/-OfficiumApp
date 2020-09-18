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
                                                    <a href="index.html">Albañiles</a>
                                                </li>
                                                <li>
                                                    <a href="index2.html">Arquitectos</a>
                                                </li>
                                                <li>
                                                    <a href="index3.html">Automóviles</a>
                                                </li>
                                                <li>
                                                    <a href="index4.html">Belleza</a>
                                                </li>
                                                <li>
                                                    <a href="index.html">Carpinteros</a>
                                                </li>
                                                <li>
                                                    <a href="index2.html">Cerrajeros</a>
                                                </li>
                                                <li>
                                                    <a href="index3.html">Entrenadores</a>
                                                </li>
                                                <li>
                                                    <a href="index4.html">Electricistas</a>
                                                </li>
                                                <li>
                                                    <a href="index.html">Reparaciones</a>
                                                </li>
                                                <li>
                                                    <a href="index2.html">Limpieza</a>
                                                </li>
                                                <li>
                                                    <a href="index3.html">Pintores</a>
                                                </li>
                                                <li>
                                                    <a href="index4.html">Plomeria</a>
                                                </li>
                                                <li>
                                                    <a href="index.html">Tecnicos</a>
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
                                                    <a href="index.html">Albañiles</a>
                                                </li>
                                                <li>
                                                    <a href="index2.html">Arquitectos</a>
                                                </li>
                                                <li>
                                                    <a href="index3.html">Automóviles</a>
                                                </li>
                                                <li>
                                                    <a href="index4.html">Belleza</a>
                                                </li>
                                                <li>
                                                    <a href="index.html">Carpinteros</a>
                                                </li>
                                                <li>
                                                    <a href="index2.html">Cerrajeros</a>
                                                </li>
                                                <li>
                                                    <a href="index3.html">Entrenadores</a>
                                                </li>
                                                <li>
                                                    <a href="index4.html">Electricistas</a>
                                                </li>
                                                <li>
                                                    <a href="index.html">Reparaciones</a>
                                                </li>
                                                <li>
                                                    <a href="index2.html">Limpieza</a>
                                                </li>
                                                <li>
                                                    <a href="index3.html">Pintores</a>
                                                </li>
                                                <li>
                                                    <a href="index4.html">Plomeria</a>
                                                </li>
                                                <li>
                                                    <a href="index.html">Tecnicos</a>
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
                                            <div className="header-button">
                                                <div className="noti-wrap">
                                                    <div className="noti__item js-item-menu">
                                                        <i className="zmdi zmdi-comment-more"></i>
                                                        <span className="quantity">1</span>
                                                        <div className="mess-dropdown js-dropdown">
                                                            <div className="mess__title">
                                                                <p>You have 2 news message</p>
                                                            </div>
                                                            <div className="mess__item">
                                                                <div className="image img-cir img-40">
                                                                    <img src="/img/camilo.jpg" alt="Camilo Andres" />
                                                                </div>
                                                                <div className="content">
                                                                    <h6>Camilo Andres</h6>
                                                                    <p>Have sent a photo</p>
                                                                    <span className="time">3 min ago</span>
                                                                </div>
                                                            </div>
                                                            <div className="mess__item">
                                                                <div className="image img-cir img-40">
                                                                    <img src="/img/camilo.jpg" alt="Diane Myers" />
                                                                </div>
                                                                <div className="content">
                                                                    <h6>Diane Myers</h6>
                                                                    <p>You are now connected on message</p>
                                                                    <span className="time">Yesterday</span>
                                                                </div>
                                                            </div>
                                                            <div className="mess__footer">
                                                                <a href="index">View all messages</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="noti__item js-item-menu">
                                                        <i className="zmdi zmdi-email"></i>
                                                        <span className="quantity">1</span>
                                                        <div className="email-dropdown js-dropdown">
                                                            <div className="email__title">
                                                                <p>You have 3 New Emails</p>
                                                            </div>
                                                            <div className="email__item">
                                                                <div className="image img-cir img-40">
                                                                    <img src="/img/camilo.jpg" alt="Cynthia Harvey" />
                                                                </div>
                                                                <div className="content">
                                                                    <p>Meeting about new dashboard...</p>
                                                                    <span>Cynthia Harvey, 3 min ago</span>
                                                                </div>
                                                            </div>
                                                            <div className="email__item">
                                                                <div className="image img-cir img-40">
                                                                    <img src="/img/camilo.jpg" alt="Cynthia Harvey" />
                                                                </div>
                                                                <div className="content">
                                                                    <p>Meeting about new dashboard...</p>
                                                                    <span>Cynthia Harvey, Yesterday</span>
                                                                </div>
                                                            </div>
                                                            <div className="email__item">
                                                                <div className="image img-cir img-40">
                                                                    <img src="/img/camilo.jpg" alt="Cynthia Harvey" />
                                                                </div>
                                                                <div className="content">
                                                                    <p>Meeting about new dashboard...</p>
                                                                    <span>Cynthia Harvey, April 12,,2018</span>
                                                                </div>
                                                            </div>
                                                            <div className="email__footer">
                                                                <a href="index">See all emails</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="noti__item js-item-menu">
                                                    <i className="zmdi zmdi-notifications"></i>
                                                    <span className="quantity">3</span>
                                                    <div className="notifi-dropdown js-dropdown">
                                                        <div className="notifi__title">
                                                            <p>You have 3 Notifications</p>
                                                        </div>
                                                        <div className="notifi__item">
                                                            <div className="bg-c1 img-cir img-40">
                                                                <i className="zmdi zmdi-email-open"></i>
                                                            </div>
                                                            <div className="content">
                                                                <p>You got a email notification</p>
                                                                <span className="date">April 12, 2018 06:50</span>
                                                            </div>
                                                        </div>
                                                        <div className="notifi__item">
                                                            <div className="bg-c2 img-cir img-40">
                                                                <i className="zmdi zmdi-account-box"></i>
                                                            </div>
                                                            <div className="content">
                                                                <p>Your account has been blocked</p>
                                                                <span className="date">April 12, 2018 06:50</span>
                                                            </div>
                                                        </div>
                                                        <div className="notifi__item">
                                                            <div className="bg-c3 img-cir img-40">
                                                                <i className="zmdi zmdi-file-text"></i>
                                                            </div>
                                                            <div className="content">
                                                                <p>You got a new file</p>
                                                                <span className="date">April 12, 2018 06:50</span>
                                                            </div>
                                                        </div>
                                                        <div className="notifi__footer">
                                                            <a href="index">All notifications</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
                                                            <div class="image">
                                                                <a href="index">
                                                                    <img src="/img/camilo.jpg" alt="Camilo Andres" />
                                                                </a>
                                                            </div>
                                                            <div class="content">
                                                                <h5 class="name">
                                                                    <a href="index">Camilo</a>
                                                                </h5>
                                                                <span class="email">johndoe@example.com</span>
                                                            </div>
                                                        </div>
                                                        <div class="account-dropdown__body">
                                                            <div class="account-dropdown__item">
                                                                <a href="index">
                                                                    <i class="zmdi zmdi-account"></i>Account</a>
                                                            </div>
                                                            <div class="account-dropdown__item">
                                                                <a href="index">
                                                                    <i class="zmdi zmdi-settings"></i>Setting</a>
                                                            </div>
                                                            <div class="account-dropdown__item">
                                                                <a href="index">
                                                                    <i class="zmdi zmdi-money-box"></i>Billing</a>
                                                            </div>
                                                        </div>
                                                        <div class="account-dropdown__footer">
                                                            <a href="index">
                                                                <i class="zmdi zmdi-power"></i>Logout</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </header>

                            <div class="main-content">
                                <div class="section__content section__content--p30">
                                    <div class="container-fluid">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="overview-wrap">
                                                    <h2 class="title-1">Albañiles</h2>
                                                    <button class="au-btn au-btn-icon au-btn--blue">
                                                        <i class="zmdi zmdi-plus"></i>add item</button>
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