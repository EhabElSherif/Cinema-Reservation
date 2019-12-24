import React,{Component} from 'react';
import './MovieDetails.css';
import MovieScreening from './../MovieScreening/MovieScreening';
import axios from 'axios';

class MovieDetails extends Component{
	constructor(props){
		super(props)
		this.state = {
			movie:{
				id:null,
				name: "",
				genre: [],
				length: null,
				img: ""
			}
		}
		this.getMovie = this.getMovie.bind(this)
	}
	getMovie = () => {
		axios.get('/api/movies/'+this.props.match.params.id).then((response)=>{
			let movie = response.data.movie;
			let genres = response.data.genres;
			let screens = response.data.screens;
			let screening = []
			response.data.screens.map((screen)=>{
				screening.push(screen.pivot)
			})
			movie = {
				id:movie.id,
				name:movie.name,
				length:movie.length,
				img:movie.img,
				genres:genres,
				screens:screening
			}
			this.setState({movie:movie})
		});
	}

	componentDidMount(){
		this.getMovie()
	}

    render(){
        if (!this.state.movie.genres) return null
		return (
			<div className="row m-0  card-body px-5">
				<div className="col-3 p-0 movie-poster">
					<img src={this.state.movie.img} alt={this.state.movie.name} style={{width:"inherit",height:"inherit"}}></img>
				</div>  
				<div className="col-9 pl-5">
					<h2 className="mb-4">{this.state.movie.name}</h2>
					<p>
						Genres: {this.state.movie.genres.map((value,idx)=>(
                            (idx !== this.state.movie.genres.length-1) ? value.name+ ", " : value.name+""
                        ))
                        }
					</p>
					<p>
						Length: {this.state.movie.length} mins
					</p>
					<MovieScreening movieID={this.state.movie.id} movieScreens={this.state.movie.screens}></MovieScreening>
				</div>
			</div>
        );
	}
}

export default MovieDetails;
