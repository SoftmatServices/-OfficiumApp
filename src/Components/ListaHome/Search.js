import React from 'react';
import '../../css/Menus.css';
//import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PropTypes from 'prop-types';

class Search extends React.Component{

    constructor(props){
        super(props);

        this.state = {search: ''};
    }

    handleChange = (e) =>{
        this.setState({search: e.target.value});
    }

    render(){
        const {handleSearch} = this.props
        const {search} = this.state
        return(
            <div>
                <section className="search-sec">
                    <div>
                        <form action="#" method="post" novalidate="novalidate">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                            <input className="form-control search-slt" placeholder="Busqueda"
                                            value={search}
                                            type="text" 
                                            onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                            <input type="text" className="form-control search-slt" placeholder="Servicio"/>
                                        </div>
                                        <div className="col-md-2 col-sm-6">
                                            <button type="button" 
                                                className="btn btn-danger wrn-btn" 
                                                onClick={() => handleSearch(search)}>Buscar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}

Search.propTypes = {
    onChangeEvent: PropTypes.func.isRequired
}

export default Search;