import React from 'react';
import '../../css/Letter.css';
import Servicio from './Servicio';
class Menus extends React.Component {
	render() {
		return (
			<div>
				<section className="search-sec">
					<div className="">
						<form action="#" method="post" novalidate="novalidate">
							<div className="row">
								<div className="col-lg-12">
									<div className="row">
										<div className="col-lg-50 col-md-50 col-sm-8">
											<input type="text" className="form-control search-slt" placeholder="Servicio" />
										</div>
										<div className="col-lg-3 col-md-3 col-sm-12 p-0">
											<button type="button" className="btn btn-danger wrn-btn">Buscar</button>
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