import React from "react";
import axios from 'axios'
import Home from "./Home";
import Cuenta from "./Components/Cuenta";
import Actualizacion from "./Components/Actualizacion";
import RegistroContainer from "./Components/CreateAd/RegistroContainer";
import testAxios from "./Components/CreateAd/testAxios";
import Login from "./Components/Login/Login";
import './css/Styles.css';
import MnGen from "./MnGen";
import MnUser from "./MnUser";
import Albaniles from "./Components/Servicios/Albaniles";
import Arquitectos from "./Components/Servicios/Arquitectos";
import Menus from "./Components/Servicios/Menus";
import Recuperacion from "./Components/Recuperacion";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Menu from "./Components/Servicios/Menus";

function App(){
	return (
		<Router>
			<Route exact path="/" component={MnGen}/>
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
			<Route exact path="/Menus" component={Menus}/>
		</Router>
		)
}

export default App;
