import React, {Component} from 'react';
import Ciudad from './Ciudad';
import Departamento from './Departamento';

class Cuenta extends React.Component {
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
      <form onSubmit={this.handleSubmit}>
          <h4>Actualización de Datos</h4>
          <br />
        <div className='form-group'>
          <label htmlFor='name'>Nombres  :   </label>
          <input type="text"  ref="name"/>
        <div className='invalid-feedback'>{this.state.nameError}</div>
        </div>

        <div className='form-group'>
          <label htmlFor='surname'>Correo:</label>
          <input type="text"  ref="email"/>
          <div className='invalid-feedback'>{this.state.surnameError}</div>
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Fecha de nacimiento: </label>
          <input type="text"  ref="birthdate"/>
          <div className='invalid-feedback'>{this.state.emailError}</div>
        </div>
        
        <h5>¿Dónde Vives?</h5>

        <div className='form-group'>
          <label htmlFor='city'>Ciudad</label>
            <Ciudad />
        </div>

        <div className='form-group'>
          <label htmlFor='department'>Departamento</label>
            <Departamento />
          <div className='invalid-feedback'>{this.state.departmentError}</div>
        </div>

        <div className='form-group'>
          <label htmlFor='direction'>Celular</label>
          <input type="text"  ref="mobilePhone"/>
          <div className='invalid-feedback'>{this.state.directionError}</div>
        </div>

        <h5>Contactar</h5>
        <div className='form-group'>
          <label htmlFor='main'>Telefono Principal</label>
          <input
            name='main'
            className={`form-control ${this.state.mainError ? 'is-invalid' : ''}`}
            id='main'
            placeholder='Ingrese su Telefono'
            value={this.state.main}
            onChange={this.handleMainChange}
            onBlur={this.validateMain}
          />
          <div className='invalid-feedback'>{this.state.mainError}</div>
        </div>

        <div className='form-group'>
          <label htmlFor='secondary'>Telefono Segundario</label>
          <input
            name='secondary'
            className={`form-control ${this.state.secondaryError ? 'is-invalid' : ''}`}
            id='secondary'
            placeholder='Ingrese su Telefono'
            value={this.state.secondary}
            onChange={this.handleSecondaryChange}
            onBlur={this.validateSecondary}
          />
          <div className='invalid-feedback'>{this.state.secondaryError}</div>
        </div>

        <div className='form-group'>
          <label htmlFor='profession'>Cuel es tu Profesion</label>
          <input
            name='profession'
            className={`form-control ${this.state.professionError ? 'is-invalid' : ''}`}
            id='profession'
            placeholder='Ingrese tu Profesion'
            value={this.state.profession}
            onChange={this.handleProfessionChange}
            onBlur={this.validateProfession}
          />
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