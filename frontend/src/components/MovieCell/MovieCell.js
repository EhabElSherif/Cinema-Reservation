import React,{Component} from 'react';
import './MovieCell.css';

class MovieCell extends Component{
	render(){
		return (
            <div className="col-3 text-center p-0 movie-cell">
                <img src={this.props.movie.img} style={{width:"inherit",height:"inherit"}} alt={this.props.movie.name}></img>
                <div className="py-3" style={{position:"relative",color:"white",backgroundColor:"rgba(0,0,0,0.3)",transform:"translateY(-100%)"}}>
                    <h4>{this.props.movie.name}</h4>
                    <h5>
                        {this.props.movie.genre.map((value,idx)=>(
                            (idx !== this.props.movie.genre.length-1) ? value+ ", " : value+""
                        ))
                        }
                    </h5>
                </div>
            </div>
        );
	}
}

export default MovieCell;
