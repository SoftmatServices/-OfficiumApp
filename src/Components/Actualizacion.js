import React, {Component} from 'react';
import Ciudad from './Ciudad';
import Departamento from './Departamento';
import './Actualizacion.css';

class Cuenta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      surname: '',
      city: '',
      nameError: '',
      emailError: '',
      surnameError: '',
      cityError:'',
      direction: '',
      main: '',
      secondary: '',
      profession: '',
      department: ''
    };
  }

onCreateUser= async ()=>{
      let ad={
            name:this.name.value,
            description:this.refs.description.value,
            serviceCatAdId:this.refs.serviceCatAdId.value,
            serviceUserId:this.refs.serviceUserId.value

          };
    fetch('http://efactura.softmatservices.com/v1/createAd',{
        method: 'POST',
        headers:{'Content-type':'application/json'},
        body: ad
      }).then(r=>r.json()).then(res=>{
        if(res){
          this.setState({message:'New Employee is Created Successfully'});
        }
      });
    }
  

  render() {
    return (
      <form onClick={this.onCreateAd}>
          <h4>Actualización de Datos</h4>
          <br />
          <div >
            <label htmlFor='name'>Nombres :</label>
            <input type="text" name="name"></input>
        </div>
        <br />
        <div>
          <label htmlFor='email'>Correo : &nbsp;</label>
          <input type="email" name="email"></input>
        </div>
        <br />

        <div>
          <label htmlFor='email'>Fecha de nacimiento: </label>
          <input type="Date"  ref="birthdate"/>
          
        </div>
        
        <h5>¿Dónde Vives?</h5>

        <div>
          <label htmlFor='city'>Ciudad</label>
            <Ciudad />
        </div>

        <div>
          <label htmlFor='department'>Departamento</label>
            <Departamento />
          <div className='invalid-feedback'>{this.state.departmentError}</div>
        </div>
        <br />
        <div>
          <label htmlFor='mobilePhone'>Celular</label>
          <input name="mobilePhone" type="text"/>
          <div className='invalid-feedback'>{this.state.directionError}</div>
        </div>

        <h5>Contactar</h5>
        <div>
          <label htmlFor='main'>Telefono Principal</label>
          <input  name='main'  type="text"/>
          <div className='invalid-feedback'>{this.state.mainError}</div>
        </div>

        <div className='form-group'>
          <label htmlFor='secondary'>Telefono Segundario</label>
          <input name='secondary' type="text" />
          <div className='invalid-feedback'>{this.state.secondaryError}</div>
        </div>

        <div className='form-group'>
          <label htmlFor='profession'>Cuel es tu Profesion</label>
          <input  name='profession' type="text"/>
          <div className='invalid-feedback'>{this.state.professionError}</div>
        </div>

        <button onClick = {this.onCreateAd}>
          <p>{this.state.message}</p>
          Actualizar
        </button>
      </form>
    );
  }
}

export default Cuenta;