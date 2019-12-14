import React,{Component} from 'react';
import Navbar from '../Navbar/Navbar';
import Popup from '../Popup/Popup';
import './App.css';

class App extends Component{
	render(){
		return (
			<div className="App">
				<Navbar></Navbar>
				<Popup></Popup>
			</div>
		);
	}
}

export default App;
