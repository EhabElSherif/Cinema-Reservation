import React,{Component} from 'react';
import Navbar from '../Navbar/Navbar';
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
				<Popup type={this.state.loginOrReg}></Popup>
			</div>
		);
	}
}

export default App;
