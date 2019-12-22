import React, { Component } from 'react'

export class Chair extends Component {

    state = {
        willReserve:false
    }
    
    chairStyle = ()=>{
        return this.props.isReserved === true ? "red" : this.state.willReserve ? "blue" : "green"
    }

    addOrRemoveOrder = (position)=>{
        var x;
        this.props.isReserved === true ? x=0 : this.state.willReserve === false ? this.props.getOrder(position) : this.props.removeOrder(position)
        this.setState({willReserve:!this.state.willReserve});
    }

    render() {
        return (
            <React.Fragment>
                <div className="w-100 h-100 d-flex justify-content-center align-items-center" style={{backgroundColor:this.chairStyle()}} onClick={()=>this.addOrRemoveOrder({column:this.props.column,row:this.props.row})}>
                    {this.props.row+this.props.column}
                </div>
            </React.Fragment>
        )
    }
}


export default Chair
