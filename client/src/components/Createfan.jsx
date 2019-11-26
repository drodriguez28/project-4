import React, { Component } from 'react'
import axios from "axios"
import { Redirect } from 'react-router-dom'

export default class Createfan extends Component {

    state = {
        redirect: false,
        newFan: {
            name: '',
            city: '',
            team: '',
            country: '',
            age: ''
        },
        createdFanId: null
    }
    handleNewFan = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;



        const newFan = { ...this.state.newFan };
        newFan[attributeName] = attributeValue;


        this.setState({ newFan })

    }
    addNewFan = (event) => {
        event.preventDefault();


        axios.post('/api/fan', this.state.newFan)
            .then(createdFan => {
                const newState = { ...this.state }
                newState.createdFanId = createdFan._id
                newState.redirect = true
                this.setState(newState)
            })

    }









    render() {
        return (
            <div>
                <form onSubmit={this.addNewFan}>

                    {this.state.redirect ? (<Redirect to={`/fans`} />) : null}
                    <div>
                        <input
                            name="name"
                            type="text"
                            placeholder="name"
                            value={this.state.newFan.name}
                            onChange={this.handleNewFan}
                        />
                    </div>


                    <div>
                        <input
                            name="city"
                            type="text"
                            placeholder="city"
                            value={this.state.newFan.city}
                            onChange={this.handleNewFan}
                        />
                    </div>


                    <div>
                        <input
                            name="team"
                            type="text"
                            placeholder="team"
                            value={this.state.newFan.team}
                            onChange={this.handleNewFan}
                        />
                    </div>

                    <div>
                        <input
                            name="country"
                            type="text"
                            placeholder="country"
                            value={this.state.newFan.country}
                            onChange={this.handleNewFan}
                        />
                    </div>

                    <div>
                        <input
                            name="age"
                            type="number"
                            placeholder="age"
                            value={this.state.newFan.age}
                            onChange={this.handleNewFan}
                        />
                    </div>

                    <div>
                        <input
                            type="submit"
                            value="Create New Fan"
                        />
                    </div>


                </form>
            </div>
        )
    }
}
