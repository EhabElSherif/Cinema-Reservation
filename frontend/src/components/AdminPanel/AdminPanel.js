import React,{Component} from 'react';
import './AdminPanel.css';
import AddMovie from '../AddMovie/AddMovie';
import AddScreening from '../AddScreening/AddScreening';
import axios from 'axios'

class AdminPanel extends Component{

    constructor(){
        super()
        this.state = {
            movies:[],
            genres:[],
            screens:[]
        }
        this.getMovies = this.getMovies.bind(this);
        this.getGenres = this.getGenres.bind(this);
        this.getScreens = this.getScreens.bind(this);
    }

    getGenres = () =>{
        axios.get('/api/genres').then(response=>{
            this.setState({genres:response.data});
        });
    }
    
    getScreens = () =>{
        axios.get('/api/screens').then(response=>{
            this.setState({screens:response.data});
        });
    }
    
    getMovies = ()=>{
        axios.get('/api/movies').then(response=>{
            this.setState({movies:response.data})
        });
    }

    componentDidMount(){
        this.getGenres()
        this.getMovies()
        this.getScreens()
    }

    render(){
        return(
            <div className="container row m-auto">
                <div className="col-6 bg-light shadow" style={{transform:"scaleX(0.9)"}}>
                    <AddMovie genres={this.state.genres}></AddMovie>
                </div>
                <div className="col-6 bg-light shadow" style={{transform:"scaleX(0.9)"}}>
                    <AddScreening screens={this.state.screens} movies={this.state.movies}></AddScreening>
                </div>
            </div>
        );
    }
}

export default AdminPanel;