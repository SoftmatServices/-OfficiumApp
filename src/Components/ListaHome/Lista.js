import React from 'react'
import '../../css/List.css';
import PropTypes from 'prop-types'

const Lista = ({name, category, description, serviceCategoryCdId, serviceUserId}) => (
        <div className="col-6 col-xs-12 col-sm-6 col-md-4 col-lg-3 mt-2 bg-white">
            <div className="title">
                <font face="Comic Sans MS,arial,verdana" size="4"><p>{name}</p></font>
                <font face="Comic Sans MS,arial,verdana" size="3"><p>{category}</p></font>
                <font face="Comic Sans MS,arial,verdana" size="2"><p>{description}</p></font>
            </div>             
        </div>
    )

Lista.propTypes = {
	description: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	serviceCategoryCdId: PropTypes.number.isRequired,
	serviceUserId: PropTypes.number.isRequired
}

export default Lista;