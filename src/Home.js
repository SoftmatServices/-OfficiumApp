import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ListaContainer from './Components/ListaHome/ListaContainer';
import Lista from './Components/ListaHome/Lista';
import './css/Menu.css';

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