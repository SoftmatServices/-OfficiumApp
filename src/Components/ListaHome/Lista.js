import React from 'react'
import '../../css/List.css';
import PropTypes from 'prop-types'

const Lista = ({name, category, description, serviceCategoryCdId, serviceUserId}) => (
        <div className="clientes contenedor">
            <section>
                <h2 className="titulo">Clientes</h2>
                    <div className="cards">
                        <div className="card">
                            <img src="../Img/SVG/labor.svg" alt=""></img>
                        <div className="contenido-texto-card">
                            <p1>{name}</p1>
                            <p1>{category}</p1>
                            <p1>{description}</p1>
                            <p1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, sapiente!</p1>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

Lista.propTypes = {
	description: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	serviceCategoryCdId: PropTypes.number.isRequired,
	serviceUserId: PropTypes.number.isRequired
}

export default Lista;