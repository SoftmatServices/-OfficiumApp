import React from 'react';
import '../../css/Letter.css';
import '../../css/Estilos.css';
import Servicio from './Servicio';
class Menus extends React.Component {
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
                                            <img src="/img/Logo.ico" alt="Oficium" />
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
                                            <a className="js-arrow" href="index.html">
                                                <i className="fas fa-tachometer-alt"></i>Datos</a>
                                            <ul className="navbar-mobile-sub__list list-unstyled js-sub-list">
                                                <li>
                                                    <a href="index.html">Actualización</a>
                                                </li>
                                                <li>
                                                    <a href="index2.html">Crear Anuncios</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-sub">
                                            <a className="js-arrow" href="index.html">
                                                <i className="fas fa-copy"></i>Registro</a>
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
                                    </ul>
                                </div>
                            </nav>
                        </header>
                        <aside class="menu-sidebar d-none d-lg-block">
                            <div class="logo">
                                <a href="index.html">
                                    <img src="/img/Logo.ico" alt="Oficium" />
                                </a>
                            </div>
                            <div class="menu-sidebar__content js-scrollbar1">
                                <nav class="navbar-sidebar">
                                    <ul class="list-unstyled navbar__list">
                                        <li class="active has-sub">
                                            <a class="js-arrow" href="index.html">
                                                <i class="fas fa-tachometer-alt"></i>Datos</a>
                                            <ul class="list-unstyled navbar__sub-list js-sub-list">
                                                <li>
                                                    <a href="index.html">Actualización</a>
                                                </li>
                                                <li>
                                                    <a href="index2.html">Crear Anuncios</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="has-sub">
                                            <a class="js-arrow" href="index.html">
                                                <i class="fas fa-copy"></i>Registro</a>
                                            <ul class="list-unstyled navbar__sub-list js-sub-list">
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
                                                <input class="au-input au-input--xl" type="text" name="search" placeholder="Search for datas &amp; reports..." />
                                                <button class="au-btn--submit" type="submit">
                                                    <i class="zmdi zmdi-search"></i>
                                                </button>
                                            </form>
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
                                                    <h2 class="title-1">Servicios</h2>

                                                    <button class="au-btn au-btn-icon au-btn--blue">
                                                        <i class="zmdi zmdi-plus"></i>Creación Servicios
                                                    </button>
                                                </div>
                                                <div>
                                                    <Servicio />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                        <script src="vendor/jquery-3.2.1.min.js"></script>
                        <script src="vendor/bootstrap-4.1/popper.min.js"></script>
                        <script src="vendor/bootstrap-4.1/bootstrap.min.js"></script>
                        <script src="vendor/slick/slick.min.js">
                        </script>
                        <script src="vendor/wow/wow.min.js"></script>
                        <script src="vendor/animsition/animsition.min.js"></script>
                        <script src="vendor/bootstrap-progressbar/bootstrap-progressbar.min.js">
                        </script>
                        <script src="vendor/counter-up/jquery.waypoints.min.js"></script>
                        <script src="vendor/counter-up/jquery.counterup.min.js">
                        </script>
                        <script src="vendor/circle-progress/circle-progress.min.js"></script>
                        <script src="vendor/perfect-scrollbar/perfect-scrollbar.js"></script>
                        <script src="vendor/chartjs/Chart.bundle.min.js"></script>
                        <script src="vendor/select2/select2.min.js"></script>
                        <script src="js/main.js"></script>
                </body>
            </div>
        );
    }
}

export default Menus;