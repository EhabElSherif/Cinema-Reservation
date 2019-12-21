import React,{Component} from 'react';
import MovieCell from './../MovieCell/MovieCell';
import './AllMovies.css';

class AllMovies extends Component{
	state = {
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
        }]
    }

	render(){
		return (
            <div className="row mx-auto">
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
