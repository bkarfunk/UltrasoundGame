import React from 'react';
import ImageMapper from 'react-image-mapper';

import {CartoonGBMaps, CartoonGBImages} from './CartoonImages';
import {SonoGBMaps, SonoGBImages} from'./SonoGBImages'

  


let MapToLoad = [...CartoonGBMaps,...SonoGBMaps]; 
let imageToLoad = [...CartoonGBImages,...SonoGBImages];


let x = Math.floor(Math.random()*imageToLoad.length);
let y = Math.floor(Math.random()*MapToLoad[x].areas.length);
let AreaToFind = MapToLoad[x].areas[y].name;
let clickedAreaName='';

let message = '';

export default class Gallbladder extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			clickedAreaName: '',
		}
	}
	nextImage = () =>{
        
        x = Math.floor(Math.random()*imageToLoad.length);
        y = Math.floor(Math.random()*MapToLoad[x].areas.length);
        AreaToFind = MapToLoad[x].areas[y].name;
        message='';
//		if(x>=imageToLoad.length){x=0}
        this.setState({clickedAreaName: ''})
 //       isCorrect = false;
        
	  }
	areaClicked = (area, index, event) => {
        this.setState({clickedAreaName: area.name})
        if(area.name===AreaToFind)
        {
            message = "That is correct! You found the "+AreaToFind+". Click on Next Image to try again."
        }
        else
        {
            message = "No, that is not "+AreaToFind+", that is "+area.name+". Try again!"
        }
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
					<p>Time to test your knowledge! Click on the {AreaToFind}</p>
                    <p>{message}</p>
                    
				</header>
				<p><button name="next" onClick={this.nextImage}>Next Image</button></p>
			
			</div>
		)
	}
}