import React from 'react';
import ImageMapper from 'react-image-mapper';
import {SonoEchoApicalNormalMaps, SonoEchoApicalNormalImages} from './ApicalEchoImages.js'

let imageToLoad = SonoEchoApicalNormalImages;
let MapToLoad = SonoEchoApicalNormalMaps;

//let message = "Let's learn what things are by clicking on them!"
let x=0;
//let rotate4='', rotate3='', rotate2='';



export default class ApicalEcho extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
            clickedAreaName: 'Click on a part of the heart',
            message: 'The Apical 4 Chamber shows you so much cardiac anatomy!',
            x: 0,
            rotate4:'Apical 4 Chamber',
            rotate3:'Rotate 60 degrees counter clockwise into an Apical 3 Chamber view',
            rotate2:'Rotate 30 degrees counter clockwise into an Apical 2 Chamber view'
		}
	}
/*    onChange = (view) =>
    {
        switch(view)
        {
            case 'anatomy':
                
            case 'segments':

            case 'vascular':
        }
    }*/
	areaClicked = (area, index, event) => {
		this.setState({clickedAreaName: area.name})
	}
    toggle = (event, nextView) =>
    {
        switch(nextView)
        {
            case '4canatomy':
            {
                x=0;
                this.setState({clickedAreaName:'Click on a part of the heart',message:"The Apical 4 Chamber shows you so much cardiac anatomy!"});
                this.setState({
                    rotate4:'Apical 4 Chamber',
                    rotate3:'Rotate 60 degrees counter clockwise into an Apical 3 Chamber view',
                    rotate2:'Rotate 30 degrees counter clockwise into an Apical 2 Chamber view'});
                return;
            }
            
            case '4csegments':
            {
                x=1;
                this.setState({clickedAreaName:'Click on a segment of the LV'});
                this.setState({message:"The Apical 4 Chamber view shows you antero-lateral and infero-septal segments of the LV"})
                this.setState({
                    rotate4:'Apical 4 Chamber',
                    rotate3:'Rotate 60 degrees counter clockwise into an Apical 3 Chamber view',
                    rotate2:'Rotate 30 degrees counter clockwise into an Apical 2 Chamber view'});
                return;
            }
            
            case '4cvascular':
            {
                x=2;
                this.setState({clickedAreaName:'Click on a part of the heart to see its vascular supply',message:"The Apical 4 Chamber vascular anatomy can be quite variable"});
                this.setState({
                    rotate4:'Apical 4 Chamber',
                    rotate3:'Rotate 60 degrees counter clockwise into an Apical 3 Chamber view',
                    rotate2:'Rotate 30 degrees counter clockwise into an Apical 2 Chamber view'});
                return;
            }
            case '2canatomy':
            {
                x=3;
                this.setState({clickedAreaName:'Click on a part of the heart',message:"The Apical 2 Chamber shows you an anterior - inferior orientation of the LV"});
                this.setState({
                    rotate4:'Rotate 30 degrees clockwise into an Apical 4 Chamber view',
                    rotate3:'Rotate 30 degrees counter clockwise into an Apical 3 Chamber view',
                    rotate2:'Apical 2 Chamber'});
                return;
            }
            case '2csegments':
            {
                x=4;
                this.setState({clickedAreaName:'',message:"The Apical 2 Chamber shows you anterior and inferior segments"});
                this.setState({
                    rotate4:'Rotate 30 degrees clockwise into an Apical 4 Chamber view',
                    rotate3:'Rotate 30 degrees counter clockwise into an Apical 3 Chamber view',
                    rotate2:'Apical 2 Chamber'});
                return;
            }
            case '2cvascular':
            {
                x=5;
                this.setState({clickedAreaName:'',message:"The Apical 2 Chamber vascular anatomy is pretty straight forward"});
                this.setState({
                    rotate4:'Rotate 30 degrees clockwise into an Apical 4 Chamber view',
                    rotate3:'Rotate 30 degrees counter clockwise into an Apical 3 Chamber view',
                    rotate2:'Apical 2 Chamber'});
                return;
            }
            case '3canatomy':
            {
                x=6;
                this.setState({clickedAreaName:'Click on a part of the heart',message:"The Apical 2 Chamber shows you an anterior - inferior orientation of the LV"});
                this.setState({
                    rotate4:'Rotate 60 degrees clockwise into an Apical 4 Chamber view',
                    rotate3:'Apical 3 Chamber',
                    rotate2:'Rotate 30 degrees clockwise into an Apical 2 Chamber view'});
                return;
            }
            case '3csegments':
            {
                x=7;
                this.setState({clickedAreaName:'',message:"The Apical 2 Chamber shows you anterior and inferior segments"});
                this.setState({
                    rotate4:'Rotate 60 degrees clockwise into an Apical 4 Chamber view',
                    rotate3:'Apical 3 Chamber',
                    rotate2:'Rotate 30 degrees clockwise into an Apical 2 Chamber view'});
                return;
            }
            case '3cvascular':
            {
                x=8;
                this.setState({clickedAreaName:'',message:"The Apical 2 Chamber vascular anatomy is pretty straight forward"});
                this.setState({
                    rotate4:'Rotate 60 degrees clockwise into an Apical 4 Chamber view',
                    rotate3:'Apical 3 Chamber',
                    rotate2:'Rotate 30 degrees clockwise into an Apical 2 Chamber view'});
                return;
            }
            default:
            {
                this.setState({clickedAreaName:'',message:"OOPS"});
                return null;
            }
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
                    <ImageMapper 
                        src={imageToLoad[x]}  
                        map={MapToLoad[x]}
                        onClick={this.areaClicked}
                        
					/>
					<p>{this.state.message}</p>
					<p>{this.state.clickedAreaName}</p> 
					</header>
				<p><b>{this.state.rotate4}</b></p>
              
                <p>
                
                    <button name="4cAnatomy" onClick={(event) => this.toggle(event, '4canatomy')}>Apical 4-chamber Anatomy</button>
                    <button name="4cSegments" onClick={(event) => this.toggle(event, '4csegments')}>Apical 4-chamber Segmental Anatomy</button>                
                    <button name="4cCoronary Vascular Supply" onClick={(event) => this.toggle(event, '4cvascular')}>Apical 4-chamber Coronary Anatomy</button>
                </p>
          
                <p><b>{this.state.rotate2}</b></p>
				<p>
                    <button name="2cSegments" onClick={(event) => this.toggle(event, '2canatomy')}>Apical 2-chamber Anatomy</button>
                    <button name="2cSegments" onClick={(event) => this.toggle(event, '2csegments')}>Apical 2-chamber Segmental Anatomy</button>
                    <button name="2cCoronary Vascular Supply" onClick={(event) => this.toggle(event, '2cvascular')}>Apical 2-chamber Coronary Anatomy</button>
                </p>
                <p><b>{this.state.rotate3}</b></p>
                <p>
                    
                    <button name="3cSegments" onClick={(event) => this.toggle(event, '3canatomy')}>Apical 3-chamber Anatomy</button>
                    <button name="3cSegments" onClick={(event) => this.toggle(event, '3csegments')}>Apical 3-chamber Segmental Anatomy</button>
                    <button name="3cCoronary Vascular Supply" onClick={(event) => this.toggle(event, '3cvascular')}>Apical 3-chamber Coronary Anatomy</button>
                </p>
			</div>
		)
	}
}