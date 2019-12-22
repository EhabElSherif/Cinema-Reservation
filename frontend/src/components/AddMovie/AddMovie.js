import React, { Component } from 'react'

class AddMovie extends Component {
    state = {
        genres:[
            {
                id:1,
                name:"Comedy"
            },{
                id:2,
                name:"Sci-Fi"
            },{
                id:3,
                name:"Horror"
            },{
                id:4,
                name:"Romance"
            },{
                id:5,
                name:"Action"
            },{
                id:6,
                name:"Thriller"
            },{
                id:7,
                name:"Drama"
            },{
                id:8,
                name:"Mystery"
            },{
                id:9,
                name:"Crime"
            },{
                id:10,
                name:"Animation"
            },{
                id:11,
                name:"Adventure"
            },{
                id:12,
                name:"Fantasy"
            },{
                id:13,
                name:"Superhero"
            }
        ]
    }
    render() {
        return (
            <React.Fragment>
                <h4 className="m-0 pt-4 text-center">Add Movie</h4>
                <form className="mt-5 text-center">
                    <div className="form-group d-flex justify-content-center">
                        <label className="col-4 m-0 align-self-center text-left">Movie Name:</label>
                        <input className="col-6 input-group-text text-left" type="text" required name="name" placeholder="Movie Name"></input>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <label className="col-4 m-0 align-self-center text-left">Genre:</label>
                        <select className="col-6 form-control" id="formControlSelectGenre">
                            {this.state.genres.map((genre)=>(
                                <option>{genre.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <label className="col-4 m-0 align-self-center text-left">Length<small>(in minutes)</small>:</label>
                        <input className="col-6 input-group-text text-left" type="number" required name="number" placeholder="Length" defaultValue="120"></input>
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