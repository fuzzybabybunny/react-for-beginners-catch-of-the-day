import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component{

	constructor(){
		super();

		this.addFish = this.addFish.bind(this);
		// set initial state, called getInitialState in React.createComponent
		this.state = {
			fishes: {},
			order: {}
		};

		this.loadSamples = this.loadSamples.bind(this);
	}

	addFish(fish){
		/* update our state, fish is coming from the AddFishForm, a child component,
			 so you need to find a way to send fish from a child component to the parent.
		   When you update state, first create a copy of your current state and 
			 then update your state. Prevents a race condition. 
			 ... is the spread operator. Takes every item from our object fishes
			 and spreads it into fishes
		*/
		const fishes = {...this.state.fishes};
		// add in new fish
		const timestamp = Date.now();
		fishes[`fish-${timestamp}`] = fish;
		// set state
		this.setState({fishes: fishes});
	}

	loadSamples(){
		this.setState({
			fishes: sampleFishes
		})
	}

	render(){
		return(
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market"/>
					<ul className="list-of-fishes">
						{
							Object
								.keys(this.state.fishes)
								.map(key => <Fish key={key} details={this.state.fishes[key]}/>)
						}
					</ul>
				</div>
				<Order/>
				<Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
			</div>
		)
	}
}

export default App;