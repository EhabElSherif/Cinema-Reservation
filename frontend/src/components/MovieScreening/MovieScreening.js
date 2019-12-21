import React,{Component} from 'react';
import './MovieScreening.css';

class MovieScreening extends Component{
    
    render(){
		return (
            <React.Fragment>
                <div className="screening-header row m-0">
                    <div className="col-2 d-flex align-items-center">Screen Number</div>
                    <div className="col-10">
                        <div className="d-flex my-3">
                            <div className="col-5 px-0 py-2">Date</div>
                            <div className="col-5 px-0 py-2">Time</div>
                        </div>
                    </div>
                </div>
                <div className="screening">
                    {this.props.movieScreens.map((value)=>(
                        <div className="row m-0">
                            <div className="col-2 d-flex align-items-center">{value["screenNumber"]}</div>
                            <div className="col-10">
                            {value['dateTime'].map((value)=>(
                                <div className="d-flex my-3">
                                    <div className="col-5 py-2">{value['date']}</div>
                                    <div className="col-5 py-2">{value['time']}</div>
                                    <button className="col-2 btn btn-success">Reserve</button>
                                </div>
                            ))}
                            </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        );
	}
}

export default MovieScreening;
