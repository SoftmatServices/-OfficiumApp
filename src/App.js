import React from 'react';
import './css/App.css';
import ListaContainer from './Components/ListaContainer';
import Lista from './Components/Lista';
import './css/Menu.css';
import {getListasByPopular} from './Services/listas'

class App extends React.Component{

  render(){
    return (

      <div className="app">
        <ListaContainer title="Services" />
      </div>
    );
  }
}

export default App;
