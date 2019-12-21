import React,{Component} from 'react';
import MovieCell from './../MovieCell/MovieCell';
import './AllMovies.css';

class AllMovies extends Component{
	state = {
        movies:[{
            id:1,
            name: "Joker",
            genre: ["Drama"],
            screen: 1,
            img: "img/1.jpg"
        },{
            id:2,
            name: "Men In Black",
            genre: ["Action"],
            screen : 2,
            img: "img/3.jpg"
        },{
            id:3,
            name: "صعيدي في الجامعة الأميريكية",
            genre: ["Comedy"],
            screen : 2,
            img: "img/6.jpg"
        },{
            id:4,
            name: "Alaadin",
            genre: ["Sci-Fi","Romance"],
            screen : 3,
            img: "img/4.jpg"
        },{
            id:5,
            name: "La La Land",
            genre: ["Romance"],
            screen : 1,
            img: "img/6.jpg"
        },{
            id:6,
            name: "La La Land",
            genre: ["Romance"],
            screen : 1,
            img: "img/6.jpg"
        }]
    }

	render(){
		return (
            <div className="row mx-auto px-5">
                {
                this.state.movies.map((movie)=>(
                    <MovieCell movie={movie}></MovieCell>
                ))
                }
            </div>
        );
	}
}

export default AllMovies;
