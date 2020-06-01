import React from 'react';
import '../css/Menu.css';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import PropTypes from 'prop-types'

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
            <div className="row justify-content-center">
                <div className="col-md-6 col-sm-6 ">
                    <input className="w-100 d-inline-block"
                            value={search}
                            type="text" 
                            onChange={this.handleChange}
                            />
                </div>
                <div className="col-md-2 col-sm-6">
                        <button 
                                className="button btn-blue" 
                                onClick={() => handleSearch(search)}>Buscar</button>
                </div>
            </div>
        );
    }
}

Search.propTypes = {
    onChangeEvent: PropTypes.func.isRequired
}

export default Search;