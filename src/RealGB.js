import React from 'react';
import ImageMapper from 'react-image-mapper';
import SonoCholecystitis from './Images/GB/SonoImages/SonoAcuteChole.png';
import { MeasurementLayer, calculateDistance, calculateArea } from 'react-measurements';

/*const normalMap = {
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
} */

const SonoCholecystitisMap = 
{
	name: "CholeMap",
	areas: [
		{name: "Stones", shape: "poly", coords: [552,351,559,365,590,357,617,344,638,331,657,321,659,306,659,295,642,301,614,309,601,310,579,322,568,329,556,332]},
		{name: "Anterior GB Wall", shape: "poly", coords: [455,311,467,321,478,308,488,297,499,285,510,279,525,267,538,259,549,250,542,240,531,250,520,257,500,271,487,278,479,290,467,301]},
		{name: "Pericholecystic Fluid", shape: "poly", coords: [389,377,395,386,408,378,417,368,430,355,444,339,436,328,423,345,406,354]}
	]
}
  

//const MapToLoad = CholecystitisMap;
//var imageToLoad = Cholecystitis;
//let x = 0;

export default class RealGB extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
            clickedAreaName: '',
            measurements: []
        }
        
	}
	/*nextImage = () =>{
		x++;
		if(x>=imageToLoad.length){x=0}
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
			<div 
			style={{
				position: 'absolute',
				fontFamily: 'sans-serif',
				}}>
                <img 
                    ref={e => (this.image = e)}
                    src={SonoCholecystitis} 
                    useMap={SonoCholecystitisMap}
                    onLoad={this.onLoad}
                    
                    />
                <MeasurementLayer
                    measurements={this.state.measurements}
                    widthInPx={this.state.widthInPx}
                    heightInPx={this.state.heightInPx}
                    onChange={this.onChange}
                    measureLine={this.measureLine}
                    measureCircle={this.measureCircle}
                    />
                <ImageMapper 
                    src={SonoCholecystitis}  
                    map={SonoCholecystitisMap}
                    onClick={this.areaClicked}
				/>
            
					<p>Lets look at a real picture</p>
                    <p>That is the: {this.state.clickedAreaName}</p>
						
				
			</div>
		)
	}
}