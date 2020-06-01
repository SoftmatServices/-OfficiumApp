import React, {Component} from 'react';
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

  handleNameChange = event => {
    this.setState({ name: event.target.value }, () => {
      this.validateName();
    });
  };

  handleSurnameChange = event => {
    this.setState({ surname: event.target.value }, () => {
      this.validateSurname();
    });
  };
  handleEmailChange = event => {
    this.setState({ email: event.target.value }, () => {
      this.validateEmail();
    });
  };

  handleCityChange = event => {
    this.setState({ city: event.target.value }, () => {
      this.validateCity();
    });
  };

  handleDirectionChange = event => {
    this.setState({ direction: event.target.value }, () => {
      this.validateDirection();
    });
  };

  handleMainChange = event => {
    this.setState({ main: event.target.value }, () => {
      this.validateMain();
    });
  };

  handleSecondaryChange = event => {
    this.setState({ secondary: event.target.value }, () => {
      this.validateSecondary();
    });
  };

  handleProfessionChange = event => {
    this.setState({ profession: event.target.value }, () => {
      this.validateProfession();
    });
  };

  handleDepartmentChange = event => {
    this.setState({ profession: event.target.value }, () => {
      this.validateDepartment();
    });
  };


  validateName = () => {
    const { name } = this.state;
    this.setState({
      nameError:
        name.length > 3 ? null : 'El nombre debe tener más de 3 caracteres.'
    });
  }
  validateSurname = () => {
    const { surname } = this.state;
    this.setState({
      surnameError:
      surname.length > 3 ? null : 'El apellido debe tener más de 3 caracteres.'
    });
  }
  validateEmail = () => {
    const { email } = this.state;
    this.setState({
      emailError:
        email.length > 3 ? null : 'El correo electrónico debe tener más de 3 caracteres'
    });
  }

  validateCity = () => {
    const { city } = this.state;
    this.setState({
      cityError:
        city.length > 3 ? null : 'La Ciudad debe tener más de 3 caracteres'
    });
  }

  validateDepartment = () => {
    const { department } = this.state;
    this.setState({
      departmentError:
        department.length > 3 ? null : 'El Departamento tener más de 3 caracteres'
    });
  }

  validateDirection = () => {
    const { direction } = this.state;
    this.setState({
        directionError:
        direction.length > 3 ? null : 'La dirreción debe tener más de 3 caracteres'
    });
  }

  validateMain = () => {
    const { main } = this.state;
    this.setState({
        mainError:
        main.length > 3 ? null : 'La Telefono debe tener más de 3 caracteres'
    });
  }

  validateSecondary = () => {
    const { secondary } = this.state;
    this.setState({
        secondaryError:
        secondary.length > 3 ? null : 'La Telefono Segundario debe tener más de 3 caracteres'
    });
  }
  validateProfession = () => {
    const { profession } = this.state;
    this.setState({
        professionError:
        profession.length > 3 ? null : 'La Profesion debe tener más de 3 caracteres'
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { name, email, surname, city, direction, main, secondary, profession, department } = this.state;
    alert(`Your state values: \n 
            name: ${name} \n 
            email: ${email} \n
            surname: ${surname} \n
            city: ${city}  \n
            direction: ${direction} \n
            main: ${main} \n
            secondary: ${secondary} \n
            profession: ${profession} \n
            department: ${department}`);
  };
  

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
          <label htmlFor='surname'>Apellidos:</label>
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

          <select  
            name='city' 
            className={`form-control ${this.state.cityError ? 'is-invalid' : ''}`} 
            id='city'  
            value={this.state.city} 
            onChange={this.handleCityChange} 
            onBlur={this.validateCity}
            >
            <option>Ingrese su Ciudad</option>
            <option>Medellín</option>
            <option>Pereira</option>
            <option>Neiva</option>
            <option>Manizales</option>
            <option>Soacha</option>
            <option>Valledupar</option>
            <option>Ibagué</option>
            <option>Santa Marta</option>
            <option>Bello</option>
            <option>Bogotá</option>
            <option>Armenia</option>
            <option>Villavicencio</option>
            <option>Pasto</option>
            <option>Soledad</option>
            <option>Bucaramanga</option>
            <option>Cartagena de Indias</option>
            <option>Montería</option>
            <option>Cúcuta</option>
            <option>Barranquilla</option>
            <option>Cali</option>
          </select >
          <div className='invalid-feedback'>{this.state.cityError}</div>
        </div>

        <div className='form-group'>
          <label htmlFor='department'>Departamento</label>
          <select
            name='department'
            className={`form-control ${this.state.departmentError ? 'is-invalid' : ''}`}
            id='department'
            value={this.state.department}
            onChange={this.handleDepartmentChange}
            onBlur={this.validateDepartment}
          >
            <option>Ingrese su Departamento</option>
            <option>Atlántico</option>
            <option>Bolívar</option>
            <option>Nariño</option>
            <option>Santander</option>
            <option>Valle del Cauca</option>
            <option>Antioquia</option>
            <option>Atlántico</option>
            <option>Caldas</option>
            <option>Cesar</option>
            <option>Córdoba</option>
            <option>Cundinamarca</option>
            <option>Huila</option>
            <option>Magdalena</option>
            <option>Meta</option>
            <option>Norte de Santander</option>
            <option>Quindío</option>
            <option>Risaralda</option>
            <option>Tolima</option>
    
          </select>
          <div className='invalid-feedback'>{this.state.departmentError}</div>
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

export default Cuenta;