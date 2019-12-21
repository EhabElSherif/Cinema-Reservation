import React,{Component} from 'react';
import './LoginForm.css'

class LoginForm extends Component {
	render(){
		return (
            <form className="text-center">
                <h4 className="pt-2 pb-3">{this.props.name}</h4>
                <div className="form-group">
                    <input type="email" className="form-control" id="inputEmail" required placeholder="Enter email"></input>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="inputPassword" required placeholder="Password"></input>
                </div>
                <button type="submit" className="btn btn-primary mb-3">{this.props.name}</button>
            </form>
        )
    };
}

export default LoginForm;
