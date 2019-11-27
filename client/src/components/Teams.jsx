import React, { Component } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

export default class Teams extends Component {
    state = {
        teams: []
    }

    componentDidMount = () => {
        axios.get('/api/team')
            .then((response) => {
                this.setState({ teams: response.data })
            })
    }

    render() {
        return (
            <div>
                <h1> Liga MX Teams</h1>
                {this.state.teams.map((team) => {
                    return (
                        <div key={team._id}>
                            <Link to={"/teams/" + team._id} ><h5>{team.name}</h5></Link>
                        </div>
                    )
                })}
                {/* <footer><img src='./paintbrands.jpeg' />

                </footer> */}
            </div>
        )
    }
}
