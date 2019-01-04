import React from 'react';
import ImageMapper from 'react-image-mapper';
import { MeasurementLayer, calculateDistance, calculateArea } from 'react-measurements';
import SonoGBTwoStonesGif from './Images/GB/SonoImages/SonoGBTwoStonesOneInNeck.gif'
import GifPlayer from 'react-gif-player';

//let MapToLoad = SonoGBTwoStonesGifMAP
let imageToLoad = SonoGBTwoStonesGif

let x = 0;

export default class TestGif extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
            clickedAreaName: '',
            measurements: []
        }
        
	}
	/*nextImage = () =>{
		x = Math.floor(Math.random()*imageToLoad.length);
		//y = Math.floor(Math.random()*MapToLoad[x].areas.length);
		this.setState({clickedAreaName: ''})
	  }*/
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
								<p>Lets look at a real picture</p>
						    </div>
						</p>


					</div>  

                    <img 
                        src={imageToLoad}
                    />
                        			
					</div>
			</div>
		)
	}
}