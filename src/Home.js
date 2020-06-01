import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ListaContainer from './Components/ListaContainer';
import Lista from './Components/Lista';
import './css/Menu.css';
import {getListasByPopular} from './Services/listas'

class Home extends React.Component{

  render(){
    return (

      <div className="container-fluid bg-light">
        <ListaContainer title="Services" />
      </div>
    );
  }
}

export default Home;