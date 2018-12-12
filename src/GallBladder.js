import React from 'react';
import ReactDOM from 'react-dom';
import ImageMapper from 'react-image-mapper';
import Normal from './Images/GB/Normal.png';
import Stones from './Images/GB/Cholelithiasis.png';
import Cholecystitis from './Images/GB/AcuteChole.png';
import Sludge from './Images/GB/Sludge.png';

const normalMap = {
	name: "normalMap",
	areas: [
		{name: "CBD",shape:"poly", coords: [172,382,176,396,186,395,195,393,204,391,214,391,213,378,207,378,199,377,190,375,180,376]},
		{name: "GB", shape: "poly", coords: [255,366,265,350,295,310,326,279,350,259,366,247,395,231,424,232,434,250,427,274,395,314,339,353,291,368]},
		{name: "Portal Vein", shape: "circle", coords: [194,414,18]}
	]
}
const stoneMap =  {
	name: "stoneMap",
	areas: [
		{name: "CBD",shape:"poly", coords: [178,392,186,389,194,389,202,389,210,390,210,384,199,384,190,384,181,387]},
		{name: "GB", shape: "poly", coords: [254,369,262,350,275,333,287,316,306,296,321,280,339,266,360,247,376,237,395,226,409,224,422,227,427,232,433,240,436,252,433,264,428,274,420,288,410,300,400,311,389,319,379,328,369,336,358,342,351,348,340,353,326,358,325,349,314,344,303,349,294,352,288,354,278,355,271,359,269,369,262,374]},
		{name: "Portal Vein", shape: "circle", coords: [193,414,17]},
		{name: "Stone", shape: "circle", coords: [281,365,8]},
		{name: "Stone", shape: "circle", coords: [298,362,8]},
		{name: "Stone", shape: "circle", coords: [314,358,10]},
		{name: "Liver", shape: "poly", coords: [378,63,450,216,427,227,406,221,388,224,364,241,334,263,286,309,264,339,248,359,233,371,211,375,182,376,168,381,164,397,166,411,172,421,176,428,182,434,192,434,206,431,216,423,225,407,234,395,244,386,259,381,269,377,263,389,256,403,248,416,236,431,229,447,216,455,202,469,186,478,166,491,150,498,134,503,118,504,95,507,84,505,61,500,45,494,29,485,220,59,248,82,302,93,340,85]}
	]
}

const CholecystitisMap = 
{
	name: "stoneMap",
	areas: [
		{name: "CBD",shape:"poly", coords: [187,390,201,388,212,390,211,383,201,384,190,384,181,386,176,391,187,390,201,388,212,390,211,383]},
		{name: "GB", shape: "poly", coords: [256,367,265,349,279,331,290,318,315,291,334,274,352,259,368,247,393,234,406,233,414,232,423,233,429,239,434,251,431,264,424,277,414,293,398,309,381,326,355,342,339,350,314,360,287,367,268,368]},
		{name: "Portal Vein", shape: "circle", coords: [193,414,18]},
		{name: "Anterior GB Wall", shape: "poly", coords: [263,338,269,347,287,319,299,310,305,300,316,289,333,276,356,256,382,237,412,229,411,218,380,228,352,248,336,261,314,279,306,286,295,297,286,308]},
		{name: "Pericholecystic Fluid", shape: "poly", coords: [259,339,266,331,270,325,276,317,282,310,286,304,296,293,306,285,316,275,329,263,340,254,352,245,364,236,376,229,386,223,398,219,416,219,410,215,400,213,391,213,381,215,372,219,366,221,356,228,350,231,341,237,332,245,319,255,310,266,302,275,296,283,289,290,282,296,277,301,272,307,266,318]}
	]
}
  


const MapToLoad = [normalMap,stoneMap,CholecystitisMap];
var imageToLoad = [Normal,Stones,Cholecystitis];
let x = 0;

export default class Gallbladder extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			clickedAreaName: '',
		}
	}
	nextImage = () =>{
		x++;
		if(x>=imageToLoad.length){x=0}
		this.setState({clickedAreaName: ''})
	  }
	areaClicked = (area, index, event) => {
		this.setState({clickedAreaName: area.name})
	}

	render() {
		return ( 
			<div className="App">
				<header className="App-header">
					<ImageMapper src={imageToLoad[x]}  map={MapToLoad[x]}
						onClick={this.areaClicked}
					/>
					<p>Were going to learn what this is By mousing over stuff! Try mousing over the portal vein, the CBD, and the GallBag</p>
					<p>{this.state.clickedAreaName}</p>
				</header>
				<p><button name="next" onClick={this.nextImage}>Next Image</button></p>
			</div>
		)
	}
}