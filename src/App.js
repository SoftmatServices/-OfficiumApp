import React from "react";
import Home from "./Home";
import Cuenta from "./Components/Cuenta";
import Actualizacion from "./Components/Actualizacion";
import RegistroContainer from "./Components/CreateAd/RegistroContainer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App(){
	return (
		<Router>
			<div className="container-fluid bg-light">
				<div className="btn-group mt-3">
						<Link to="/Home" className="btn btn.dark">
						   Home
						</Link >
						<Link to="/Cuenta" className="btn btn.dark">
						   Cuenta
						</Link>
						<Link to="/Actualizacion" className="btn btn.dark">
						   Actualizacion
						</Link>
						<Link to="/RegistroContainer" className="btn btn.dark" activeClassName="active">
						   Crear anuncio
						</Link>
				</div>
				<Switch>
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
		)
}

export default App;
