import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import GallBladder from './GallBladder';
import Measure from './Measure';
import RealGB from './RealGB'
import Test from './Test'
import TestGif from './TestGif.js'
import TestClickAreaThenMeasure from './TestClickAreaThenMeasure.js'

export default class App extends React.Component {

	render() {
		return (
			<div style = {{
				position: 'relative',
				textAlign: 'center'
				}}>
		  <Router>
				<div>
		      <Route component={Home} />
		      
			  <Route path="/GallBladder/" component={GallBladder} /> 
			  
		      <Route path="/Measure/" component={Measure} />

			  <Route path="/RealGB/" component={RealGB} />

			  <Route path="/Test/" component={Test} />

			  <Route path="/TestGif/" component={TestGif} />

			  <Route path="/TestClickAreaThenMeasure/" component={TestClickAreaThenMeasure} />
				</div>
		  </Router>
		  
		  
		  </div>
		)
	}
}
