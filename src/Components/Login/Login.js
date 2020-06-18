import React from 'react';
import PropTypes from 'prop-types';
import Cuenta from "../Cuenta";
import './Styles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Login extends React.Component {

render(){
    return(
		<div className="d-flex justify-content-center h-100">
			<div className="card">
				<div className="card-header">
					<h3>Iniciar sesión</h3>
					<div className="d-flex justify-content-end social_icon">
						<span><i className="fab fa-facebook-square"></i></span>
						<span><i className="fab fa-instagram-square"></i></span>
						<span><i className="fab fa-twitter-square"></i></span>
					</div>
				</div>
				<div className="card-body">
					<form>
						<div className="input-group form-group">
							<div className="input-group-prepend">
								<span className="input-group-text"><i className="fas fa-user"></i></span>
							</div>
							<input type="text" className="form-control" placeholder="Nombre de usuario"/>
						</div>	
						
						<div className="input-group form-group">
							<div className="input-group-prepend">
								<span className="input-group-text"><i className="fas fa-key"></i></span>
							</div>
							<input type="password" className="form-control" placeholder="Contraseña"/>
						</div>
						<div className="row align-items-center remember">
							<input type="checkbox"/>Recordarme
						</div>
						<div className="form-group">
							<input type="submit" value="Ingresar" className="btn float-right login_btn"/>
						</div>
					</form>
				</div>
				<div className="card-footer">
					<div className="d-flex justify-content-center links">
						No tienes una cuenta?<Link to="/Cuenta">Registrate</Link>					
					</div>
					<div className="d-flex justify-content-center">
						<a href=" ">Olvidaste tu contraseña?</a>
					</div>
				</div>
			</div>
		</div>
    )
  }
}

export default Login;