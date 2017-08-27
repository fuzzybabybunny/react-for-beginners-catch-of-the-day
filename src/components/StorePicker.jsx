import React from 'react';
import { getFunName } from '../helpers.js'

// There are no commas after each item because ES6 classes do no have commas.
// But object literals still do. This is not an object literal.

class StorePicker extends React.Component{
	
	// constructor(){

		/* 
		constructor is the code that's initially run when the StorePicker 
		component is created. 
		super() first creates a React component, then extends it to StorePicker
		by adding on our custom methods, and allows us to use 'this'
		*/ 

		// super();
		/*
		'this' is currently empty because constructor() is the first thing that runs when the component is created. goToStore and render don't exist yet. 'this' is pretty much empty.
		It creates a key called goToStore on 'this' and sets it equal to the StorePicker object so that `this` is the StorePicker object when used in goToStore. 
		*/
		// this.goToStore = this.goToStore.bind(this);
	// }

	goToStore(event){
		event.preventDefault();
		// grab text from form box
		const storeId = this.storeInput.value;
		// transition from / to /store/:storeId
		this.context.router.transitionTo(`/store/${storeId}`);
		
	}

	// render is bound to the StorePicker component, but other functions inside
	// the StorePicker class are not, which is why 'this' is null by default 
	// for other functions besides render
	// (e) => this.goToStore(e) avoids needing to bind 'this' in a constructor function
	render(){
		return (
			<form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
				<h2>Please Enter a Store</h2>
				{/* ref =  puts a reference to this input on the class itself */}
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}}/>
				<button type="submit">Visit Store -></button>
			</form>
		)
	}
};

StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker;

/*

This is the old ES5 way of creating classes in React. In this case, 'this'
is the same in all methods. It's bound to to StorePicker object.

var storePicker = React.createClass({
	
	goToStore(){
		this;
	},

	render(){
		this;
	}

});

*/