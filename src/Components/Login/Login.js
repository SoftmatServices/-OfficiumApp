import React from 'react'
import PropTypes from 'prop-types'
import Cuenta from "../Cuenta";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Login extends React.Component {

render(){
    return(
		<div class="d-flex justify-content-center h-100">
			<div class="card">
				<div class="card-header">
					<h3>Iniciar sesión</h3>
					<div class="d-flex justify-content-end social_icon">
						<span><i class="fab fa-facebook-square"></i></span>
						<span><i class="fab fa-instagram-square"></i></span>
						<span><i class="fab fa-twitter-square"></i></span>
					</div>
				</div>
				<div class="card-body">
					<form>
						<div class="input-group form-group">
							<div class="input-group-prepend">
								<span class="input-group-text"><i class="fas fa-user"></i></span>
							</div>
							<input type="text" class="form-control" placeholder="Nombre de usuario"/>
						</div>	s
						
						<div class="input-group form-group">
							<div class="input-group-prepend">
								<span class="input-group-text"><i class="fas fa-key"></i></span>
							</div>
							<input type="password" class="form-control" placeholder="Contraseña"/>
						</div>
						<div class="row align-items-center remember">
							<input type="checkbox"/>Recordarme
						</div>
						<div class="form-group">
							<input type="submit" value="Ingresar" class="btn float-right login_btn"/>
						</div>
					</form>
				</div>
				<div class="card-footer">
					<div class="d-flex justify-content-center links">
						No tienes una cuenta?<a>		<Router>

			
				<div>
						
						<Link to="/Cuenta">
						   Registrate
						</Link>
						
				</div>
				<Switch>
					<Route path = "/Cuenta">
						<Cuenta />
					</Route>
				</Switch>
				
			
		</Router>
		</a>
					</div>
					<div class="d-flex justify-content-center">
						<a href="#">Olvidaste tu contraseña?</a>
					</div>
				</div>
			</div>
		</div>
    )
  }
}

export default Login;