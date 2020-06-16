import React, { Component } from 'react';

import {FacebookLoginButton} from 'react-social-login-buttons';
class Logo extends Component{
    render(){
        return(
            <from>
                <h1>
                    <span className="font-weight-bold">Icochua</span>.com
                </h1>
                <h2 className = "text-center">Bienvenidos</h2>
                <FormGroup>
                    <label>E-mail</label>
                    <input type = "email" placeholder ="Email" />
                </FormGroup>
                <FormGroup>
                    <label>Contraseña</label>
                    <input type = "password" placeholder ="Contrasena" />
                </FormGroup>
                <button className = "btn-lg btn-dark btn-block">
                    Iniciar Sesión
                </button>
                <div className = "text-center pt-3">
                    O continúa con tu cuenta social
                </div>
                <FacebookLoginButton className = "mt-3 mb-3"/>
                <div className = "text-center">
                    <a href = "./sign-up">Regístrate</a>
                    <span className = "p-2">|</span>
                    <a href = "/forgat-password">Se te olvidó tu contraseña</a>
                </div>
            </from>
            )
        }
}

export default Logo;