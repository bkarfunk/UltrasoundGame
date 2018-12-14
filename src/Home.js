import React from 'react';
import { Link } from "react-router-dom";

export default class Home extends React.Component {

	render() {
		return (
			<div>
				<h2>Home</h2>
				<Link to="/GallBladder/">Gallbladder</Link>
				<p></p>
				<Link to="/Measure/">Measure</Link>
				<p></p>
				<Link to="/RealGB">SonoGB</Link>
			
			</div>
		)
	}
}
