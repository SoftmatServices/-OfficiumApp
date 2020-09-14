import React from "react";
import axios from 'axios'
import Home from "./Home";
import Cuenta from "./Components/Login/Cuenta";
import Actualizacion from "./Components/Login/Actualizacion";
import RegistroContainer from "./Components/CreateAd/RegistroContainer";
import testAxios from "./Components/CreateAd/testAxios";
import Login from "./Components/Login/Login";
import './css/Styles.css';
import MnGen from "./MnGen";
import MnUser from "./MnUser";
import Albaniles from "./Components/Servicios/Albaniles";
import Arquitectos from "./Components/Servicios/Arquitectos";
import Menus from "./Components/Servicios/Menus";
import Automoviles from "./Components/Servicios/Automoviles";
import Recuperacion from "./Components/Login/Recuperacion";
import Belleza from "./Components/Servicios/Belleza";
import Carpinteros from "./Components/Servicios/Carpinteros";
import Cerrajeros from "./Components/Servicios/Cerrajeros";
import Entrenadores from "./Components/Servicios/Entrenadores";
import Electricistas from "./Components/Servicios/Electricistas";
import Reparaciones from "./Components/Servicios/Reparaciones";
import Limpieza from "./Components/Servicios/Limpieza";
import Pintores from "./Components/Servicios/Pintores";
import Plomeria from "./Components/Servicios/Plomeria";
import Tecnicos from "./Components/Servicios/Tecnicos";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";


function App(){
	return (
		<Router>
			<Route exact path="/" component={Login}/>
			<Route exact path="/MnGen" component={MnGen}/>
			<Route exact path="/MnUser" component={MnUser}/>
			<Route exact path="/Login" component={Login}/>
			<Route exact path="/Actualizacion" component={Actualizacion}/>
			<Route exact path="/RegistroContainer" component={RegistroContainer}/>
			<Route exact path="/testAxios" component={testAxios}/>
			<Route exact path="/Cuenta" component={Cuenta}/>
			<Route exact path="/Recuperacion" component={Recuperacion}/>
			<Route exact path="/Albaniles" component={Albaniles}/>
			<Route exact path="/Arquitectos" component={Arquitectos}/>
			<Route exact path="/Automoviles" component={Automoviles}/>
			<Route exact path="/Belleza" component={Belleza}/>
			<Route exact path="/Carpinteros" component={Carpinteros}/>
			<Route exact path="/Cerrajeros" component={Cerrajeros}/>
			<Route exact path="/Entrenadores" component={Entrenadores}/>
			<Route exact path="/Electricistas" component={Electricistas}/>
			<Route exact path="/Reparaciones" component={Reparaciones}/>
			<Route exact path="/Limpieza" component={Limpieza}/>
			<Route exact path="/Pintores" component={Pintores}/>
			<Route exact path="/Plomeria" component={Plomeria}/>
			<Route exact path="/Tecnicos" component={Tecnicos}/>
			<Route exact path="/Menus" component={Menus}/>
		</Router>
		)
}

export default App;
