import React from 'react';
import ImageMapper from 'react-image-mapper';

import {SonoGBNormalMaps, SonoGBNormalImages, SonoGBAbNormalMaps, SonoGBAbNormalImages} from './SonoGBImages'

let MapToLoad = [...SonoGBNormalMaps,...SonoGBAbNormalMaps];
let imageToLoad = [...SonoGBNormalImages,...SonoGBAbNormalImages];



let x = Math.floor(Math.random()*imageToLoad.length);
let y = Math.floor(Math.random()*MapToLoad[x].areas.length);
let AreaToFind = MapToLoad[x].areas[y].name;
let clickedAreaName='';
let answered = false;
let numCorrect = 0;
let totalQuestions = 0;
//window.alert(MapToLoad.length+" maps and "+imageToLoad.length+" images.");
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
		answered=false;
//		if(x>=imageToLoad.length){x=0}
        this.setState({clickedAreaName: ''})
 //       isCorrect = false;
        
	  }
	areaClicked = (area, index, event) => {
        this.setState({clickedAreaName: area.name})
        if(area.name===AreaToFind)
        {
			if(answered===false){numCorrect++;totalQuestions++;answered = true;}
			message = "That is correct! You found the "+AreaToFind+". Click on Next Image to try again. That is "+ numCorrect+" correct out of "+totalQuestions+ " on the first try so far."
			
        }
        else
        {
			if(answered===false){totalQuestions++;answered = true;}
            message = "No, that is not "+AreaToFind+", that is "+area.name+". Try again! That is "+ numCorrect+" correct out of "+totalQuestions+ " on the first try so far."
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
				<p>Time to test your knowledge! Click on the {AreaToFind}</p>
                    <p>{message}</p>
					<p><button name="next" onClick={this.nextImage}>Next Image</button></p>
			
					<ImageMapper src={imageToLoad[x]}  map={MapToLoad[x]}
						onClick={this.areaClicked}
					/>
				
				</header>
			
			</div>
		)
	}
}