import React, { Component } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'



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

                </form>
            </div>
        )
    }
}
