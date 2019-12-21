import React,{Component} from 'react';
import './SignUpForm.css'

class SignUpForm extends Component {
	render(){
		return (
            <form className="text-center">
                <h4 className="text-center pt-2 pb-3">{this.props.name}</h4>
                <div className="form-row">
                    <div className="form-group col-6 text-left">
                        <label htmlFor="fName">First Name:</label>
                        <input className="form-control" type="text" required name="fname" placeholder="First Name"></input>
                    </div>
                    <div className="form-group col-6 text-left">
                        <label htmlFor="lName">Last Name:</label>
                        <input className="form-control" type="text" required name="lname" placeholder="Last Name"></input>
                    </div>
                </div>
                <div className="form-group col-12 px-0 text-left">
                    <label htmlFor="username">Username:</label>
                    <input className="form-control" type="text" required name="username" placeholder="Username"></input>
                </div>
                <div className="form-group col-12 px-0 text-left">
                    <label htmlFor="email">Email:</label>
                    <input className="form-control" type="email" required name="email" placeholder="Email"></input>
                </div>
                <div className="form-row">
                    <div className="form-group col-6 text-left">
                        <label htmlFor="password">Password:</label>
                        <input className="form-control" type="password" required name="password" placeholder="Password"></input>
                    </div>
                    <div className="form-group col-6 text-left">
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input className="form-control" type="password" required name="confirmPassword" placeholder="Confirm Password"></input>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mb-3">{this.props.name}</button>
            </form>
    )};
}

export default SignUpForm;
