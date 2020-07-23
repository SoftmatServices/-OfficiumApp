import React from 'react';
class Menu extends React.Component {
    render(){
        return  (
            <div>
                <section class="search-sec">
					<div class="w3-content w3-padding">
						<div class="w3-container w3-padding-32" id="Servicios">
                            <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Servicios</h3>
            			</div>
						<div className="w3-row- padding">
							<div className="w3-row- padding">
								<div className="w3-col l3 m6 w3-margin-bottom">
									<div className="w3-display-container">
										<div className="w3-display-topleft w3-black w3-padding">Albañil</div>
											<img src="../Img/SVG/labor.svg" alt="Albanil" width="100" height="200"></img>
									</div>
								</div>
							</div>
						</div>

                        <div className="w3-row- padding">
							<div className="w3-row- padding">
								<div className="w3-col l3 m6 w3-margin-bottom">
									<div className="w3-display-container">
										<div className="w3-display-topleft w3-black w3-padding">Arquitecto</div>
											<img src="../Img/SVG/obrero.svg" alt="Arquitecto" width="100" height="200"></img>
									</div>
								</div>
							</div>
						</div>

						<div className="w3-row- padding">
							<div className="w3-row- padding">
								<div className="w3-col l3 m6 w3-margin-bottom">
									<div className="w3-display-container">
										<div className="w3-display-topleft w3-black w3-padding">Automovil</div>
											<img src="../Img/SVG/coche.svg" alt="Automovil" width="100" height="200"></img>
									</div>
								</div>
							</div>
						</div>

						<div className="w3-row- padding">
							<div className="w3-row- padding">
								<div className="w3-col l3 m6 w3-margin-bottom">
									<div className="w3-display-container">
										<div className="w3-display-topleft w3-black w3-padding">Belleza</div>
											<img src="../Img/SVG/moda.svg" alt="Belleza" width="100" height="200"></img>
									</div>
								</div>
							</div>
						</div>

						<div className="w3-row- padding">
							<div className="w3-row- padding">
								<div className="w3-col l3 m6 w3-margin-bottom">
									<div className="w3-display-container">
										<div className="w3-display-topleft w3-black w3-padding">Entrenadores</div>
											<img src="../Img/SVG/velocidad.svg" alt="Entrenadores" width="100" height="200"></img>
									</div>
								</div>
							</div>
						</div>


					</div>
				</section>
            </div>
        );
    }
}

export default Menu;