import React, { Component } from 'react'
import axios from "axios"




export default class TeamDetails extends Component {

    state = {
        team: {}
    }

    deleteTeam = () => {
        axios.delete('/api/team/' + this.props.match.params.id)
            .then((response) => {
                this.setState({ deleted: true })
                console.log(response)
            })
    }



    componentDidMount = () => {
        axios.get('/api/team/' + this.props.match.params.id)
            .then((reponse) => {
                this.setState({ team: reponse.data })
                console.log(this.state)
            })
    }




    render() {
        if (this.state.hasOwnProperty('deleted') && this.state.deleted) {
            return (
                <div>
                    Team Deleted
                </div>
            )
        } else {

            return (
                <div>
                    <h1>Team Info</h1>
                    <h5>name: {this.state.team.name}</h5>
                    <h5>title: {this.state.team.title}</h5>
                    <h5>city: {this.state.team.city}</h5>
                    <h5>yearfounded: {this.state.team.yearfounded}</h5>

                    <button onClick={this.deleteTeam}> Delete</button>


                </div>
            )
        }
    }
}
