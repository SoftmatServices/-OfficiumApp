import React, {Component} from 'react';
import '../../css/Principal/Estilos.css';
import axios from 'axios';


class Cuenta extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: " ",
            email: " "
            /*birthdate: " ",
            mobilePhone: " ",
            state: " ",
            city: " ",
            password: " ",
            isFetch: true*/
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
    /*fillToSubscribeBirthdate = (event) => {
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
    }*/
    //probar axios en metodos POST error CORS
    onCreateAd = async () => {

        function createGist(opts) {
            console.log('Posting request to GitHub API...');
            fetch('http://oficium.softmatservices.com/v1/createServiceUserBasic', {
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
            'email': this.state.email
            /*'birthdate': this.state.birthdate,
            'mobilePhone': this.state.mobilePhone,
            'state': this.state.state,
            'city': this.state.city,
            'password': this.state.password*/
        }
        for (var k in vari) {
            formData.append(k, vari[k]);
        }

        createGist(formData);

    }
    test = async () => {
        alert ("entop") 
        function createGist(opts) {
            console.log('Posting request to GitHub API...');
            fetch('http://oficium.softmatservices.com/v1/createServiceUserBasic', {
                method: 'POST',
                body: opts
            })
                .then(function (response) {
                    return response.json();
                })
                /*.then(function (data) {
                    console.log('Created Gist:');
                });*/
                alert("f");
        }

        var formData = new FormData();

        var vari = {
            'name': this.state.name,
            'email': this.state.email
            /*'birthdate': this.state.birthdate,
            'mobilePhone': this.state.mobilePhone,
            'state': this.state.state,
            'city': this.state.city,
            'password': this.state.password*/
        }
        for (var k in vari) {
            formData.append(k, vari[k]);
        }

        createGist(formData);
    }
    render() {
        return (
            <div>
                <body className="animsition">
                    <div className="page-wrapper">
                        <div className="page-content--bge5">
                            <div className="container">
                                <div className="login-wrap">
                                    <div className="login-content">
                                        <div className="login-logo">
                                            <a href="index.html">
                                                <img src="/Img/Logo.ico" alt="Oficium"></img>
                                            </a>
                                        </div>
                                        <div className="login-form">
                                            <form action="" method="post">
                                                <div className="form-group">
                                                    <label>Username</label>
                                                    <input className="au-input au-input--full" type="text" name="name" placeholder="Nombre" id="name"
                                                    onChange={this.fillToSubscribeName}
                                                    required></input>
                                                </div>
                                                <div className="form-group">
                                                    <label>Email Address</label>
                                                    <input className="au-input au-input--full" type="email" name="email" placeholder="Correo" id="email"
                                                    onChange={this.fillToSubscribeEmail}
                                                    required></input>
                                                </div>
                                                <div className="form-group">
                                                    <label>Password</label>
                                                    <input className="au-input au-input--full" type="password" name="password" placeholder="Contraseña" id="password"
                                                    ></input>
                                                </div>
                                                <div className="login-checkbox">
                                                    <label>
                                                        <input type="checkbox" name="aggree"/>Agree the terms and policy
                                                    </label>
                                                </div>
                                                <button className="au-btn au-btn--block au-btn--green m-b-20" type="submit" onClick={this.test}>register</button>
                                                <div className="social-login-content">
                                                    <div className="social-button">
                                                        <button className="au-btn au-btn--block au-btn--blue m-b-20">register with facebook</button>
                                                        <button className="au-btn au-btn--block au-btn--blue2">register with twitter</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </div>
        )
    }
}

export default Cuenta;