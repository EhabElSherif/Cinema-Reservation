import React,{Component} from 'react';
import './Popup.css'
import LoginForm from './../LoginForm/LoginForm'
import SignUpForm from './../SignUpForm/SignUpForm'

class Popup extends Component {
	render(){
		return (
            <div className="row popup-window m-0">
                <div className="col"></div>
                <div className="col-4 popup-form">
                    {this.props.type === 'Login' ? (
                        
                        <LoginForm name = {this.props.type}></LoginForm>
                        
                        ) : (
                            
                        <SignUpForm name = {this.props.type}></SignUpForm>
                    )}
                </div>
                <div className="col"></div>
            </div>
		);
	}
}

export default Popup;
