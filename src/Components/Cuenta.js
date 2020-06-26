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
      <div className="d-flex justify-content-center h-100">
        <div className="card">
          <div className="card-header">
            <h3>Regitra tus Datos</h3>
          </div>
          <div className="card-body">
            <form>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-user"></i></span>
                </div>
                <input type="text" className="form-control" placeholder="Nombres"/>
              </div>	

              <div>
                  <Cuenta />
              </div>

              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="far fa-user"></i></span>
                </div>
                <input type="text" className="form-control" placeholder="Apellidos"/>
              </div>
              

              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-at"></i></span>
                </div>
                <input type="password" className="form-control" placeholder="Correo"/>
              </div>

              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-key"></i></span>
                </div>
                <input type="password" className="form-control" placeholder="Contraseña"/>
              </div>
            
              <div className="form-group">
                <input type="submit" value="Registrarme" className="btn float-right login_btn"/>
              </div>
            </form>
          </div>
        </div>
		  </div>
    );
  }
}

export default Cuenta;