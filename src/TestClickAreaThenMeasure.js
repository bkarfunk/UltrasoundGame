import React from 'react';
import ImageMapper from 'react-image-mapper';

import {SonoGBNormalMaps, SonoGBNormalImages, SonoGBAbNormalMaps, SonoGBAbNormalImages} from './SonoGBImages'
import { MeasurementLayer, calculateDistance, calculateArea } from 'react-measurements';

let MapToLoad = [...SonoGBNormalMaps,...SonoGBAbNormalMaps];
let imageToLoad = [...SonoGBNormalImages,...SonoGBAbNormalImages];



let x = Math.floor(Math.random()*imageToLoad.length);
let y = Math.floor(Math.random()*MapToLoad[x].areas.length);
let AreaToFind = MapToLoad[x].areas[y].name;
let clickedAreaName='';
let answered = false;
let measure = false;
let numCorrect = 0;
let totalQuestions = 0;
//window.alert(MapToLoad.length+" maps and "+imageToLoad.length+" images.");
let message = '';
let dummyanteriorwallmeasurement = 1.6;

let HoldLength =0;
export default class Gallbladder extends React.Component {
	
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
        if(area.name===AreaToFind)
        {
			if(answered===false){numCorrect++;totalQuestions++;answered = true;}
			message = "That is correct! You found the "+AreaToFind+". Click on Next Image to try again. That is "+ numCorrect+" correct out of "+totalQuestions+ " on the first try so far. Now try to measure it";
			measure=true;
        }
        else
        {
			if(answered===false){totalQuestions++;answered = true;}
            message = "No, that is not "+AreaToFind+", that is "+area.name+". Try again! That is "+ numCorrect+" correct out of "+totalQuestions+ " on the first try so far."
		}
		
	}
checkMeasure = (area, index, event) => {
    if(
        HoldLength > (dummyanteriorwallmeasurement*0.9) && HoldLength < dummyanteriorwallmeasurement*1.1
    ){message="You measured it right!" }
    else{
        message="your messurement was "+HoldLength+" but the right answer was "+dummyanteriorwallmeasurement;
       
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
                    
                    <div>
                        {measure===true ? 
                        [
                            <div style={{zIndex:-2}}><p><button name="CheckMeasure" onClick={this.checkMeasure()}>Check your Work</button></p>
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