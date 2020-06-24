import React, {Component} from 'react';

class Cuenta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      surname: '',
      nameError: '',
      emailError: '',
      surnameError: '',
      password: "",
      mesage: ""
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
      <form onClick ={this.onCreateAd} className='mi-clase'>
        <h4>Crear tu Cuenta</h4>
        <br />
        <div style={this.styles} className="input-group form-group">
          <label htmlFor='name' className="col-lg-3 col-form-label form-control-label">Nombres :</label>
          <input type="text" className="form-control" placeholder="Nombre de usuario"/>
        </div>
        <br />
        <div className='form-group row'>
          <label htmlFor='email' className='col-lg-3 col-form-label form-control-label'>Correo : &nbsp;</label>
          <input type="email" name="email" className="form-control"></input>
        </div>
        <br />
        <div className='form-group row'>
          <label htmlFor='password' className='col-lg-3 col-form-label form-control-label'>Contraseña :</label>
          <input type="text" name="password" class="form-control"></input>
        </div>
        
        <div class="form-group row">
          <div class="col-lg-12 text-center">
            <input type="reset" class="btn btn-secondary" value="Cancel"/>
            <input type="button" class="btn btn-primary"  value="Guardar"/>
          </div>
	      </div>

        <div className="input-group form-group">
							<div className="input-group-prepend">
								<span className="input-group-text"><i className="fas fa-user"></i></span>
							</div>
							<input type="text" className="form-control" placeholder="Nombre de usuario"/>
						</div>
      </form>
    );
  }
}

export default Cuenta;