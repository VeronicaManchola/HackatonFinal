import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BottomBtn extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col s6 center btnbttm">
                            <Link to="/Home" className="btn-flat footrA">
                                <i className="material-icons">build</i>
                                <br />Talleres</Link>
                        </div>
                        <div className="col s6 center btnbttm">
                            <Link to="/SosScreen" className="btn-flat footrA">
                                <i className="material-icons">directions_bike</i>
                                <br />S.O.S</Link>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default BottomBtn