import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import GallBladder from './GallBladder';
import Measure from './Measure';


export default class App extends React.Component {

	render() {
		return (
			<div>
		  <Router>
				<div>
		      <Route component={Home} />
		      
			  <Route path="/GallBladder/" component={GallBladder} /> 
			  
		      <Route path="/Measure/" component={Measure} />
				</div>
		  </Router>
		  
		  
		  </div>
		)
	}
}
