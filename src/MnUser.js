import React from "react";
import Home from "./Home";
import Cuenta from "./Components/Cuenta";
import Login from "./Components/Login/Login";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";


function MnGen() {
	return (
		<Router>
			<div>
				<div>
					<Link to="/Home">Home</Link >
					<Link to="/Cuenta">Cuenta</Link>
					<Link to="/Login">Iniciar sesion</Link>
				</div>
				<Switch>
					<Route exact path="/" component={Home} />
					<Router path="/Home"><Home /></Router>
					<Router path="/Cuenta"><Cuenta /></Router>
					<Router path="/Login"><Login /></Router>
				</Switch>
			</div>
		</Router>
	)
}

export default MnGen;