import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import GallBladder from './GallBladder';


export default class App extends React.Component {

	render() {
		return (
		  <Router>
				<div>
		      <Route component={Home} />
		      <Route path="/GallBladder/" component={GallBladder} />
				</div>
		  </Router>
		)
	}
}
