import React, {Component} from 'react';
import Ciudad from './Ciudad';
import Departamento from './Departamento';


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
      <div className="d-flex justify-content-center h-100">
        <div className="card">
          <div className="card-header">
            <h3>Actualizar tus Datos</h3>
          </div>
          <div className="card-body">
            <form>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-user"></i></span>
                </div>
                <input type="text" className="form-control" placeholder="Nombres"/>
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
                <input type="Date" className="form-control" placeholder="Fecha "/>
              </div>

              <div className="card-header">
                 <h6>¿Dónde Vives?</h6>
              </div>

                <div>
                  <Cuenta />
                </div>
             
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-at"></i></span>
                </div>
                <input  type="text" className="form-control" placeholder="Departamento"/>
              </div>

              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-at"></i></span>
                </div>
                <input  type="mobilePhone" className="form-control" placeholder="Celular"/>
              </div>

              <div className="card-header">
                 <h6>Selecciona tu Profesion</h6>
              </div>

              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-at"></i></span>
                </div>
                <input  type="profession" className="form-control" placeholder="Cual es tu Profesion"/>
              </div>
           
              <div className="form-group">
                <input type="submit" value="Actualizar" className="btn float-right login_btn"/>
              </div>
            </form>
          </div>
          <div className="card-footer">
            
          </div>
        </div>
		  </div>
      
    );
  }
}

export default Cuenta;