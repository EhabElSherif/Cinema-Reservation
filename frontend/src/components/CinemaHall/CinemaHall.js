import React, { Component } from 'react'
import Chair from '../Chair/Chair'
import Ticket from '../Ticket/Ticket'
import axios from 'axios'

export default class CinemaHall extends Component {
    RowsNames ={
        1 :"A",
        2 :"B",
        3 :"C",
        4 :"D",
        5 :"E",
        6 :"F",
        7 :"G",
        8 :"H",
        9 :"I",
        10 :"J",
        11 :"K",
        12 :"L",
        13 :"M",
        14 :"N",
        15 :"O",
        16 :"P",
        17 :"Q",
        18 :"R",
        19 :"S",
        20 :"T",
        21 :"U",
        22 :"V",
        23 :"W",
        24 :"X",
        25 :"Y",
        26 :"Z"
    }

    rows=10
    columns=12

    constructor(){
        super()
        this.state = {
            screening:{
                id:null,
                date: "",
                time: ""
            },
            movie:{
                name: "",
                genre: [],
                length: null,
                img: "",
            },
            reservedChairs:null,
            chairs: [],
            orders: []
        }
        this.getMovie = this.getMovie.bind(this);
        this.getOrder = this.getOrder.bind(this);
        this.removeOrder = this.removeOrder.bind(this);
        this.placeChairs = this.placeChairs.bind(this);
        this.setRow = this.setRow.bind(this);
    }
    
    
    getOrder = (chair)=>{
        var orders = this.state.orders
        orders.push(chair)
        this.setState({orders:orders})
    }

    removeOrder = (chair)=>{
        var orders = this.state.orders
        orders.map((obj,idx)=>{
            if ((obj.column === chair.column) &&  (obj.row === chair.row)){
                orders.splice(idx,1);
                this.setState({orders:orders})
                return
            }
        })
    }
    
    placeChairs = (rows,columns)=>{
        var chairs = [];
        for (var i = 0; i < rows; i++) {
            chairs.push(
                <div className="row m-0 justify-content-center">
                {this.setRow(i,columns)}
                </div>
            );
        }
        this.setState({chairs})
    }
    
    setRow = (row,columns)=>{
        var chairs = []
        for (let j = 0; j < columns; j++) {
            let isReserved = false;
            if (this.state.reservedChairs.find(element=>{return element.position == this.RowsNames[row+1]+(j+1)}))
                isReserved = true;
            else
                isReserved = false;
            chairs.push(
                <div className="col-1 p-0" style={{minWidth:"70px",maxWidth:"70px",height:"70px",transform:"scale(0.9)"}} key={this.RowsNames[row+1]+String(j+1)}>
                    <Chair getOrder={this.getOrder} removeOrder={this.removeOrder} column={j+1} row={this.RowsNames[row+1]} isReserved={isReserved}></Chair>  
                </div>
            );
        }
        return chairs;
    }
    
    getMovie = ()=>{
        axios.get('/api/reservation/'+this.props.match.params.screening_id).then(response=>{
            this.setState({
                reservedChairs:response.data.tickets,
                screening:response.data.screening,
                movie:response.data.movie
            });
            this.placeChairs(this.rows,this.columns)
        });

    }
    
    getOrdersAfterSubmit = (orders)=>{
        let newPositions = []
        orders.map(order=>{
            newPositions.push({"position":order['row']+order['column']})
        });
        this.setState({reservedChairs:this.state.reservedChairs.concat(newPositions)})
    }

    componentDidMount(){
        this.getMovie()
    }
    
    componentWillUpdate(){
        this.getMovie()
    }

    render() {
        if(!this.state.reservedChairs) return null;
        return (
            <div className="d-flex">
                <div className="row col-8 m-0">
                    <div className="w-100 bg-dark py-3 mb-4" style={{borderTopRightRadius:"5rem",borderTopLeftRadius:"5rem"}}>
                        <h5 className="text-center text-light m-0">
                        Screen
                        </h5>
                    </div>
                    <div className="justify-content-center" style={{maxHeight:"400px",minHeight:"400px",overflowY:"auto",width:"100%"}}>
                        {this.state.chairs}
                    </div>
                </div>
                <div className="col-4 text-center">
                    <Ticket movie={this.state.movie} screening={this.state.screening} orders={this.state.orders} getOrdersAfterSubmit={this.getOrdersAfterSubmit}></Ticket>
                </div>
            </div>
        )
    }
}
