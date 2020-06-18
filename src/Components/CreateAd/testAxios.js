import React, { Component } from 'react'
import axios from 'axios'


class testAxios extends Component {


    state = {
        list: []
    }

    async componentDidMount() {

        const result = await axios.get('http://oficium.softmatservices.com/v1/getAdAll')
        console.log(result);
        this.setState({ list: result.data.ads });
        console.log(this.state.list)
        

    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map(item => <li>
                            {item.name}
                        </li>)
                    }
                </ul>
            </div>)
    }
}

export default testAxios;