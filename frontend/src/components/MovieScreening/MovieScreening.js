import React,{Component} from 'react';
import './MovieScreening.css';
import { Link } from 'react-router-dom';

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
                            {value['dateTime'].map((dateTime)=>(
                                <div className="d-flex my-3">
                                    <div className="col-5 py-2">{dateTime['date']}</div>
                                    <div className="col-5 py-2">{dateTime['time']}</div>
                                    <Link to={"/movie/"+this.props.movieID+"/reservation/"+value['screenNumber']} className="col-2 btn btn-success">Reserve</Link>
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
