import React, { Component } from 'react'
import axios from 'axios';

class AddMovie extends Component {
    constructor(props){
        super(props)    
        this.state = {
            name:"",
            length:"",
            genres:[],
            img:""
        }
        this.submitForm = this.submitForm.bind(this)
    }

    submitForm = (event)=>{
        event.preventDefault()
        let data ={
            name:this.state.name,
            length:this.state.length,
            img:this.state.img,
            genres:this.state.genres
        }
        let genresIDx = this.state.genres.reduce((out, bool, index) =>
                bool ? out.concat(index+1) : out, []
        )
        data.genres=genresIDx;

        axios.post('/api/movies',data).then((response)=>{
            alert(response.status)
        })
    }

    handleGenre = (event,idx)=>{
        let genres = this.state.genres
        genres[idx] = event.target.checked
        this.setState({genres:genres})
    }

    render() {
        if (!this.props.genres) return null
        return (
            <React.Fragment>
                <h4 className="m-0 pt-4 text-center">Add Movie</h4>
                <form className="mt-5 text-center" onSubmit={this.submitForm}>
                    <div className="form-group d-flex justify-content-center">
                        <label className="col-4 m-0 align-self-center text-left">Movie Name:</label>
                        <input className="col-6 input-group-text text-left" type="text" required name="name" placeholder="Movie Name" value={this.state.name} onChange={(event)=>this.setState({name:event.target.value})}></input>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                    <label className="col-4 m-0 align-self-center text-left">Genre:</label>
                    {/* <select id="formControlSelectGenre" className="col-6 selectGenere selectpicker form-control" style={{display:"block"}}>
                    {this.props.genres.map((genre)=>(
                            <option>{genre.name}</option>
                        ))}
                    </select> */}
                    <div className="col-6 row">
                        {
                        this.props.genres.map((genre,idx)=>(
                            <div className="col-6 p-0 text-left">
                                <input type="checkbox" value={this.state.genres[idx+1]} onChange={(event)=>this.handleGenre(event,idx)}></input>
                                <label>{genre.name}</label>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <label className="col-4 m-0 align-self-center text-left">Length<small>(in minutes)</small>:</label>
                        <input className="col-6 input-group-text text-left" type="number" required name="length" placeholder="Length" defaultValue="120"  value={this.state.length} onChange={(event)=>this.setState({length:event.target.value})}></input>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <label className="col-4 m-0 align-self-center text-left">Movie Poster Directory:</label>
                        <input className="col-6 input-group-text text-left" type="text" required name="poster" placeholder="Movie Poster"  value={this.state.img} onChange={(event)=>this.setState({img:event.target.value})}></input>
                    </div>
                    <div className="mt-4">
                        <button type="submit" className="btn btn-primary mb-3">Submit</button>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

export default AddMovie;