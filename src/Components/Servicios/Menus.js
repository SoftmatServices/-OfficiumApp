import React from 'react';
import '../../css/Menus.css';
import Servicio from './Servicio';
class Menus extends React.Component {
	render() {
		return (
			<div>
				<section class="search-sec">
					<div class="">
						<form action="#" method="post" novalidate="novalidate">
							<div class="row">
								<div class="col-lg-12">
									<div class="row">
										<div class="col-lg-3 col-md-3 col-sm-12 p-0">
											<input type="text" class="form-control search-slt" placeholder="Categoria" />
										</div>
										<div class="col-lg-3 col-md-3 col-sm-12 p-0">
											<input type="text" class="form-control search-slt" placeholder="Servicio" />
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
					</div>
				</section>
				<div>
					<Servicio />
				</div>
			</div>
		);
	}
}

export default Menus;