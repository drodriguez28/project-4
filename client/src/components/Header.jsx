import React, { Component } from 'react'
import { Link } from 'react-router-dom'



export default class Header extends Component {
    render() {
        return (
            <div>
                <button>
                    <Link to="/fans"> MX Fans</Link>
                </button>
                <button>
                    <Link to="/games">Pick-Up Games</Link>
                </button>
                
                <button>
                    <Link to="/teams">Liga MX Teams</Link>
                </button>

                <button>
                    <Link to="/fan/new">Create Fan</Link>
                </button>



            </div>
        )
    }
}
