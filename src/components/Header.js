import React from 'react';


const Header = (props) => {
	return(
		<header className="top">
			<h1>
				Catch 
				<span className="ofThe">
					<span className="of">of</span>
					<span className="the">the</span>
				</span>
				Day
			</h1>
			<h3 className="tagline"><span>{props.tagline}</span></h3>
		</header>
	)
}

// Equivalent to the above. First argument is always props.
// This is a 'stateless function' because it's not dynamic.

// var Header = function(test){
// 	return(
// 		<header className="top">
// 			<h1>
// 				Catch 
// 				<span className="ofThe">
// 					<span className="of">of</span>
// 					<span className="the">the</span>
// 				</span>
// 				Day
// 			</h1>
// 			<h3 className="tagline"><span>{test.tagline}</span></h3>
// 		</header>
// 	)
// }


export default Header;