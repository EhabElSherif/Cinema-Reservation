import React, { Component } from 'react'
import axios from 'axios'

class AddScreening extends Component {
    months ={
        "Jan":"01",
        "Feb":"02",
        "Mar":"03",
        "Apr":"04",
        "May":"05",
        "Jun":"06",
        "Jul":"07",
        "Aug":"08",
        "Sep":"09",
        "Oct":"10",
        "Nov":"11",
        "Dec":"12"
    }
    currentTime = Date().split(' ')
    
    constructor(props){
        super(props)
        this.state={
            screenID:1,
            movieID:1,
            screenDate:this.currentTime[3]+"-"+this.months[this.currentTime[1]]+"-"+this.currentTime[2],
            screenTime:this.currentTime[4]
        }
        this.submitForm = this.submitForm.bind(this)
    }
    
    submitForm = (event)=>{
        event.preventDefault()
        let data ={
            screenID:this.state.screenID,
            movieID:this.state.movieID,
            screenDate:this.state.screenDate,
            screenTime:this.state.screenTime
        }

        axios.post('/api/movies/'+this.state.movieID+'/screening',data).then((response)=>{
            alert(response.status)
        })
    }

    render() {
        if (!this.props.screens) return null;
        return (
            <React.Fragment>
                <h4 className="m-0 pt-4 text-center">Add Screening</h4>
                <form className="mt-5 text-center" onSubmit={this.submitForm}>
                    <div className="form-group d-flex justify-content-center">
                        <label className="col-4 m-0 align-self-center text-left">Screen Number:</label>
                        <select className="col-6 form-control" id="formControlSelectScreen" value={this.state.screenID} onChange={(event)=>this.setState({screenID:event.target.value})}>
                            {this.props.screens.map((screen)=>(
                                <option value={screen.id}>{screen.id}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <label className="col-4 m-0 align-self-center text-left">Movie:</label>
                        <select className="col-6 form-control" id="formControlSelectMovie" value={this.state.movieID} onChange={(event)=>this.setState({movieID:event.target.value})}>
                            {this.props.movies.map((movie)=>(
                                <option value={movie.id}>{movie.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <label className="col-4 m-0 align-self-center text-left">Date:</label>
                        <input className="col-6 form-control" id="screenDate" type="date" required name="screenDate" value={this.state.screenDate} onChange={(event)=>this.setState({screenDate:event.target.value})}></input>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <label className="col-4 m-0 align-self-center text-left">Time:</label>
                        <input className="col-6 form-control" id="screenTime" type="time" required name="screenTime" value={this.state.screenTime} onChange={(event)=>this.setState({screenTime:event.target.value})}></input>
                    </div>
                    <div className="mt-4">
                        <button type="submit" className="btn btn-primary mb-3">Submit</button>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

export default  AddScreening;