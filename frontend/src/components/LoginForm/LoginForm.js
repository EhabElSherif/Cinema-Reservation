import React,{Component} from 'react';
import './LoginForm.css'

class LoginForm extends Component {
	render(){
		return (
            <form className="text-center" action="">
                <h4 className="pt-2 pb-3">{this.props.name}</h4>
                <input className="col-10 mt-1 mb-1 input-group-text d-inline text-left" type="email" required name="email" placeholder="Email"></input>
                <input className="col-10 mt-1 mb-1 input-group-text d-inline text-left" type="password" required name="password" placeholder="Password"></input>
                <button className="btn btn-primary button col-10 mt-1 mb-3 pb-2">{this.props.name}</button>
            </form>
    )};
}

export default LoginForm;
