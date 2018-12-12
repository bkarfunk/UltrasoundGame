import React from 'react';
import ReactDOM from 'react-dom';
import { MeasurementLayer, calculateDistance, calculateArea } from 'react-measurements';
import normal from './Images/GB/Normal.png';

export default class Measure extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			measurements: []
		}
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
				}}
			>
				<img 
	        ref={e => (this.image = e)}
					src={normal} 
          onLoad={this.onLoad}
				/>
		    <MeasurementLayer
		      measurements={this.state.measurements}
          widthInPx={this.state.widthInPx}
          heightInPx={this.state.heightInPx}
		      onChange={this.onChange}
		      measureLine={this.measureLine}
		      measureCircle={this.measureCircle}
		    />
			</div>
		)
	}
}