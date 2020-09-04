import React, {Component} from 'react';
import axios from 'axios';


class Cuenta extends Component {
    constructor(props) {
        super(props)

        this.state = {
          name: " ",
          email: " ",
          birthdate: " ",
          mobilePhone: " ",
          state: " ",
          city: " ",
          password: " ",
          isFetch: true
        }
    }

    fillToSubscribeName = (event) => {
        this.setState({
            name: event.target.value
        });
    }
    fillToSubscribeEmail = (event) => {
        this.setState({
            email: event.target.value
        });
    }
    fillToSubscribeBirthdate = (event) => {
        this.setState({
            birthdate: event.target.value
        });
    }
    fillToSubscribeMobilePhone = (event) => {
        this.setState({
            mobilePhone: event.target.value
        });
    }
    fillToSubscribeState = (event) => {
      this.setState({
          state: event.target.value
      });
  }

  fillToSubscribeCity= (event) => {
    this.setState({
      city: event.target.value
    });
  }

  fillToSubscribePassword= (event) => {
    this.setState({
      password: event.target.value
    });
  }
    //probar axios en metodos POST error CORS
    onSubmit = async e => {
        e.preventDefault();
        await axios.post('http://oficium.softmatservices.com/v1/createServiceUser', {
            name: this.state.name,
            email: this.state.email,
            birthdate: this.state.birthdate,
            mobilePhone: this.state.mobilePhone,
            state: this.state.state,
            city: this.state.city,
            password: this.state.password
        })


    }
    onCreateAd = async () => {

        function createGist(opts) {
            console.log('Posting request to GitHub API...');
            fetch('http://oficium.softmatservices.com/v1/createServiceUser', {
                method: 'POST',
                body: opts
            })
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log('Created Gist:');
                });
        }

        var formData = new FormData();

        var vari = {
            'name': this.state.name,
            'email': this.state.email,
            'birthdate': this.state.birthdate,
            'mobilePhone': this.state.mobilePhone,
            'state': this.state.state,
            'city': this.state.city,
            'password': this.state.password
        }
        for (var k in vari) {
            formData.append(k, vari[k]);
        }

        createGist(formData);

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
            <label>Nombre: <input type='text'
                name='name'
                id='name'
                placeholder="Nombre"
                onChange={this.fillToSubscribeName}
                required></input>
            </label>

            <label>Correo : <input type='text'
                                name='email'
                                id='email'
                                placeholder="Correo"
                                onChange={this.fillToSubscribeEmail}
                                required></input>
            </label>

            <label>Contraseña : <input type='text'
                                name='password'
                                id='password'
                                placeholder="Contraseña"
                                onChange={this.fillToSubscribePassword}
                                required></input>
            </label>
            
            <button type="submit" onClick={this.onCreateAd}>Crear</button>
                        <p>{this.state.message}</p>
            </form>
          </div>
        </div>
      </div>

        )
    }
}

export default Cuenta;