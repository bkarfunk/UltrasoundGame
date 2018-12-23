import React from 'react';
import ImageMapper from 'react-image-mapper';
import {CartoonGBMaps, CartoonGBImages} from './CartoonImages';

let imageToLoad = CartoonGBImages;
let MapToLoad = CartoonGBMaps;

let x = 0;

export default class Gallbladder extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			clickedAreaName: '',
		}
	}
	nextImage = () =>{
		x++;
		if(x>=imageToLoad.length){x=0}
		this.setState({clickedAreaName: ''})
	  }
	areaClicked = (area, index, event) => {
		this.setState({clickedAreaName: area.name})
	}

	render() {
		return ( 
			<div className="App"
			style={{
				position: 'relative',
				fontFamily: 'sans-serif',
				textAlign: "justify"
			}}>
				<header className="App-header">
					<ImageMapper src={imageToLoad[x]}  map={MapToLoad[x]}
						onClick={this.areaClicked}
					/>
					<p>Were going to learn what this is by clicking on stuff! Identify the portal vein, the CBD, and the GallBag</p>
					<p>{this.state.clickedAreaName}</p>
				</header>
				<p><button name="next" onClick={this.nextImage}>Next Image</button></p>
				
			</div>
		)
	}
}