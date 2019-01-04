import React from 'react';
import { Link } from "react-router-dom";

export default class Home extends React.Component {

	render() {
		return (
			<div style = {{
				position: 'relative',
				textAlign: 'center'
				}}>
				<h2>Home</h2>
				<Link to="/GallBladder/">Cartoon Gallbladder</Link>
				<p></p>
				<Link to="/Measure/">Measure a GB</Link>
				<p></p>
				<Link to="/RealGB/">SonoGB Images</Link>
				<p></p>
				<Link to="/Test/">Take a Test</Link>
				<p></p>
				<Link to="/TestGif/">Testing how gifs work</Link>
				<p></p>
				<Link to="/TestClickAreaThenMeasure/">Click then measure test</Link>
			
			</div>
		)
	}
}
