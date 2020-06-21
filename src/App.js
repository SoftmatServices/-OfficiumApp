import React from "react";
import axios from 'axios'
import Home from "./Home";
import Cuenta from "./Components/Cuenta";
import Actualizacion from "./Components/Actualizacion";
import Ciudad from "./Components/Ciudad";
import Departamento from "./Components/Departamento";
import RegistroContainer from "./Components/CreateAd/RegistroContainer";
import testAxios from "./Components/CreateAd/testAxios";
import Login from "./Components/Login/Login";
import './css/Styles.css';
import MnGen from "./MnGen";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App(){
	return (
		<Router>
			<Route exact path="/" component={MnGen}/>
			<Route exact path="/Login" component={Login}/>
			<Route exact path="/Actualizacion" component={Actualizacion}/>
			<Route exact path="/Ciudad" component={Ciudad}/>
			<Route exact path="/Departamento" component={Departamento}/>
			<Route exact path="/RegistroContainer" component={RegistroContainer}/>
			<Route exact path="/testAxios" component={testAxios}/>
			<Route exact path="/Cuenta" component={Cuenta}/>
		</Router>
		)
}

export default App;
