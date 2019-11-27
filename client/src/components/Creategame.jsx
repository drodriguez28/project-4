import React, { Component } from 'react'
import axios from "axios"
import { Redirect } from 'react-router-dom'


export default class Creategame extends Component {


    state = {
        redirect: false,
        newGame: {
            name: '',
            address: '',
            city: '',
            country: '',
            zipcode: ''
        },
        createdGameId: null
    }

    handleNewGame = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;



        const newGame = { ...this.state.newGame };
        newGame[attributeName] = attributeValue;


        this.setState({ newGame })

    }
    addNewGame = (event) => {
        event.preventDefault();

        axios.post('/api/game', this.state.newGame)
            .then(createdGame => {
                const newState = { ...this.state }
                newState.createdGameId = createdGame._id
                newState.redirect = true
                this.setState(newState)
            })
    }




    render() {
        return (
            <div>
                <form onSubmit={this.addNewGame}>
                    {this.state.redirect ? (<Redirect to={`/games`} />) : null}

                    <div>
                        <input
                            name="name"
                            type="text"
                            placeholder="parkname"
                            value={this.state.newGame.name}
                            onChange={this.handleNewGame}

                        />
                    </div>


                    <div>
                        <input
                            name="address"
                            type="text"
                            placeholder="address"
                            value={this.state.newGame.address}
                            onChange={this.handleNewGame}

                        />
                    </div>

                    <div>
                        <input
                            name="city"
                            type="text"
                            placeholder="city"
                            value={this.state.newGame.city}
                            onChange={this.handleNewGame}

                        />
                    </div>

                    <div>
                        <input
                            name="country"
                            type="text"
                            placeholder="country"
                            value={this.state.newGame.country}
                            onChange={this.handleNewGame}

                        />
                    </div>

                    <div>
                        <input
                            name="zipcode"
                            type="number"
                            placeholder="zipcode"
                            value={this.state.newGame.zipcode}
                            onChange={this.handleNewGame}

                        />
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Create Pick-Up Game"
                        />
                    </div>
                </form>
            </div>
        )
    }
}
