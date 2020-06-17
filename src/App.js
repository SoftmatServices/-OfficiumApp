import React from "react";
import Home from "./Home";
import Cuenta from "./Components/Cuenta";
import Actualizacion from "./Components/Actualizacion";
import RegistroContainer from "./Components/CreateAd/RegistroContainer";
import Login from "./Components/Login/Login";
import Menu from "./Menu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App(){
	return (
		
				//<div>
				//	<Menu/>
				//</div>
				

		<div>
		<Login/>
		</div>
		)
}

export default App;
