import React, { Component } from 'react';
import { getDeptosAll, getMpios } from '../../Services/Get';
import '../../css/Principal/Estilos.css';
import { Redirect } from 'react-router-dom';


class Actualizacion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deptos: [],
      mpios: [],
      name: '',
      email: '',
      surname: '',
      Mpios: '',
      nameError: '',
      emailError: '',
      surnameError: '',
      cityError: '',
      direction: '',
      main: '',
      secondary: '',
      profession: '',
      department: ''
    };
  }


  fillToSubscribeDeptos = (event) => {
    this.setState({
      department: event.target.value
    });
    this.onListMpios(this.department);

    console.log(this.department)
  }

  fillToSubscribeMpios = (event) => {
    this.setState({
      Mpios: event.target.value
    });

  }

  async componentDidMount() {
    this.onListDeptos();
  }

  onListDeptos = async () => {
    const resDeptos = await getDeptosAll()
    this.setState({ deptos: resDeptos.data.deptos });
  }

  onListMpios = async (q) => {
    const resMpios = await getMpios(q)
    this.setState({ mpios: resMpios.data.mpios });
  }

  onCreateUser = async () => {
    let ad = {
      name: this.name.value,
      description: this.refs.description.value,
      serviceCatAdId: this.refs.serviceCatAdId.value,
      serviceUserId: this.refs.serviceUserId.value

    };
    fetch('http://efactura.softmatservices.com/v1/createAd', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: ad
    }).then(r => r.json()).then(res => {
      if (res) {
        this.setState({ message: 'New Employee is Created Successfully' });
      }
    });
  }


  render() {
    return (
      <div className="d-flex justify-content-center h-100">
        <div className="card-styles">
          <div className="">
            <h4>Actualización de Datos</h4>
          </div>
          <div className="card-body">
            <from>
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
                <input type="password" className="form-control" placeholder="Correo"/>
              </div>

              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-calendar-alt"></i></span>
                </div>
                <input type="Date" className="form-control" placeholder="Fecha"/>
              </div>

              <div className="input-group form-group">
                    <div className="input-group-prepend">
                    <span className="input-group-text"><i className="	fas fa-city"></i></span>
                    <select className="form-control"
                    name="dep"
                    onChange={this.fillToSubscribeDeptos}>
                        <option value= '0'>Seleccione un Departamento</option>
                        {
                            this.state.deptos.map(item =>
                            <option value={item.state_id}>
                                {item.state}
                            </option>
                            )
                            }
                    </select>
                    </div>
                </div>

                <div className="input-group form-group">
                    <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-warehouse"></i></span>
                    <select className="form-control"
                    name="mps"
                    onChange={this.fillToSubscribeMpios}>
                    <option>Seleccione un municipio</option>
                    {
                        this.state.mpios.map(item =>
                        <option key={item.city_id} value={item.city_id}>
                            {item.city}
                        </option>
                        )
                    }
                    </select>
                    <div className='invalid-feedback'>{this.state.departmentError}</div>
                    </div>
                </div>

                <div className="input-group form-group">
                    <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-mobile"></i></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Celular"/>
                </div>

                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-user-graduate"></i></span>
                  </div>
                  <input type="text" className="form-control" placeholder="Cual es tu Profesion"/>
                </div>

                <div className="form-group">
                  <input type="submit" value="Actualizar" className="btn float-right login_btn"/>
                </div>
              </from>
          </div>
        </div>
      </div>
    );
  }
}

export default Actualizacion;