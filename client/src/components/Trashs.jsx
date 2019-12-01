import React, { Component } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'



export default class Trashs extends Component {


    state = {
        trashs: []
    }

    componentDidMount = () => {
        axios.get('/api/trash')
            .then((response) => {
                this.setState({ trashs: response.data })
            })
    }



    render() {
        return (
            <div>
                <h1> Trash Talk</h1>
                {this.state.trashs.map((trash) => {
                    return (
                        <div key={trash._id}>
                <Link to={"/trashs/" + trash._id}><h5>{trash.name+trash.comment}</h5></Link>

                        </div>
                    )
                })}
                {/* <footer><img src='./paintcan.jpeg' />

                </footer> */}
            </div>
        )
    }
}
