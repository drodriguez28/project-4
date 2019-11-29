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
                    <h5>name: {this.state.fan.name}</h5>






                </div>
            )
        }
    }
}
