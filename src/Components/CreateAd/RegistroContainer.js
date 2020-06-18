import React from 'react'
import axios from 'axios'
import '../../css/List.css'
import PropTypes from 'prop-types'
import { getListasByCategory } from "../../Services/listas"
import { Redirect } from 'react-router-dom'


class RegistroContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            list: [],
            Category: [],
            SelectedCautegory: "",
            validadorError: "",
            name: "",
            description: "",
            serviceCatAdId: "",
            serviceUserId: "",
            isFetch: true
        }
    }

    async componentDidMount() {

        const result = await axios.get('http://oficium.softmatservices.com/v1/getAdAll')
        this.setState({ list: result.data.ads });
        console.log(this.state.list);

    }

    fillToSubscribeName = (event) => {
        this.setState({ name: event.target.value });
    }
    fillToSubscribeDesc = (event) => {
        this.setState({ description: event.target.value });
    }
    fillToSubscribeCatAd = (event) => {
        this.setState({ serviceCatAdId: event.target.value });
    }
    fillToSubscribeUser = (event) => {
        this.setState({ serviceUserId: event.target.value });
    }
    onCreateAd = async () => {

        function createGist(opts) {
            console.log('Posting request to GitHub API...');
            fetch('http://oficium.softmatservices.com/v1/createAd', {
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
            'description': this.state.description,
            'serviceCatAdId': this.state.serviceCatAdId,
            'serviceUserId': this.state.serviceUserId
        }
        for (var k in vari) {
            formData.append(k, vari[k]);
        }

        createGist(formData);
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Ingrece los siguientes datos...</h2>
                    <p>
                        <label>name: <input type='text'
                            name='name'
                            id='name'
                            placeholder="Nombre categoria"
                            onChange={this.fillToSubscribeName}
                            required></input></label>
                    </p>
                    <p>
                        <label>description : <input type='text'
                            name='description'
                            id='description'
                            placeholder="Descripción"
                            onChange={this.fillToSubscribeDesc}
                            required></input></label>
                    </p>

                    <p>
                        <label>serviceCatAdId : <input type='number'
                            name='serviceCatAdId'
                            id='serviceCatAdId'
                            placeholder="ID Categoria"
                            onChange={this.fillToSubscribeCatAd}
                            required></input></label>
                    </p>
                    <p>
                        <label>serviceUserId : <input type='number'
                            name='serviceUserId'
                            id='serviceUserId'
                            placeholder="ID usuario"
                            onChange={this.fillToSubscribeUser}
                            required></input></label>
                    </p>
                    <button onClick={this.onCreateAd}>Crear</button>
                    <p>{this.state.message}</p>
                </div>
                <div className="container-fluid bg-light">
                    <div className="row justify-content-center">
                        <div className="col-6 col-xs-12 col-sm-6 col-md-4 col-lg-3 mt-2 bg-white">
                                <select name="cat">{
                                    this.state.list.map(item =>
                                        <option> nombre{item.name} </option>
                                    )
                                }
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            


        )
    }
}

export default RegistroContainer;