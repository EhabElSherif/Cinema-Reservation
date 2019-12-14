import React,{Component} from 'react';
import './Popup.css'


class Popup extends Component {
    state = {
        type:"login"
    };
	render(){
		return (
            <div className="row popup-window m-0">
                <div className="col"></div>
                <div className="col-4 login-form">
                    <form className="text-center" action="">
                        <h4 className="pt-2 pb-3">Login</h4>
                        <input className="col-10 mt-1 mb-1 input-group-text d-inline text-left" type="email" required name="email" placeholder="Email"></input>
                        <input className="col-10 mt-1 mb-1 input-group-text d-inline text-left" type="password" required name="password" placeholder="Password"></input>
                        <button className="btn btn-primary button col-10 mt-1 mb-3 pb-2">Login</button>
                    </form>
                </div>
                <div className="col"></div>
            </div>
		);
	}
}

export default Popup;
