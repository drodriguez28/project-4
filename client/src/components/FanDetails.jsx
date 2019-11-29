import React, { Component } from 'react'
import axios from "axios"

export default class FanDetails extends Component {

    state = {
        fan: {}
    }

    deleteFan = () => {
        axios.delete('/api/fan/' + this.props.match.params.id)
            .then((response) => {
                this.setState({ deleted: true })
                console.log(response)
            })
    }


    componentDidMount = () => {
        axios.get('/api/fan/' + this.props.match.params.id)
            .then((reponse) => {
                this.setState({ fan: reponse.data })
                console.log(this.state)
            })
    }


    render() {
        if (this.state.hasOwnProperty('deleted') && this.state.deleted) {
            return (
                <div>
                    Fan Deleted
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Fan Info</h1>
                    <h5>name: {this.state.fan.name}</h5>
                    <h5>city:{this.state.fan.city}</h5>
                    <h5>team:{this.state.fan.team} </h5>
                    <h5>country:{this.state.fan.country} </h5>
                    <h5>age:{this.state.fan.age} </h5>

                    <button onClick={this.deleteFan}> Delete</button>
                </div>
            )
        }
    }
}
