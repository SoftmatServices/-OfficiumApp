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
			<div >
				<section>
					<div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
						<div className="carousel-inner">
							<div className="carousel-item active">
								<div className="carousel-item active">
									<img src="../Img/imagen.jpg" class="d-block w-100" alt="" width="1400" height="700"></img>
								</div>
								<div class="carousel-item">
                					<img src="../Img/imagen.jpg" class="d-block w-100" alt="..." ></img>
            					</div>
								<div class="carousel-item">
    								<img src="../Img/imagen.jpg" class="d-block w-100" alt="..."></img>
    							</div>
							</div>
						</div>
					</div>
				</section>
				<br/>
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