import React, { Component } from 'react'

class AddMovie extends Component {
    state = {
        genres:[
            {
                id:1,
                name:"Action"
            },{
                id:2,
                name:"Drama"
            },{
                id:3,
                name:"Comedy"
            },{
                id:4,
                name:"Horror"
            },{
                id:5,
                name:"Thriller"
            },{
                id:6,
                name:"Sci-Fi"
            },
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
                {/* <form className="mt-5">
                    <div className="row m-0">
                        <div className="col-8">
                            <div className="row m-0">
                                <div className="col-1"></div>
                                <label className="col-3 m-0 align-self-center text-left">Movie Length:</label>
                                <input className="col-6 my-2 input-group-text text-left" type="text" required name="length" placeholder="Length"></input>
                                <div className="col"></div>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary button col-3 mt-1 mb-3 pb-2">Add Movie</button>
                </form> */}
            </React.Fragment>
        )
    }
}

export default AddMovie;