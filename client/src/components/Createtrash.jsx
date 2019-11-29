import React, { Component } from 'react'
import axios from "axios"
import { Redirect } from 'react-router-dom'

export default class Createtrash extends Component {

    state = {
        redirect: false,
        newTrash: {
            name: '',
            comment: ''
        },
        createdTrashId: null
    }

    handleNewTrash = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;



        const newTrash = { ...this.state.newTrash };
        newTrash[attributeName] = attributeValue;


        this.setState({ newTrash })

    }




    addNewTrash = (event) => {
        event.preventDefault();

        axios.post('/api/trash', this.state.newTrash)
            .then(createdTrash => {
                const newState = { ...this.state }
                newState.createdTrashId = createdTrash._id
                newState.redirect = true
                this.setState(newState)
            })
    }





    render() {
        return (
            <div>
                <form onSubmit={this.addNewTrash}>
                    {this.state.redirect ? (<Redirect to={`/trashs`} />) : null}

                    <div>
                        <input
                            name="name"
                            type="text"
                            placeholder="name"
                            value={this.state.newTrash.name}
                            onChange={this.handleNewTrash}
                        />
                    </div>
                    <div>
                        <input
                            name="comment"
                            type="text"
                            placeholder="comment"
                            value={this.state.newTrash.comment}
                            onChange={this.handleNewTrash}
                        />
                    </div>

                    <div>
                        <input
                            type="submit"
                            value="Create Trash Talk"
                        />
                    </div>








                </form>
            </div>
        )
    }
}
