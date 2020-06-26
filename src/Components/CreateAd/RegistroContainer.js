import React from 'react'
import axios from 'axios'
import '../../css/List.css'
import ListaContainer from '../ListaHome/ListaContainer';
import PropTypes from 'prop-types';
import { getServiceType, getServicesCategoryAll } from '../../Services/Get'
import { Redirect } from 'react-router-dom';


class RegistroContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            CatId: [],
            UserId: [],
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
        const resCat = await getServicesCategoryAll()
        this.setState({ CatId: resCat.data.servicecategory });
        const resPrf = await getServiceType()
        this.setState({ UserId: resPrf.data.servicetype });

    }

    fillToSubscribeName = (event) => {
        this.setState({
            name: event.target.value
        });
    }
    fillToSubscribeDesc = (event) => {
        this.setState({
            description: event.target.value
        });
    }
    fillToSubscribeCatAd = (event) => {
        this.setState({
            serviceCatAdId: event.target.value
        });
    }
    fillToSubscribeUser = (event) => {
        this.setState({
            serviceUserId: event.target.value
        });
    }
    //probar axios en metodos POST error CORS
    onSubmit = async e => {
        e.preventDefault();
        await axios.post('http://oficium.softmatservices.com/v1/createAd', {
            name: this.state.name,
            description: this.state.description,
            serviceCatAdId: this.state.serviceCatAdId,
            serviceUserId: this.state.serviceUserId
        })


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
            <div className="container">
                <div className="row">
                    <div className="col-3" >
                        <h2>Ingrece los siguientes datos...</h2>
                        <p>
                            <label>Nombre: <input type='text'
                                name='name'
                                id='name'
                                placeholder="Nombre categoria"
                                onChange={this.fillToSubscribeName}
                                required></input></label>
                        </p>
                        <p>
                            <label>Descriocion : <input type='text'
                                name='description'
                                id='description'
                                placeholder="Descripción"
                                onChange={this.fillToSubscribeDesc}
                                required></input></label>
                        </p>

                        <p>
                            <label>Categoria :  <select
                                name="cat"
                                onChange={this.fillToSubscribeCatAd}>{
                                    this.state.CatId.map(item =>
                                        <option key={item.service_category_id} value={item.service_category_id}>
                                            {item.name}
                                        </option>
                                    )
                                }
                            </select></label>
                        </p>
                        <p>
                            <label>Perfil :
                                <select
                                    name="pef"
                                    onChange={this.fillToSubscribeUser}>{
                                        this.state.UserId.map(item =>
                                            <option key={item.service_type_id} value={item.service_type_id}>
                                                {item.name}
                                            </option>
                                        )
                                    }
                                </select>
                            </label>
                        </p>
                        <button type="submit" onClick={this.onCreateAd}>Crear</button>
                        <p>{this.state.message}</p>
                    </div>
                    <div className="col-9">
                        <ListaContainer />
                    </div>
                </div>
            </div >

        )
    }
}

export default RegistroContainer;