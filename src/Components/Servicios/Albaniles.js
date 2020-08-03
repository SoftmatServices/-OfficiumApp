import React, { Component } from 'react';
import '../../css/Latera.css';
class Albaniles extends Component {
    render() {
        return (
            <div>
                <div class="wrapper">
                    <nav id="sidebar">
                        <div class="sidebar-header">
                            <h3>Albañiles</h3>
                        </div>
                        <ul class="list-unstyled components">
                            <p>Dummy Heading</p>
                            <li class="active">
                                <a href="#menu">Animación</a>
                            </li>
                            <li>
                                <a href="#menu">Ilustración</a>
                            </li>
                            <li>
                                <a href="#menu">Blog</a>
                            </li>
                            <li>
                                <a href="#menu">Acerca</a>
                            </li>
                            <li>
                                <a href="#menu">Contacto</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}
export default Albaniles;