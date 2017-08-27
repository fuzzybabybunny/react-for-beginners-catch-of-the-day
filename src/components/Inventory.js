import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component{
	render(){
		return(
			<div>
				<h2>Inventory</h2>
			 {/* 
			     addFish props comes from when we did 
			     <Inventory addFish={this.addFish}/> in App.js 
			     We sent the addFish method in App to Inventory as a prop
			 */}
				<AddFishForm addFish={this.props.addFish}/>
			</div>
		)
	}
}

export default Inventory;