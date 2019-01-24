import React from 'react';
import ImageMapper from 'react-image-mapper';
import {SonoEchoApicalNormalMaps, SonoEchoApicalNormalImages} from './ApicalEchoImages.js'

let imageToLoad = SonoEchoApicalNormalImages;
let MapToLoad = SonoEchoApicalNormalMaps;

let x=0;

export default class ApicalEcho extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
            clickedAreaName: '',
            message: '',
            x: 0
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
            case 'segments':
            {
                x=1;
                this.setState({clickedAreaName:''});

                return;
            }
            case 'anatomy':
            {
                x=0;
                this.setState({clickedAreaName:''});

                return;
            }
            case 'vascular':
            {
                x=2;
                this.setState({clickedAreaName:''});
                return;
            }
            default:
                return null;
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
					<p>Were going to learn what this is by clicking on stuff!</p>
					<p>{this.state.clickedAreaName}</p> 
					</header>
				<p>
                <button name="Anatomy" onClick={(event) => this.toggle(event, 'anatomy')}>Apical Anatomy</button>
                <button name="Segments" onClick={(event) => this.toggle(event, 'segments')}>Apical Segmental Anatomy</button>                
                <button name="Coronary Vascular Supply" onClick={(event) => this.toggle(event, 'vascular')}>Coronary Anatomy</button>
                </p>
				
			</div>
		)
	}
}