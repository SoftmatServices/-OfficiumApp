import React, {Component} from 'react';
class Cuenta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      surname: '',
      nameError: '',
      emailError: '',
      surnameError: '',
      password: ""
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

  handlePasswordChange = event => {
    this.setState({ password: event.target.value }, () => {
      this.validatePassword();
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

  validatePassword = () => {
    const { password } = this.state;
    this.setState({
      passwordError:
      password.length > 3 ? null : 'El correo electrónico debe tener más de 3 caracteres'
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { name, email, surname, password} = this.state;
    alert(`Your state values: \n 
            name: ${name} \n 
            email: ${email} \n
            surname: ${surname} \n
            password: ${password}`);
  };
  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Crear tu Cuenta</h4>
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

        <div className='form-group'>
          <label htmlFor='password'>Contraseña</label>
          <input
            name='password'
            className={`form-control ${this.state.emailError ? 'is-invalid' : ''}`}
            id='password'
            placeholder='Ingrese su Contraseña'
            value={this.state.password}
            onChange={this.handlePasswordChange}
            onBlur={this.validatePassword}
          />
          <div className='invalid-feedback'>{this.state.passwordError}</div>
        </div>
        <button type='submit' className='btn btn-success btn-block'>
          Crear
        </button>
      </form>
    );
  }
}

export default Cuenta;