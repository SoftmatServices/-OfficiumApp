import React from 'react';
import '../css/Menu.css';
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
            <div>
                <div className="search">
                    <input 
                            value={search}
                            type="text" 
                            onChange={this.handleChange} />
                </div>
                <div className="actions">
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