import React from 'react';
import ImageMapper from 'react-image-mapper';

import {SonoGBNormalMaps, SonoGBNormalImages, SonoGBAbNormalMaps, SonoGBAbNormalImages} from './SonoGBImages'

let MapToLoad = [...SonoGBNormalMaps,...SonoGBAbNormalMaps];
let imageToLoad = [...SonoGBNormalImages,...SonoGBAbNormalImages];



let x = Math.floor(Math.random()*imageToLoad.length); 
// initiate to a random image X
let y = Math.floor(Math.random()*MapToLoad[x].areas.length); 
// initiate to a random part Y of random image X
let AreaToFind = MapToLoad[x].areas[y].name;
//set area to find to random part Y's name
let clickedAreaName='';

let answered = false;
//global variable 'answered' defaults to false, acts as a flag to allow
// only one answer per question
let numCorrect = 0;
//global variable to keep track of number answered correctly on first attempt

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
		message='';//reset message
		answered=false; 
//		if(x>=imageToLoad.length){x=0}
        this.setState({clickedAreaName: ''})
      
	  }
	areaClicked = (area, index, event) => {
        this.setState({clickedAreaName: area.name})
        if(area.name===AreaToFind)
        {   
			if(answered===false) 
			//if the question had not already been answered, add one to the #correct
			{
				numCorrect++;
				totalQuestions++;
				answered = true;
			}
			message = "That is correct! You found the "+AreaToFind+". Click on Next Image to try again. That is "+ numCorrect+" correct out of "+totalQuestions+ " on the first try so far."
		}
        else //did not click on the right area
        {
			if(answered===false)
			{ //if this was the first time submitted an answer to this question
				totalQuestions++;
				answered = true;
			}
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
			
					<ImageMapper 
					src={imageToLoad[x]}  
					map={MapToLoad[x]}
					onClick={this.areaClicked}
					/>
				
				</header>
			
			</div>
		)
	}
}