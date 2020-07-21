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
				<br/>
				<br/>
				<br/>
				<section class="search-sec">
						<form action="#" method="post" novalidate="novalidate">
							<div class="row">
								<div class="col-lg-12">
									<div class="row">
										<div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            				<input type="text" class="form-control search-slt" placeholder="Categoria"/>
                        				</div>
										<div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            				<input type="text" class="form-control search-slt" placeholder="Servicio"/>
                        				</div>
										<div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            				<select class="form-control search-slt" id="exampleFormControlSelect1">
												<option>Busqueda</option>
												<option>Example one</option>
												<option>Example one</option>
												<option>Example one</option>
												<option>Example one</option>
												<option>Example one</option>
												<option>Example one</option>
                            				</select>
                        				</div>
										<div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            				<button type="button" class="btn btn-danger wrn-btn">Buscar</button>
                        				</div>
									</div>
								</div>
							</div>
						</form>
				</section>

				<div className="container-fluid mt-4">
		        	<div className="subcontainer">	
		        		<Search handleSearch ={this.handleSearch}/>
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