import React,{Component} from 'react';
import './Navbar.css'


class Navbar extends Component {
	render(){
		return (
			<nav className="navbar navbar-expand-lg pt-0 pb-0">
				<a className="navbar-brand" href="/">
					<h4 className="m-0">Cinema</h4>
				</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto mt-0 mb-0">
						<li className="nav-item active">
							<a className="nav-link pt-3 pb-3" href="/">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link pt-3 pb-3" href="/">Link</a>
						</li>
						<li className="nav-item">
							<a className="nav-link pt-3 pb-3" href="/">adasasddsadasdasdsasd</a>
						</li>
					</ul>
					<ul className="navbar-nav ml-auto mr-4 mt-0 mb-0">
						<li className="nav-item">
							<a className="nav-link pt-3 pb-3">Login</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;