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
                {this.props.movieScreens ? 
                    <div className="screening">
                    {this.props.movieScreens.map((value)=>(
                        <div className="row m-0">
                            <div className="col-2 d-flex align-items-center">{value["screen_id"]}</div>
                            <div className="col-10">
                                <div className="d-flex my-3">
                                    <div className="col-5 py-2">{value['date']}</div>
                                    <div className="col-5 py-2">{value['time']}</div>
                                    <Link to={"/movie/"+this.props.movieID+"/reservation/"+value['screen_id']} className="col-2 btn btn-success">Reserve</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>            
                :
                <h4 className="mt-4 text-center">No screens at this time</h4>
                }
            </React.Fragment>
        );
	}
}

export default MovieScreening;
