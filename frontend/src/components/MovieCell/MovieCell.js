import React,{Component} from 'react';
import './MovieCell.css';
import { Link } from 'react-router-dom';

class MovieCell extends Component{
	render(){
		return (
            <Link to={"/movie/"+this.props.movie.id} className="col-3 text-center p-0 movie-cell">
                <img src={this.props.movie.img} style={{width:"inherit",height:"inherit"}} alt={this.props.movie.name}></img>
                <div className="py-3 w-100" style={{position:"absolute",color:"white",backgroundColor:"rgba(0,0,0,0.3)",top:"100%",transform:"translateY(-100%)"}}>
                    <h4>{this.props.movie.name}</h4>
                    {/* <h5>
                        {
                            this.props.movie.genres ?
                            this.props.movie.genres.map((value,idx)=>(
                                (idx !== this.props.movie.genre.length-1) ? value+ ", " : value+""
                            ))
                            :
                            ""
                        }
                    </h5> */}
                </div>
            </Link>
        );
	}
}

export default MovieCell;
