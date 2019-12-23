import React, { Component } from 'react'

export class Chair extends Component {

    state = {
        willReserve:false
    }
    
    chairStyle = ()=>{
        return this.props.isReserved === true ? "red" : this.state.willReserve ? "blue" : "green"
    }

    chairNumberStyle =()=>{
        return {
            margin:"0",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -100%)",
            color:"white"
        }        
    }
    addOrRemoveOrder = (position)=>{
        let x;
        this.props.isReserved === true ? x=0 : this.state.willReserve === false ? this.props.getOrder(position) : this.props.removeOrder(position)
        this.setState({willReserve:!this.state.willReserve});
    }

    render() {
        return (
            <React.Fragment>
                <div className="w-100 h-100 justify-content-center align-items-center text-center" onClick={()=>this.addOrRemoveOrder({column:this.props.column,row:this.props.row})}>
                    <svg className="w-100" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 512 512" style={{enableBackground:"new 0 0 512 512",fill:this.chairStyle(),transform:"rotateZ(180deg)"}} xmlSpace="preserve">
                    <g>
                        <g>
                            <path d="M415.959,220c-13.697-18.204-35.475-30-59.959-30h-40v-40h115V45c0-24.813-20.187-45-45-45H126c-24.813,0-45,20.187-45,45
                                v105h115v40h-40c-24.484,0-46.262,11.796-59.959,30H0v195h30V310h51v127c0,41.355,33.645,75,75,75h200c41.355,0,75-33.645,75-75
                                V310h51v105h30V220H415.959z M81,265v15H30v-30h52.509C81.521,254.848,81,259.864,81,265z M286,190h-60v-40h60V190z M482,280h-51
                                v-15c0-5.136-0.521-10.152-1.509-15H482V280z"/>
                            {/* <text x="0" y="15" fill="black"></text> */}
                        </g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    </svg>
                    <p style={this.chairNumberStyle()}>{this.props.row+this.props.column}</p>
                </div>
            </React.Fragment>
        )
    }
}


export default Chair
