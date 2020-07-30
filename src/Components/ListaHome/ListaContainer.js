import React from 'react';
import Lista from './Lista';
//import '../../css/List.css';
//import '../../css/Item.css';
import Search from './Search';
import Menu from './Menu';
import {getListasByPopular, getListasBySearch} from '../../Services/Get'

class ListaContainer extends React.Component {
	constructor (props) {
		super(props)

		this.state = {
			listas: [],
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

	render () {
		const { isFetch, listas} = this.state

		if(isFetch)
		{
			return 'Loading...'
		}

		return (
			<div>
				<div className="container-fluid mt-4">
		        	<div className="subcontainer">	
		        		<Search handleSearch ={this.handleSearch}/>
		        	</div>
	        	</div>
				<br/>
				<div>
					<Menu/>
				</div>
		    </div>
		)
	}
}

export default ListaContainer