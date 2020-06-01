import React from 'react';
import RegistroContainer from './Components/CreateAd/RegistroContainer';
import Registro from './Components/CreateAd/Registro';
//import {getListasByPopular} from './Services/registro'

class App extends React.Component{

  render(){
    return (

      <div>
        <RegistroContainer title="Services" />
      </div>
    );
  }
}

export default App;
