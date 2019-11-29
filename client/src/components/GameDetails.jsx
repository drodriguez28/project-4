import React, { Component } from 'react'
import axios from "axios"



export default class GameDetails extends Component {


    state = {
        game: {}
    }


    deleteGame = () => {
        axios.delete('/api/game/' + this.props.match.params.id)
            .then((response) => {
                this.setState({ deleted: true })
                console.log(response)
            })
    }


    componentDidMount = () => {
        axios.get('/api/game/' + this.props.match.params.id)
            .then((reponse) => {
                this.setState({ game: reponse.data })
                console.log(this.state)
            })
    }



    render() {
        if (this.state.hasOwnProperty('deleted') && this.state.deleted) {
            return (
                <div>
                    Pickup Game Deleted
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Pickup Game Info</h1>
                    <h5>name: {this.state.game.name}</h5>
                    <h5>address: {this.state.game.address}</h5>
                    <h5>city: {this.state.game.city}</h5>
                    <h5>country: {this.state.game.country}</h5>
                    <h5>zipcode: {this.state.game.zipcode}</h5>

                    <button onClick={this.deleteGame}> Delete</button>


                </div>
            )
        }
    }
}
