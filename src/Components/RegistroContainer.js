import React from 'react'
import Lista from './Lista'
import '../css/List.css';
import '../css/Item.css';
import Search from './Search';
import {getListasByPopular, getListasBySearch} from '../Services/listas'

class ListaContainer extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            Registro: [],
            isFetch: true,
        }
    }

    async componentDidMount () {
        const responseJson = await getListasByPopular()
        this.setState({ listas: responseJson.ads, isFetch: false})
    }

    handleSearch = async (search) => {
        const responseJson = await getListasBySearch(search)
        this.setState({ listas: responseJson.ads})
    }

    render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <h4>Actualización de Datos</h4>
          <br />
        <div className='form-group'>
          <label htmlFor='name'>Nombres</label>
          <input
            name='name'
            className={`form-control ${this.state.nameError ? 'is-invalid' : ''}`}
            id='name'
            placeholder='Ingreses su nombre'
            value={this.state.name}
            onChange={this.handleNameChange}
            onBlur={this.validateName}
          />
          <div className='invalid-feedback'>{this.state.nameError}</div>
        </div>

        <div className='form-group'>
          <label htmlFor='surname'>Apelidos:</label>
          <input
            name='surname'
            className={`form-control ${this.state.surnameError ? 'is-invalid' : ''}`}
            id='surname'
            placeholder='Ingrese sus Apellidos'
            value={this.state.surname}
            onChange={this.handleSurnameChange}
            onBlur={this.validateSurname}
          />
          <div className='invalid-feedback'>{this.state.surnameError}</div>
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Correo</label>
          <input
            name='email'
            className={`form-control ${this.state.emailError ? 'is-invalid' : ''}`}
            id='email'
            placeholder='Ingrese su Correo'
            value={this.state.email}
            onChange={this.handleEmailChange}
            onBlur={this.validateEmail}
          />
          <div className='invalid-feedback'>{this.state.emailError}</div>
        </div>
        
        <h5>¿Dónde Vives?</h5>

        <div className='form-group'>
          <label htmlFor='city'>Ciudad</label>
          <input
            name='city'
            className={`form-control ${this.state.cityError ? 'is-invalid' : ''}`}
            id='email'
            placeholder='Ingrese su Ciudad'
            value={this.state.city}
            onChange={this.handleCityChange}
            onBlur={this.validateCity}
          />
          <div className='invalid-feedback'>{this.state.cityError}</div>
        </div>

        <div className='form-group'>
          <label htmlFor='direction'>Dirreción</label>
          <input
            name='direction'
            className={`form-control ${this.state.directionError ? 'is-invalid' : ''}`}
            id='direction'
            placeholder='Ingrese su Dirreción'
            value={this.state.direction}
            onChange={this.handleDirectionChange}
            onBlur={this.validateDirection}
          />
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

        <button type='submit' className='btn btn-success btn-block'>
          Actualizar
        </button>
      </form>
    );
  }
}

export default ListaContainer