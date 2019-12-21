import React,{Component} from 'react';
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
			<div className="App">
				<Navbar loginOrRegister = {this.handleLoginRegister}></Navbar>
            	<div className="m-4 mt-4">
					{/* <AllMovies></AllMovies> */}
					<MovieDetails></MovieDetails>
					{/* <AdminPanel></AdminPanel> */}
				</div>
				<Popup type={this.state.loginOrReg}></Popup>
			</div>
		);
	}
}

export default App;
