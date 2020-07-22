import React from 'react';
import Lista from './Lista';
import '../../css/List.css';
import '../../css/Item.css';
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

				<div class="w3-content w3-padding">
					<div class="w3-container w3-padding-32" id="projects">
        				<h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Projects</h3>
            		</div>

					<div class="w3-row-padding">
						<div class="w3-col l3 m6 w3-margin-bottom">
                			<div class="w3-display-container">
            					<div class="w3-display-topleft w3-black w3-padding">Mascotas</div>
	                				<img src="../Img/SVG/001-wallet.svg" width="100" height="200" alt="Free Website Template by Free-Template.co" className="img-fluid w-25 mb-4"></img>
                				</div>
              			</div>
					</div>
				</div>
				<div className="container bg-light">
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

export default ListaContainer