import React, { Component } from 'react';
import { getDeptosAll, getMpios } from '../Services/Get'
import { Redirect } from 'react-router-dom';


class Cuenta extends Component {
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
        <div className="card">
          <div className="card-header">
            <h4>Actualización de Datos</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Cuenta;