import React from 'react';
import ImageMapper from 'react-image-mapper';

import {SonoGBNormalMaps, SonoGBNormalImages, SonoGBAbNormalMaps, SonoGBAbNormalImages} from './SonoGBImages'
import { MeasurementLayer, calculateDistance, calculateArea } from 'react-measurements';

let MapToLoad = [...SonoGBNormalMaps,...SonoGBAbNormalMaps];
let imageToLoad = [...SonoGBNormalImages,...SonoGBAbNormalImages];







//global variable to keep track of number answered correctly on first attempt


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

let measure = false;
//global variable 'measure' defaults to false for each new picture. 
//After the correct part of the image map is identified, 'measure' becomes true
//and then we load the image measure react component instead of the image mapper

let numCorrect = 0;
let totalQuestions = 0;

//window.alert(MapToLoad.length+" maps and "+imageToLoad.length+" images.");
let message = '';

let dummyanteriorwallmeasurement = 1.6;
//this needs to be updated to be specific to each image
let HoldLength =0;
//this is a kludge to pass through the measurement value from the image meausrement layer

export default class TestClickAreaThenMeasure extends React.Component {
	
    constructor(props) 
    {
		super(props)
		this.state = {
            clickedAreaName: '',
            measurements: [],
            answer: ''
		}
    }
    
	nextImage = () =>{
        if(measure === true)
        {
            x = Math.floor(Math.random()*imageToLoad.length);
            y = Math.floor(Math.random()*MapToLoad[x].areas.length);
            AreaToFind = MapToLoad[x].areas[y].name;
            message='';
            measure=false;
            HoldLength=0;
            
            this.setState({clickedAreaName: '',measurements:[], answer:'0'});
        }
        
		answered=false;
//		if(x>=imageToLoad.length){x=0}
        
 //       isCorrect = false;
        
      }
onChange = (measurements) => {
    this.setState({ ...this.state, measurements,HoldLength})
    
}

measureLine = (line) => {
    HoldLength= calculateDistance(line,200,200).toFixed(2);
    this.setState({answer: HoldLength});
    return (calculateDistance(line, 200, 200).toFixed(2)) + " mm";

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
	areaClicked = (area, index, event) => {
        this.setState({clickedAreaName: area.name})
        if(area.name===AreaToFind) //if the clicked area and goal area name match
        {
            if(answered===false) //if this is the first time attempting to answer the question
            {
                numCorrect++;
                totalQuestions++;
                answered = true;
            }
			message = "That is correct! You found the "+AreaToFind+". Click on Next Image to try again. That is "+ numCorrect+" correct out of "+totalQuestions+ " on the first try so far. Now try to measure it";
			measure=true; //time to measure, as they found the right area
        }
        else
        {
            if(answered===false) //first time answering, but answer did not match
            {
                totalQuestions++;
                answered = true;
            }
            message = "No, that is not "+AreaToFind+", that is "+area.name+". Try again! That is "+ numCorrect+" correct out of "+totalQuestions+ " on the first try so far."
            //'measure' remains false as they havent found the right area yet
		}
		
	}
checkMeasure = (area, index, event) => {
    if( //if they got close enough
        HoldLength > (dummyanteriorwallmeasurement*0.9) && HoldLength < dummyanteriorwallmeasurement*1.1
    )
    {
        message="You measured it right!" 
    }
    else
    {
        message="your messurement was "+HoldLength+" but the right answer was "+dummyanteriorwallmeasurement;
    }
    this.setState({answer:HoldLength}) //this isnt really necessary, just to force a re-render

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
                    
                    <div> 
                    {
                        /*
                        if 'measure' is true, then load the measurement react layer
                        otherwise load the image mapper layer
                        */
                    }
                        {measure===true ? 
                        [
                            <div style={{zIndex:-2}}><p><button name="CheckMeasure" onClick={this.checkMeasure}>Check your Work</button></p>
                            <p><button name="next" onClick={this.nextImage}>Next Image</button></p>
                          <div style={{zIndex:1, textAlign: "justify", position: 'absolute'}}>
                          
                          
                            <MeasurementLayer
                                measurements={this.state.measurements}
                                widthInPx={this.state.widthInPx}
                                heightInPx={this.state.heightInPx}
                                onChange={this.onChange}
                                measureLine={this.measureLine}
                                measureCircle={this.measureCircle}
                                answer={this.answer}
                            />									
                          
                            <img 
                                ref={e => (this.image = e)}
                                src={imageToLoad[x]} 
                                onLoad={this.onLoad}
                            />

                            </div>
                            
                            </div>
                        ]
                        : 
                        
                        [
                             <div>
                                 {
                            /*
                            this is where the image mapper layer starts
                            */
                        }
                            <ImageMapper 
                                src={imageToLoad[x]}  
                                map={MapToLoad[x]}
                                onClick={this.areaClicked}/>
                            </div>    
                        ]
                        }

                    </div>
				</header>
				
			
			</div>
		)
	}
}