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
                <body class="animsition">
                    <div class="page-wrapper">
                        <header class="header-mobile d-block d-lg-none">
                            <div class="header-mobile__bar">
                                <div class="container-fluid">
                                    <div class="header-mobile-inner">
                                        <a class="logo" href="index.html">
                                            <img src="/img/Logo.ico" alt="Officium" />
                                        </a>
                                        <button class="hamburger hamburger--slider" type="button">
                                            <span class="hamburger-box">
                                                <span class="hamburger-inner"></span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <nav class="navbar-mobile">
                                <div class="container-fluid">
                                    <ul class="navbar-mobile__list list-unstyled">
                                        <li class="has-sub">
                                            <a class="js-arrow" href="index">
                                                <i class="fas fa-tachometer-alt"></i>Categorias
                                            </a>
                                            <ul class="navbar-mobile-sub__list list-unstyled js-sub-list">
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
                                            <li class="has-sub">
                                                <a class="js-arrow" href="index">
                                                    <i class="fas fa-copy"></i>Registro
                                                </a>
                                                <ul class="navbar-mobile-sub__list list-unstyled js-sub-list">
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
                                            <li class="has-sub">
                                                <a class="js-arrow" href="index">
                                                    <i class="fas fa-copy"></i>Anuncio
                                                </a>
                                                <ul class="navbar-mobile-sub__list list-unstyled js-sub-list">
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
                        <aside class="menu-sidebar d-none d-lg-block">
                            <div class="logo">
                                <a href="index">
                                    <img src="/img/Logo.ico" alt="Officium" />
                                </a>
                            </div>
                            <div class="menu-sidebar__content js-scrollbar1">
                                <nav class="navbar-sidebar">
                                    <ul class="list-unstyled navbar__list">
                                        <li class="active has-sub">
                                            <a class="js-arrow" href="index">
                                                <i class="fas fa-tachometer-alt"></i>Categorias
                                            </a>
                                            <ul class="list-unstyled navbar__sub-list js-sub-list">
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
                                            <li class="has-sub">
                                                <a class="js-arrow" href="index">
                                                    <i class="fas fa-copy"></i>Registro
                                                </a>
                                                <ul class="navbar-mobile-sub__list list-unstyled js-sub-list">
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
                                            <li class="has-sub">
                                                <a class="js-arrow" href="index">
                                                    <i class="fas fa-copy"></i>Anuncio
                                                </a>
                                                <ul class="navbar-mobile-sub__list list-unstyled js-sub-list">
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
                        <div class="page-container">
                            <header class="header-desktop">
                                <div class="section__content section__content--p30">
                                    <div class="container-fluid">
                                        <div class="header-wrap">
                                            <form class="form-header" action="" method="POST">
                                                <input class="au-input au-input--xl" type="text" name="search"
                                                    placeholder="Search for datas &amp; reports..." />
                                                <button class="au-btn--submit" type="submit">
                                                    <i class="zmdi zmdi-search"></i>
                                                </button>
                                            </form>
                                            <div class="header-button">
                                                <div class="noti-wrap">
                                                    <div class="noti__item js-item-menu">
                                                        <i class="zmdi zmdi-comment-more"></i>
                                                        <span class="quantity">1</span>
                                                        <div class="mess-dropdown js-dropdown">
                                                            <div class="mess__title">
                                                                <p>You have 2 news message</p>
                                                            </div>
                                                            <div class="mess__item">
                                                                <div class="image img-cir img-40">
                                                                    <img src="/img/camilo.jpg" alt="Camilo Andres" />
                                                                </div>
                                                                <div class="content">
                                                                    <h6>Camilo Andres</h6>
                                                                    <p>Have sent a photo</p>
                                                                    <span class="time">3 min ago</span>
                                                                </div>
                                                            </div>
                                                            <div class="mess__item">
                                                                <div class="image img-cir img-40">
                                                                    <img src="/img/camilo.jpg" alt="Diane Myers" />
                                                                </div>
                                                                <div class="content">
                                                                    <h6>Diane Myers</h6>
                                                                    <p>You are now connected on message</p>
                                                                    <span class="time">Yesterday</span>
                                                                </div>
                                                            </div>
                                                            <div class="mess__footer">
                                                                <a href="index">View all messages</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="noti__item js-item-menu">
                                                        <i class="zmdi zmdi-email"></i>
                                                        <span class="quantity">1</span>
                                                        <div class="email-dropdown js-dropdown">
                                                            <div class="email__title">
                                                                <p>You have 3 New Emails</p>
                                                            </div>
                                                            <div class="email__item">
                                                                <div class="image img-cir img-40">
                                                                    <img src="/img/camilo.jpg" alt="Cynthia Harvey" />
                                                                </div>
                                                                <div class="content">
                                                                    <p>Meeting about new dashboard...</p>
                                                                    <span>Cynthia Harvey, 3 min ago</span>
                                                                </div>
                                                            </div>
                                                            <div class="email__item">
                                                                <div class="image img-cir img-40">
                                                                    <img src="/img/camilo.jpg" alt="Cynthia Harvey" />
                                                                </div>
                                                                <div class="content">
                                                                    <p>Meeting about new dashboard...</p>
                                                                    <span>Cynthia Harvey, Yesterday</span>
                                                                </div>
                                                            </div>
                                                            <div class="email__item">
                                                                <div class="image img-cir img-40">
                                                                    <img src="/img/camilo.jpg" alt="Cynthia Harvey" />
                                                                </div>
                                                                <div class="content">
                                                                    <p>Meeting about new dashboard...</p>
                                                                    <span>Cynthia Harvey, April 12,,2018</span>
                                                                </div>
                                                            </div>
                                                            <div class="email__footer">
                                                                <a href="index">See all emails</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="noti__item js-item-menu">
                                                    <i class="zmdi zmdi-notifications"></i>
                                                    <span class="quantity">3</span>
                                                    <div class="notifi-dropdown js-dropdown">
                                                        <div class="notifi__title">
                                                            <p>You have 3 Notifications</p>
                                                        </div>
                                                        <div class="notifi__item">
                                                            <div class="bg-c1 img-cir img-40">
                                                                <i class="zmdi zmdi-email-open"></i>
                                                            </div>
                                                            <div class="content">
                                                                <p>You got a email notification</p>
                                                                <span class="date">April 12, 2018 06:50</span>
                                                            </div>
                                                        </div>
                                                        <div class="notifi__item">
                                                            <div class="bg-c2 img-cir img-40">
                                                                <i class="zmdi zmdi-account-box"></i>
                                                            </div>
                                                            <div class="content">
                                                                <p>Your account has been blocked</p>
                                                                <span class="date">April 12, 2018 06:50</span>
                                                            </div>
                                                        </div>
                                                        <div class="notifi__item">
                                                            <div class="bg-c3 img-cir img-40">
                                                                <i class="zmdi zmdi-file-text"></i>
                                                            </div>
                                                            <div class="content">
                                                                <p>You got a new file</p>
                                                                <span class="date">April 12, 2018 06:50</span>
                                                            </div>
                                                        </div>
                                                        <div class="notifi__footer">
                                                            <a href="index">All notifications</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="account-wrap">
                                                <div class="account-item clearfix js-item-menu">
                                                    <div class="image">
                                                        <img src="/img/camilo.jpg" alt="Camilo Andres" />
                                                    </div>
                                                    <div class="content">
                                                        <a class="js-acc-btn" href="index">Camilo</a>
                                                    </div>
                                                    <div class="account-dropdown js-dropdown">
                                                        <div class="info clearfix">
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
                                                    <h2 class="title-1">Arquitectos</h2>
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
export default Automoviles;