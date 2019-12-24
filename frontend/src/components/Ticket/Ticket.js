import React, { Component } from 'react'
import axios from 'axios';

export class Ticket extends Component {
    constructor(props){
        super(props)
        this.state={

        }
        this.submitForm = this.submitForm.bind();
    }
    
    submitForm = (event)=>{
        event.preventDefault()
        let positions = []
        this.props.orders.map((value)=>{
            positions.push(value.row+value.column);
        })

        let data = {
            customerID:1,
            screeningID:this.props.screening.id,
            position:positions
        }
        
        axios.post('/api/reserve',data).then(response=>{
            this.sendOrdersToHall(this.props.orders);
        });
    }

    sendOrdersToHall = (positions)=>{
        this.props.getOrdersAfterSubmit(positions);
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <h4 className="text-left">Reservation Ticket</h4>
                <p className="text-left m-0 p-0">{"Movie: "+this.props.movie.name}</p>
                <p className="text-left m-0 p-0">{"Screen: "+this.props.screening.screen_id}</p>
                <p className="text-left m-0 p-0">{"When: "+this.props.screening.date+" "+this.props.screening.time}</p>
                <hr></hr>
                <div className="text-left pl-3" style={{borderLeft:"1px solid rgba(0,0,0,0.1)",maxHeight:"250px",minHeight:"250px",overflowY:"auto"}}>
                    {this.props.orders.map((order)=>(
                        <p>{"Chair# "+order["row"]+order["column"]}</p>
                    ))}
                </div>
                <button type="submit" className="btn btn-success mt-4 mb-3">Reserve</button>
            </form>
        )
    }
}

export default Ticket
