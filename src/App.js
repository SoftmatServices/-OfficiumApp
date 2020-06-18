import React from "react";
import axios from 'axios'
import Home from "./Home";
import Cuenta from "./Components/Cuenta";
import Actualizacion from "./Components/Actualizacion";
import RegistroContainer from "./Components/CreateAd/RegistroContainer";
import testAxios from "./Components/CreateAd/testAxios";
import Login from "./Components/Login/Login";
import './css/Styles.css';
import './css/bootstrap/dist/css/bootstrap.min.css';
import Menu from "./Menu";
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
			<Route exact path="/Menu" component={Menu}/>
			<Route exact path="/Actualizar" component={Menu}/>
			<Route exact path="/Ciudad" component={Menu}/>
			<Route exact path="/Departamento" component={Menu}/>
			<Route exact path="/RegistroContainer" component={Menu}/>
			<Route exact path="/testAxios" component={testAxios}/>
			<Route exact path="/Cuenta" component={Cuenta}/>
		</Router>
		)
}

export default App;
