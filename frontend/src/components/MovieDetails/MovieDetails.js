import React,{Component} from 'react';
import './MovieDetails.css';
import MovieScreening from './../MovieScreening/MovieScreening';

class MovieDetails extends Component{
	state={
		id:1,
		name: "Joker",
		genre: ["Action","Drama"],
		length: "150mins",
		img: "/img/1.jpg",
		screening: [
			{
				screenNumber: 1,
				dateTime:[{
					date: "12-12-2019",
					time: "21:00PM"
				},{
					date: "12-12-2019",
					time: "21:00PM"
				}]
				
			},{
				screenNumber: 2,
				dateTime:[{
					date: "12-12-2019",
					time: "21:00PM"
				},{
					date: "12-12-2019",
					time: "21:00PM"
				}]
			},{
				screenNumber: 3,
				dateTime:[{
					date: "12-12-2019",
					time: "21:00PM"
				},{
					date: "12-12-2019",
					time: "21:00PM"
				}]
			}
		],
	}
    render(){
		return (
			<div className="row m-0  card-body px-5">
				<div className="col-3 p-0 movie-poster">
					<img src={this.state.img} alt={this.state.name} style={{width:"inherit",height:"inherit"}}></img>
				</div>  
				<div className="col-9 pl-5">
					<h2 className="mb-4">{this.state.name}</h2>
					<p>
						Genre: {this.state.genre.map((value,idx)=>(
                            (idx !== this.state.genre.length-1) ? value+ ", " : value+""
                        ))
                        }
					</p>
					<p>
						Length: {this.state.length}
					</p>
					<MovieScreening movieID={this.state.id} movieScreens={this.state.screening}></MovieScreening>
				</div>
			</div>
        );
	}
}

export default MovieDetails;
