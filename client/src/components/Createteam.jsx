import React, { Component } from 'react'
import axios from "axios"
import { Redirect } from 'react-router-dom'



export default class Createteam extends Component {
    state = {
        redirect: false,
        newTeam: {
            name: "",
            title: "",
            city: "",
            yearfounded: ""
        },
        createdTeamId: null
    }
    handleNewTeam = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;

        const newTeam = { ...this.state.newTeam };
        newTeam[attributeName] = attributeValue;

        this.setState({ newTeam })
    }

    addNewTeam = (event) => {
        event.preventDefault();

        axios.post('/api/team', this.state.newTeam)
            .then(createdTeam => {
                const newState = { ...this.state }
                newState.createdTeamId = createdTeam._id
                newState.redirect = true
                this.setState(newState)
            })
    }





    render() {
        return (
            <div>
                <form onSubmit={this.addNewTeam}>
                    {this.state.redirect ? (<Redirect to={`/teams`} />) : null}

                    <div>
                        <input
                            name="name"
                            type="text"
                            placeholder="name"
                            value={this.state.newTeam.name}
                            onChange={this.handleNewTeam}
                        />
                    </div>

                    <div>
                        <input
                            name="title"
                            type="text"
                            placeholder="title"
                            value={this.state.newTeam.title}
                            onChange={this.handleNewTeam}
                        />
                    </div>
                    <div>
                        <input
                            name="city"
                            type="text"
                            placeholder="city"
                            value={this.state.newTeam.city}
                            onChange={this.handleNewTeam}
                        />
                    </div>

                    <div>
                        <input
                            name="yearfounded"
                            type="number"
                            placeholder="yearfounded"
                            value={this.state.newTeam.yearfounded}
                            onChange={this.handleNewTeam}
                        />
                    </div>

                    <div>
                        <input
                        type="submit"
                        value="Create Liga MX Team" 
                        />
                    </div>








                </form>
            </div>
        )
    }
}
