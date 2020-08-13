import React from 'react';
import Lista from './Lista';
//import '../../css/List.css';
//import '../../css/Item.css';
import '../../css/Datos.css';
import Search from './Search';
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
				<section className="clientes contenedor">
					<h2 className="titulo">Que dicen nuestros clientes</h2>
					<div className="cards">
						<img src="../Img/SVG/labor.svg" alt=""/>
						<div className="contenido-texto-card">
							<h4>Name:</h4>
                        	<h4>Tel:</h4>
                        	<h4>Descripción:</h4>
                        	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, sapiente!</p>
						</div>
					</div>
				</section>
				<div className="container bg-white non-border">
					<div className="row justify-content-center"> 
				        {listas.map((list) => <Lista
				        	//key = {list.string()}
				        	name = {list.name} 
				        	category = {list.category}
							description = {list.description}
							serviceCategoryCdId = {list.service_category_ad_id}
							serviceUserId = {list.service_user_id}
						/>)
	                	}
		            </div>	
			    </div>
		    </div>
		)
	}
}

export default ListaContainer;