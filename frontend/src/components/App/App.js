import React,{Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import AllMovies from '../AllMovies/AllMovies';
import MovieDetails from '../MovieDetails/MovieDetails';
import AdminPanel from '../AdminPanel/AdminPanel';
import Popup from '../Popup/Popup';
import './App.css';

class App extends Component{
	state = {
		loginOrReg:''
	}

	handleLoginRegister = (loginOrReg)=>{
		this.setState({loginOrReg: loginOrReg});
	};

	render(){
		return (
			<Router>
				<div className="App">
					<Navbar loginOrRegister = {this.handleLoginRegister}></Navbar>
					<div className="mt-5">
						<Route exact path="/" component={AllMovies}></Route>
						<Route exact path="/movie/:id" component={MovieDetails}></Route>
						<Route exact path="/admin" component={AdminPanel}></Route>
					</div>
					<Popup type={this.state.loginOrReg}></Popup>
				</div>
			</Router>
		);
	}
}

export default App;
