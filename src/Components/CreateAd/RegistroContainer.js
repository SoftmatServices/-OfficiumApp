import React from 'react'
import Lista from './Lista'
import '../css/List.css';
import '../css/Item.css';
import Search from './Search';
import {getListasByPopular, getListasBySearch} from '../Services/listas'

class RegistroContainer extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            mesage:'',
            isFetch: true,
        }
    }

    async componentDidMount () {
        const responseJson = await getListasByPopular()
        this.setState({ listas: responseJson.ads, isFetch: false})
    }

    handleSearch = async (search) => {
        const responseJson = await getListasBySearch(search)
        this.setState({ listas: responseJson.ads})
    }

   render(){
    return(
      <div>
        <h2>Please Enter Details...</h2>
        <p>
          <label>name: <input type="text"  ref="Name"></input></label>
        </p>
        <p>
          <label>description : <input type="text" ref="Description"></input></label>
        </p>
        <p>
          <label>serviceCatAdId : <input type="text" ref="ServiceCatAdId"></input></label>
        </p>
        <p>
          <label>serviceUserId : <input type="text" ref="ServiceUserId"></input></label>
        </p>
        <button onClick={this.onCreateService}>Crear</button>
              </div>
    )
  }
}

export default ListaContainer