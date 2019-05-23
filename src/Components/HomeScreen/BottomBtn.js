import React, { Component } from 'react'
import { a } from 'react-materialize'

class BottomBtn extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col s6 center btnbttm">
                            <a href="#" className="btn-flat footrA">
                                <i className="material-icons">build</i>
                                <br />Talleres</a>
                        </div>
                        <div className="col s6 center btnbttm">
                            <a href="#" className="btn-flat footrA">
                                <i className="material-icons">directions_bike</i>
                                <br />S.O.S</a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default BottomBtn