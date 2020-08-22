import React from 'react';
import '../../css/Menus.css';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PropTypes from 'prop-types';
import {getServicesCategoryAll } from '../../Services/Get'

class Filtro extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            search: '',
            CatId: []
        };
    }

    async componentDidMount() {
        const resCat = await getServicesCategoryAll()
        this.setState({ CatId: resCat.data.servicecategory });

    }

    handleChange = (e) => {
        this.setState({ search: e.target.value });
    }

    render() {
        const { handleSearch } = this.props
        const { search } = this.state
        return (
            <div>
               
                    <div>
                        <form action="#" method="post" novalidate="novalidate">
                            
                    
                                    <div >
                                        <div >
                                            <label>Categoria :  <select
                                                name="cat"
                                                onChange={this.handleChange}>{
                                                    this.state.CatId.map(item =>
                                                        <option key={item.service_category_id} value={item.name}>
                                                            {item.name}
                                                        </option>
                                                    )
                                                }
                                            </select></label>
                                        </div>
                                        <div className="col-md-2 col-sm-6">
                                            <button type="button"
                                                className="btn btn-danger wrn-btn"
                                                onClick={() => handleSearch(search)}>Buscar
                                            </button>
                                        </div>
                                    </div>
                             
                          
                        </form>
                    </div>
                
            </div>
        );
    }
}

Filtro.propTypes = {
    onChangeEvent: PropTypes.func.isRequired
}

export default Filtro;