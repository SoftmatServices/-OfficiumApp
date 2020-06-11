import React from 'react'
import PropTypes from 'prop-types'
import {getListasByCategory} from '../../Services/listas'


class RegistroContainer extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            name: "", 
            description: "",
            serviceCatAdId: "",
            serviceUserId: ""
        }
    }

    async componentDidMount () {
    const responseJson = await getListasByCategory()
    this.setState({ listas: responseJson.ads, isFetch: false})
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
      /* let ad={
            name:this.refs.name.value,
            description:this.refs.description.value,
            serviceCatAdId:this.refs.serviceCatAdId.value,
            serviceUserId:this.refs.serviceUserId.value
          };
   fetch('http://efactura.softmatservices.com/v1/createAd',{
        mode:'no-cors',
        method: 'POST',
        headers:{'Content-type':'application/json'},
        body: ad
      }).then(r=>r.json()).then(res=>{
        if(res){
          this.setState({message:'New Employee is Created Successfully'});
        }
      });

      const requestOptions = {
        mode:'no-cors',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: ad.name, 
          description: ad.description,
          serviceCatAdId: ad.serviceCatAdId,
          serviceUserId: ad.serviceUserId })
    };
    fetch('http://efactura.softmatservices.com/v1/createAd', requestOptions) ,{
        //.then(response => response.json())
        .then(() => {
            alert('Thank you for subscribing!');
        });
        console.log(ad)*/

    const response = await fetch('http://oficium.softmatservices.com/v1/createAd'
        ,{
            mode: 'no-cors',
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name, 
                description: this.state.description,
                serviceCatAdId: this.state.serviceCatAdId,
                serviceUserId: this.state.serviceUserId
            })
        })
    const responseJson = await response.json()
    return responseJson
    
        .then(function(response) {
              console.info('fetch()', response);
              return response;
        })
        
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