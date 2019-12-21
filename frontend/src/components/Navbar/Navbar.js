import React,{Component} from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';


class Navbar extends Component {

	handleLoginOrRegister = (value) => {
		this.props.loginOrRegister(value);            
	}

	render(){
		return (
			<nav className="navbar navbar-expand-lg pt-0 pb-0">
				<Link className="navbar-brand" to="/"><h4 className="m-0">Cinema</h4></Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto mt-0 mb-0">
						<li className="nav-item active">
							<Link className="nav-link pt-3 pb-3" to="/">Home</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link pt-3 pb-3" to="/">Link</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link pt-3 pb-3" to="/">adasasddsadasdasdsasd</Link>
						</li>
					</ul>
					<ul className="navbar-nav ml-auto mr-4 mt-0 mb-0">
						<li className="nav-item mx-1">
						<Link to="/admin"><button className="btn btn-outline-danger nav-link mx-auto admin-btn">Admin</button></Link>
						</li>
						<li className="nav-item mx-1">
							<button className="btn btn-primary nav-link mx-auto login-btn" onClick={()=>this.handleLoginOrRegister("Login")}>Login</button>
						</li>
						<li className="nav-item mx-1">
							<button className="btn btn-success nav-link mx-auto signup-btn" onClick={()=>this.handleLoginOrRegister("Signup")}>Signup</button>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
