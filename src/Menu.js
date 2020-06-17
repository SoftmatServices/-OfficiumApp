import React from "react";
import Home from "./Home";
import Cuenta from "./Components/Cuenta";
import Actualizacion from "./Components/Actualizacion";
import RegistroContainer from "./Components/CreateAd/RegistroContainer";
import Login from "./Components/Login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Menu(){
	return (
		<Router>

			<div>
				<div>
						<Link to="/Home">
						   Home
						</Link >
						<Link to="/Cuenta">
						   Cuenta
						</Link>
						<Link to="/Actualizacion">
						   Actualizacion
						</Link>
						<Link to="/RegistroContainer" activeClassName="active">
						   Crear anuncio
						</Link>
				</div>
				<Switch>
					<Router path="/Login">
						<Login />
					</Router>
					<Router path="/home">
						<Home />
					</Router>
					<Route path = "/Cuenta">
						<Cuenta />
					</Route>
					<Router path="/Actualizacion">
						<Actualizacion />
					</Router>
					<Router path="/RegistroContainer">
						<RegistroContainer />
					</Router>
				</Switch>
				
			</div>
		</Router>

		/*<div>	
		<Login/>
		</div>*/
		)
}

export default Menu;