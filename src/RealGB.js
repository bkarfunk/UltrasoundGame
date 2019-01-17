import React from 'react';
import ImageMapper from 'react-image-mapper';
import { MeasurementLayer, calculateDistance, calculateArea } from 'react-measurements';
import {SonoGBNormalMaps, SonoGBNormalImages, SonoGBAbNormalMaps, SonoGBAbNormalImages} from './SonoGBImages'

let MapToLoad = [...SonoGBNormalMaps,...SonoGBAbNormalMaps];
let imageToLoad = [...SonoGBNormalImages,...SonoGBAbNormalImages];

let x = 0;

export default class RealGB extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
            clickedAreaName: '',
            measurements: []
        }
        
	}
	enterArea(area) {
		this.setState();
	}
	leaveArea(area) {
		this.setState();
	}
	nextImage = () =>{
		x = Math.floor(Math.random()*imageToLoad.length); // select a random image from the array of uploaded images
		this.setState({clickedAreaName: ''})
		this.state.measurements= [];
	  }
	areaClicked = (area, index, event) => {
		//this.setState({clickedAreaName: area.name})
	}
    onChange = (measurements) => {
		this.setState({ ...this.state, measurements })
	}

  measureLine = (line) => {
		return (calculateDistance(line, 228, 228).toFixed(1)) + " mm";
	}

  measureCircle = (circle) => {
  	return Math.round(calculateArea(circle, 200, 200)) + " mm²";
  }

  onLoad = () => {
    this.onImageBoundsChanged();
  };

  onImageBoundsChanged = () => {
    const imageBounds = this.image.getBoundingClientRect();
    this.setState({
      widthInPx: imageBounds.width,
      heightInPx: imageBounds.height
    });
  };
	render() {
		return ( 
		<div >
			<div 
				>

					
						<p>
								<button name="next" onClick={this.nextImage}>Next Image in Random Order</button>
								<p>Lets look at a real picture</p>
								
						</p>
					
						</div>  
						<div style={{
				position: 'absolute',
				textAlign: 'justify'
				}}>
								
									<img 
										ref={e => (this.image = e)}
										src={imageToLoad[x]} 
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
       
					
			
			</div>
		)
	}
}