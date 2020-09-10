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
				<body className="animsition">
					<div className="page-wrapper">
						<header className="header-mobile d-block d-lg-none">
							<div className="header-mobile__bar">
								<div className="container-fluid">
									<div className="header-mobile-inner">
										<a className="logo" href="Servicio">
											<img src="../Img/Logo.ico" alt="Oficium"></img>
										</a>
									</div>
								</div>
							</div>
						</header>
					</div>
				</body>
			</div>
		);
	}
}

export default Servicio;