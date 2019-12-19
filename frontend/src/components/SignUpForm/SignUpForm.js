import React,{Component} from 'react';
import './SignUpForm.css'

class SignUpForm extends Component {
	render(){
		return (
            <form className="text-center" action="">
                <h4 className="pt-2 pb-3">{this.props.name}</h4>
                <div className="row justify-content-center">
                    <input className="col-5 mt-1 mb-1 input-group-text text-left" type="text" required name="fname" placeholder="First Name"></input>
                    <input className="col-5 mt-1 mb-1 input-group-text text-left" type="text" required name="lname" placeholder="Last Name"></input>
                </div>
                <div className="row justify-content-center">
                    <input className="col-10 mt-1 mb-1 input-group-text text-left" type="text" required name="username" placeholder="Username"></input>
                </div>
                <div className="row justify-content-center">
                    <input className="col-10 mt-1 mb-1 input-group-text text-left" type="email" required name="email" placeholder="E-mail"></input>
                </div>
                <div className="row justify-content-center">
                    <input className="col-5 mt-1 mb-1 input-group-text text-left" type="password" required name="password" placeholder="Password"></input>
                    <input className="col-5 mt-1 mb-1 input-group-text text-left" type="password" required name="password" placeholder="Confirm Password"></input>
                </div>
                <div className="row justify-content-center">
                    <button className="btn btn-primary button col-3 mt-1 mb-3 pb-2">{this.props.name}</button>
                </div>
            </form>
    )};
}

export default SignUpForm;
