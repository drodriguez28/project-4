import React, { Component } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


export default class Games extends Component {
    state = {
        games: []
    }
    componentDidMount = () => {
        axios.get('/api/game')
            .then((response) => {
                this.setState({ clients: response.data })
            })
    }



    render() {
        return (
            <div>
                <h1>Pick-Up Games</h1>
                {this.state.games.map((game) => {
                    return (
                        <div key={game._id}>
                            <Link to={"/games/" + game._id}><h5>{game.name}</h5></Link>
                        </div>
                    )
                })}
                {/* <footer><img src='./homero.jpeg' />

                </footer> */}

            </div>
        )
    }
}
