import React from 'react'
import PropTypes from 'prop-types'


class RegistroContainer extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            mesage:''
        }
    }

    onCreateAd=()=>{
      let ad={
            name:this.refs.name.value,
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

   render(){
    return(
      <div>
        <h2>Ingrece los siguientes datos...</h2>
        <p>
          <label>name: <input type="text"  ref="name"></input></label>
        </p>
        <p>
          <label>description : <input type="text" ref="description"></input></label>
        </p>
        <p>
          <label>serviceCatAdId : <input type="text" ref="serviceCatAdId"></input></label>
        </p>
        <p>
          <label>serviceUserId : <input type="text" ref="serviceUserId"></input></label>
        </p>
        <button onClick={this.onCreateAd}>Crear</button>
        <p>{this.state.message}</p>
              </div>
    )
  }
}

export default RegistroContainer;