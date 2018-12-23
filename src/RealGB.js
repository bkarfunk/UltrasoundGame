import React from 'react';
import ImageMapper from 'react-image-mapper';
import { MeasurementLayer, calculateDistance, calculateArea } from 'react-measurements';
import {SonoGBMaps, SonoGBImages} from './SonoGBImages'

let MapToLoad = SonoGBMaps;
let imageToLoad = SonoGBImages;

let x = 0;

export default class RealGB extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
            clickedAreaName: '',
            measurements: []
        }
        
	}
	nextImage = () =>{
		x = Math.floor(Math.random()*imageToLoad.length);
		//y = Math.floor(Math.random()*MapToLoad[x].areas.length);
		this.setState({clickedAreaName: ''})
	  }
	areaClicked = (area, index, event) => {
		this.setState({clickedAreaName: area.name})
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

  onImageBoundsChanged = (event) => {
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
				style={{
				position: 'absolute',
				fontFamily: 'sans-serif',
				justifyContent: 'center'
				}}>

					<div style={{
						position: 'relative',
						justifyContent: 'center'
					}}>
						<p>
							<div style = {{zIndex: 1}}>
								<button name="next" onClick={this.nextImage}>Next Image in Random Order</button>
								<p>Lets look at a real picture</p>
								<p>That is the: {this.state.clickedAreaName}</p>
							</div>
						</p>
					</div>  
					<div  style={{position: 'relative'}}>         
                <MeasurementLayer
                    measurements={this.state.measurements}
                    widthInPx={this.state.widthInPx}
                    heightInPx={this.state.heightInPx}
                    onChange={this.onChange}
                    measureLine={this.measureLine}
                    measureCircle={this.measureCircle}
                    />
                <ImageMapper 
                    src={imageToLoad[x]}  
                    map={MapToLoad[x]}
										onClick={this.areaClicked}
								/>
							
								<img 
                    ref={e => (this.image = e)}
                    src={imageToLoad[x]} 
                    useMap={MapToLoad[x]}
                    onLoad={this.onLoad}
                    
                	/>
									</div>
       
					
					</div>
			</div>
		)
	}
}