import React from 'react';
import { MeasurementLayer, calculateDistance, calculateArea } from 'react-measurements';
import {CartoonGBMaps, CartoonGBImages} from './CartoonImages';


let imageToLoad = CartoonGBImages;
let x = 0; // global iterator

export default class Measure extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			measurements: []
		}
	}
	nextImage = () => {
		x++;
		if(x>=imageToLoad.length){x=0}
		this.onLoad();
		this.state.measurements= [];
		
	}
  onChange = (measurements) => {
		this.setState({ ...this.state, measurements })
	}

  measureLine = (line) => {
		return (calculateDistance(line, 200, 200).toFixed(1)) + " mm";
	}

  measureCircle = (circle) => {
  	return Math.round(calculateArea(circle, 200, 200)) + " mm²";
  }

  onLoad = () => {
    this.onImageBoundsChanged();
  };

  onImageBoundsChanged = (event) => {
    const imageBounds = this.image.getBoundingClientRect();
    this.setState({
      widthInPx: imageBounds.width,
      heightInPx: imageBounds.height
    });
  };

	render () {
		return (
			<div 
				style={{
          position: 'absolute',
					fontFamily: 'sans-serif',
					textAlign: "justify"
				}}
			>

				<img 
	        ref={e => (this.image = e)} //not sure why this is done this way?
					src={imageToLoad[x]} 
          onLoad={this.onLoad}
				/>
				
				<div style={{zIndex: -1}}>
					<MeasurementLayer
						measurements={this.state.measurements}
						widthInPx={this.state.widthInPx}
						heightInPx={this.state.heightInPx}
						onChange={this.onChange}
						measureLine={this.measureLine}
						measureCircle={this.measureCircle}
					/>
				</div>
				<div style={{
          position: 'absolute',
					fontFamily: 'sans-serif',
					textAlign: "center",
					
				}}>
					<p>
						<button position = "relative"  name="next" onClick={this.nextImage}>Next Image</button>
					</p>
				</div>
		
			</div>
			
		)
	}
}