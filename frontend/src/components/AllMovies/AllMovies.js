import React,{Component} from 'react';
import axios from 'axios'
import MovieCell from './../MovieCell/MovieCell';
import './AllMovies.css';

class AllMovies extends Component{
    constructor(){
        super()
        this.state = {
            movies:[]
        }
        this.getMovies = this.getMovies.bind(this);
    }

    getMovies = ()=>{
        axios.get('/api/movies').then(response=>{
            this.setState({movies:response.data})
        });
    }

    renderMovies(){
        return (
            this.state.movies.map((movie)=>(
                <MovieCell movie={movie}></MovieCell>
            ))
        )
    }
    
    componentDidMount(){
        this.getMovies()
    }

	render(){
		return (
            <div className="row mx-auto px-5">
                {
                    this.state.movies.length === 0 ? 
                    <h1 className="w-100 text-center">No Movies To Show</h1>
                    :
                    this.renderMovies()
                }
            </div>
        );
	}
}

export default AllMovies;
