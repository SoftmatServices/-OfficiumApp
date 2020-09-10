import React from 'react';
import '../../css/Servicios.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class Servicio extends React.Component {
	render() {
		return (
			<div>
				<section>
					<div className="w3-content w3-padding">
						<div className="w3-row- padding">
							<div className="w3-row- padding">
								<div className="w3-col l3 m6 w3-margin-bottom">
									<div className="w3-display-container">
										<div className="w3-display-topleft w3-black w3-padding"><Link to="/Albaniles">Albañiles</Link></div>
										<img src="../Img/SVG/labor.svg" alt="Albañiles" width="100" height="200"></img>
									</div>
								</div>
							</div>
						</div>

						<div className="w3-row- padding">
							<div className="w3-row- padding">
								<div className="w3-col l3 m6 w3-margin-bottom">
									<div className="w3-display-container">
										<div className="w3-display-topleft w3-black w3-padding"><Link to="/Arquitectos">Arquitectos</Link></div>
										<img src="../Img/SVG/obrero.svg" alt="Arquitectos" width="100" height="200"></img>
									</div>
								</div>
							</div>
						</div>

						<div className="w3-row- padding">
							<div className="w3-row- padding">
								<div className="w3-col l3 m6 w3-margin-bottom">
									<div className="w3-display-container">
										<div className="w3-display-topleft w3-black w3-padding"><Link to="/Automoviles">Automóviles</Link></div>
										<img src="../Img/SVG/coche.svg" alt="Automóviles" width="100" height="200"></img>
									</div>
								</div>
							</div>
						</div>

						<div className="w3-row- padding">
							<div className="w3-row- padding">
								<div className="w3-col l3 m6 w3-margin-bottom">
									<div className="w3-display-container">
										<div className="w3-display-topleft w3-black w3-padding"><Link to="/Belleza">Belleza</Link></div>
										<img src="../Img/SVG/piel.svg" alt="Belleza" width="100" height="200"></img>
									</div>
								</div>
							</div>
						</div>

						<div className="w3-row- padding">
							<div className="w3-row- padding">
								<div className="w3-col l3 m6 w3-margin-bottom">
									<div className="w3-display-container">
										<div className="w3-display-topleft w3-black w3-padding"><Link to="/Carpinteros">Carpinteros</Link></div>
										<img src="../Img/SVG/Carpinteria.svg" alt="Carpinteros" width="100" height="200"></img>
									</div>
								</div>
							</div>
						</div>

						<div className="w3-row- padding">
							<div className="w3-row- padding">
								<div className="w3-col l3 m6 w3-margin-bottom">
									<div className="w3-display-container">
										<div className="w3-display-topleft w3-black w3-padding"><Link to="/Cerrajeros">Cerrajeros</Link></div>
										<img src="../Img/SVG/llave.svg" alt="Cerrajeros" width="100" height="200"></img>
									</div>
								</div>
							</div>
						</div>

						<div className="w3-row- padding">
							<div className="w3-row- padding">
								<div className="w3-col l3 m6 w3-margin-bottom">
									<div className="w3-display-container">
										<div className="w3-display-topleft w3-black w3-padding"><Link to="/Entrenadores">Entrenadores</Link></div>
										<img src="../Img/SVG/velocidad.svg" alt="Entrenadores" width="100" height="200"></img>
									</div>
								</div>
							</div>
						</div>

						<div className="w3-row- padding">
							<div className="w3-row- padding">
								<div className="w3-col l3 m6 w3-margin-bottom">
									<div className="w3-display-container">
										<div className="w3-display-topleft w3-black w3-padding"><Link to="/Electricistas">Electricistas</Link></div>
										<img src="../Img/SVG/idea.svg" alt="Electricistas" width="100" height="200"></img>
									</div>
								</div>
							</div>
						</div>

						<div className="w3-row- padding">
							<div className="w3-row- padding">
								<div className="w3-col l3 m6 w3-margin-bottom">
									<div className="w3-display-container">
										<div className="w3-display-topleft w3-black w3-padding"><Link to="/Reparaciones">Reparaciones</Link></div>
										<img src="../Img/SVG/mantenimiento.svg" alt="Reparaciones" width="100" height="200"></img>
									</div>
								</div>
							</div>
						</div>

						<div className="w3-row- padding">
							<div className="w3-row- padding">
								<div className="w3-col l3 m6 w3-margin-bottom">
									<div className="w3-display-container">
										<div className="w3-display-topleft w3-black w3-padding"><Link to="/Limpieza">Limpieza</Link></div>
										<img src="../Img/SVG/Limpieza.svg" alt="Limpieza" width="100" height="200"></img>
									</div>
								</div>
							</div>
						</div>

						<div className="w3-row- padding">
							<div className="w3-row- padding">
								<div className="w3-col l3 m6 w3-margin-bottom">
									<div className="w3-display-container">
										<div className="w3-display-topleft w3-black w3-padding"><Link to="/Pintores">Pintores</Link></div>
										<img src="../Img/SVG/Pintores.svg" alt="Pintores" width="100" height="200"></img>
									</div>
								</div>
							</div>
						</div>

						<div className="w3-row- padding">
							<div className="w3-row- padding">
								<div className="w3-col l3 m6 w3-margin-bottom">
									<div className="w3-display-container">
										<div className="w3-display-topleft w3-black w3-padding"><Link to="/Plomeria">Plomeria</Link></div>
										<img src="../Img/SVG/Plomeria.svg" alt="Plomeria" width="100" height="200"></img>
									</div>
								</div>
							</div>
						</div>

						<div className="w3-row- padding">
							<div className="w3-row- padding">
								<div className="w3-col l3 m6 w3-margin-bottom">
									<div className="w3-display-container">
										<div className="w3-display-topleft w3-black w3-padding"><Link to="/Tecnicos">Tecnicos</Link></div>
										<img src="../Img/SVG/Tecnicos.svg" alt="Tecnicos" width="100" height="200"></img>
									</div>
								</div>
							</div>
						</div>

						<div className="w3-row- padding">
							<div className="w3-row- padding">
								<div className="w3-col l3 m6 w3-margin-bottom">
									<div className="w3-display-container">
										<div className="w3-display-topleft w3-black w3-padding"><Link to="/Crea Servicio">Crear Servicio</Link></div>
										<img src="../Img/SVG/crea.svg" alt="Crea Servicio" width="100" height="200"></img>
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

export default Servicio;