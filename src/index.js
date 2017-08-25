// let's go!
import React from 'react'; //creates variable called 'React' that contains 'react' from package.json
import { render } from 'react-dom'; //imports only the 'render' object in 'react-dom'
import './css/style.css'; //no longer need to add css to the HTML

import {BrowserRouter, Match, Miss} from 'react-router';

import StorePicker from './components/StorePicker';
import App from './components/App';
import NotFound from './components/NotFound';

// <BrowserRouter> cannot contain multiple tags, so wrap everything in one <div>
const Root = () => {
	return(
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={StorePicker}/>
				<Match pattern="/store/:storeId" component={App}/>
				{/* in JSX, variables must be in curly brackets */}
				<Miss component={NotFound}/>
			</div>
		</BrowserRouter>
	)
}

render(<Root/>, document.querySelector('#main'));