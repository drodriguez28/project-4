import React, { Component } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


export default class Fans extends Component {
    state = {
        fans: []
    }
    componentDidMount = () => {
        axios.get('/api/fan')
            .then((response) => {
                this.setState({ fans: response.data })
            })
    }
    render() {
        return (
            <div>
                <h1>Liga MX Fans</h1>
                {this.state.fans.map((fan) => {
                    return (
                        <div key={fan._id}>
                            <Link to={"/fans/" + fan._id}><h5>{fan.name}</h5></Link>

                        </div>
                    )
                })}
                <footer><img src='./soccerteams.jpeg' />

                </footer>
            </div>
        )
    }
}
