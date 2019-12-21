import React, { Component } from 'react'

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

    state={
        screens:[1,2,3,4,5,6],
        movies:[{
            name: "Joker",
            genre: ["Drama"],
            screen: 1,
            img: "img/1.jpg"
        },{
            name: "Men In Black",
            genre: ["Action"],
            screen : 2,
            img: "img/3.jpg"
        },{
            name: "صعيدي في الجامعة الأميريكية",
            genre: ["Comedy"],
            screen : 2,
            img: "img/6.jpg"
        },{
            name: "Alaadin",
            genre: ["Sci-Fi","Romance"],
            screen : 3,
            img: "img/4.jpg"
        },{
            name: "La La Land",
            genre: ["Romance"],
            screen : 1,
            img: "img/6.jpg"
        },{
            name: "La La Land",
            genre: ["Romance"],
            screen : 1,
            img: "img/6.jpg"
        }],
        currentTime:Date().split(' ')
    }
    render() {
        return (
            <React.Fragment>
                <h4 className="m-0 pt-4 text-center">Add Screening</h4>
                <form className="mt-5 text-center">
                    <div className="form-group d-flex justify-content-center">
                        <label className="col-4 m-0 align-self-center text-left">Screen Number:</label>
                        <select className="col-6 form-control" id="formControlSelectScreen">
                            {this.state.screens.map((screenNumber)=>(
                                <option>{screenNumber}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <label className="col-4 m-0 align-self-center text-left">Movie:</label>
                        <select className="col-6 form-control" id="formControlSelectMovie">
                            {this.state.movies.map((movie)=>(
                                <option>{movie.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <label className="col-4 m-0 align-self-center text-left">Date:</label>
                        <input className="col-6 form-control" id="screenDate" type="date" required name="screenDate" defaultValue={this.state.currentTime[3]+"-"+this.months[this.state.currentTime[1]]+"-"+this.state.currentTime[2]}></input>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <label className="col-4 m-0 align-self-center text-left">Time:</label>
                        <input className="col-6 form-control" id="screenTime" type="time" required name="screenTime" defaultValue={this.state.currentTime[4]}></input>
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