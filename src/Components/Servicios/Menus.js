import React from 'react';
import '../../css/Principal/Estilos.css';
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
                                            <img src="/Img/Logo.ico" alt="Oficium"></img>
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
                                                <i className="fas fa-tachometer-alt"></i>Datos
                                            </a>
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
                                    </ul>
                                </div>
                            </nav>
                        </header>
                        <aside className="menu-sidebar d-none d-lg-block">
                            <div className="logo">
                                <a href="index.html">
                                    <img src="/Img/Logo.ico" alt="Oficium" />
                                </a>
                            </div>
                            <div className="menu-sidebar__content js-scrollbar1">
                                <nav className="navbar-sidebar">
                                    <ul className="list-unstyled navbar__list">
                                        <li className="active has-sub">
                                            <a className="js-arrow" href="index.html">
                                                <i className="fas fa-tachometer-alt"></i>Datos
                                        </a>
                                            <ul className="list-unstyled navbar__sub-list js-sub-list">
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
                                                <i className="fas fa-copy"></i>Registro
                                        </a>
                                        </li>
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
                                                <input className="au-input au-input--xl" type="text" name="search" placeholder="Search for datas &amp; reports...">

                                                </input>
                                                <button className="au-btn--submit" type="submit">
                                                    <i className="zmdi zmdi-search"></i>
                                                </button>
                                            </form>
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
                                                    <h2 className="title-1">Servicios</h2>
                                                    <button className="au-btn au-btn-icon au-btn--blue">
                                                        <i className="zmdi zmdi-plus"></i>Creación Servicios
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
                    <script src="/src/Components/vendor/jquery-3.2.1.min.js"></script>
                    <script src="/src/Components/vendor/bootstrap-4.1/popper.min.js"></script>
                    <script src="/src/Components/vendor/bootstrap-4.1/bootstrap.min.js"></script>
                    <script src="/src/Components/vendor/slick/slick.min.js"></script>
                    <script src="/src/Components/vendor/wow/wow.min.js"></script>
                    <script src="/src/Components/vendor/animsition/animsition.min.js"></script>
                    <script src="/src/Components/vendor/bootstrap-progressbar/bootstrap-progressbar.min.js"></script>
                    <script src="/src/Components/vendor/counter-up/jquery.waypoints.min.js"></script>
                    <script src="/src/Components/vendor/counter-up/jquery.counterup.min.js"></script>
                    <script src="/src/Components/vendor/circle-progress/circle-progress.min.js"></script>
                    <script src="/src/Components/vendor/perfect-scrollbar/perfect-scrollbar.js"></script>
                    <script src="/src/Components/vendor/chartjs/Chart.bundle.min.js"></script>
                    <script src="/src/Components/vendor/select2/select2.min.js"></script>
                    <script src="/src/Components/js/main.js"></script>
                </body>
            </div>
        );
    };
}
export default Menus;