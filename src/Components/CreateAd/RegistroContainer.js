import React from 'react'
import PropTypes from 'prop-types'
import {getListasByCategory} from "../../Services/listas"


class RegistroContainer extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            Category: [],
            SelectedCautegory: "",
            validadorError: "",
            name: "", 
            description: "",
            serviceCatAdId: "",
            serviceUserId: ""
        }
    }

    async componentDidMount () {
    const responseJson = await getListasByCategory()
    this.setState({ Category: responseJson.servicecategory, isFetch: false})
    .then(data =>{
        let Categorias = data.map(cat => {
            return {value: cat, 
                    display: cat}
        });
        this.setState({
            Category: [
            {
                value: '',
                display: '(Seleccione una categoria)'
             }
             ].contact(Categorias)
        });
    }).catch(error => {
        console.log(error);
    });
}

    fillToSubscribeName = (event) => {
        this.setState({name: event.target.value});
    }
    fillToSubscribeDesc = (event) => {
        this.setState({description: event.target.value});
    }
    fillToSubscribeCatAd = (event) => {
        this.setState({serviceCatAdId: event.target.value});
    }
    fillToSubscribeUser = (event) => {
        this.setState({serviceUserId: event.target.value});
    }
    onCreateAd= async ()=>{

        function createGist(opts) {
          console.log('Posting request to GitHub API...');
          fetch('http://oficium.softmatservices.com/v1/createAd', {
            method: 'POST',
            body: opts
        })
          .then(function(response) {
            return response.json();
          })
          .then(function(data) {
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
        for(var k in vari){
          formData.append(k,vari[k]);
        }

        createGist(formData);
    }

   render(){
    return(
      <div className="container-fluid">
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
          <label>description : <input  type='text'
                name='description'
                id='description'
                placeholder="Descripción" 
                onChange={this.fillToSubscribeDesc}
                required></input></label>
        </p>
        //<p>
            <select 
                    value = {this.state.SelectedCautegory}
                    onChange={(e)=> 
                        this.setState({
                            SelectedCautegory: e.target.value,
                            validadorError: 
                            e.target.value === ""
                                ? "Debe seleccionar una categoria"
                                : ""
                        })
                    }
            >
                {this.state.categorias.map((cat) => 
                    <option 
                        key={cat.value}
                        value={cat.value}
                    >
                        {cat.display}
                    </option>
                    )
                }
            </select>
            <div style= {{color: 'red', marginTop: '5px'}}>
                {this.state.validadorError}
            </div>
        //</p>
        <p>
          <label>serviceCatAdId : <input  type='number'
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
    )
  }
}

export default RegistroContainer;