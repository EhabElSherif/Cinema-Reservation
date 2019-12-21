import React,{Component} from 'react';
import './AdminPanel.css';
import AddMovie from '../AddMovie/AddMovie';
import AddScreening from '../AddScreening/AddScreening';

class AdminPanel extends Component{
    
    render(){
        return(
            <div className="container row m-auto">
                <div className="col-6 bg-light shadow" style={{transform:"scaleX(0.9)"}}>
                    <AddMovie></AddMovie>
                </div>
                <div className="col-6 bg-light shadow" style={{transform:"scaleX(0.9)"}}>
                    <AddScreening></AddScreening>
                </div>
            </div>
        );
    }
}

export default AdminPanel;