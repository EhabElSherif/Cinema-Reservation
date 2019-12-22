import React, { Component } from 'react'

export class Ticket extends Component {
    render() {
        return (
            <React.Fragment>
                <h4 className="text-left">Reservation Ticket</h4>
                <p className="text-left m-0 p-0">{"Movie: "+this.props.movie.name}</p>
                <p className="text-left m-0 p-0">{"Screen: "+this.props.screen.id}</p>
                <p className="text-left m-0 p-0">{"When: "+this.props.screen.date+" "+this.props.screen.time}</p>
                <hr></hr>
                <div className="text-left pl-3" style={{borderLeft:"1px solid rgba(0,0,0,0.1)",maxHeight:"250px",minHeight:"250px",overflowY:"auto"}}>
                    {this.props.orders.map((order)=>(
                        <p>{"Chair# "+order["row"]+order["column"]}</p>
                    ))}
                </div>
                <button type="submit" className="btn btn-success mt-4 mb-3">Reserve</button>
            </React.Fragment>
        )
    }
}

export default Ticket
