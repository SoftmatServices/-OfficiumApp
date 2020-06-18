import React from "react";
import Home from "./Home";
import Cuenta from "./Components/Cuenta";
import Actualizacion from "./Components/Actualizacion";
import RegistroContainer from "./Components/CreateAd/RegistroContainer";
import testAxios from "./Components/CreateAd/testAxios";
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
					<Link to="/Home">Home</Link >
					<Link to="/Cuenta">Cuenta</Link>
					<Link to="/Actualizacion">Actualizacion</Link>
					<Link to="/RegistroContainer">Crear anuncio</Link>
					<Link to="/testAxios">Axios</Link>
				</div>
				<Switch>
					<Router path="/Menu"><Home /></Router>
					<Router path="/Home"><Home /></Router>
					<Router path="/Cuenta"><Cuenta /></Router>
					<Router path="/Actualizacion"><Actualizacion /></Router>
					<Router path="/RegistroContainer"><RegistroContainer /></Router>
					<Router path="/testAxios"><testAxios /></Router>
				</Switch>
				<Router path="/Actualizacion" component={Menu}/>
			</div>
		</Router>
	)
}

export default Menu;