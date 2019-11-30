import React, { Component } from 'react'
import axios from "axios"


export default class TrashDetails extends Component {

    state = {
        trash: {}
    }

    deleteTrash = () => {
        axios.delete('/api/trash/' + this.props.match.params.id)
            .then((response) => {
                this.setState({ deleted: true })
                console.log(response)
            })
    }


    componentDidMount = () => {
        axios.get('/api/trash/' + this.props.match.params.id)
            .then((reponse) => {
                this.setState({ trash: reponse.data })
                console.log(this.state)
            })
    }






    render() {
        if (this.state.hasOwnProperty('deleted') && this.state.deleted) {
            return (
                <div>
                    Trash Talk Deleted
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Trash Talk Info</h1>
                    <h5>name: {this.state.trash.name}</h5>
                    <h5>comment: {this.state.trash.comment}</h5>
                    <button onClick={this.deleteTrash}> Delete</button>
                </div>
            )
        }
    }
}
