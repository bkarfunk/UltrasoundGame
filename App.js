import React from 'react';
import ImageMapper from 'react-image-mapper';
//import { MeasurementLayer, calculateDistance, calculateArea } from 'react-measurements';
import normal from './Images/GB/Normal.png';
import Stones from './Images/GB/Cholelithiasis.png';
let MAP = {
name: "myMap",
areas: [
    {name: "CBD",shape:"poly", coords: [180,389,180,393,180,389,188,387,195,385,206,385,210,390,203,390]},
    {name: "GB", shape: "poly", coords: [269,339,288,315,310,293,326,276,350,257,366,244,395,229,414,225,428,233,436,249,433,269,419,291,409,303,400,314,379,331,355,345,331,357,300,367,276,371,256,373,255,362]},
    {name: "Portal Vein", shape: "circle", coords: [192,413,18]}
    ]

}
let areaName = "Interact with the Image";
var imageToLoad = [normal,Stones];
let x = 0;

class App extends React.Component
{
  nextImage(){
    x++;
    if(x>=imageToLoad.length){x=0}
  }
  getInitialState() {
		return { hoveredArea: null, msg: "" };
	}
	load() {
    this.setState({ msg: 'Interact with image !' })
    areaName="Interact with the image!"
  }
    
  clicked(area) {
     this.setState({ msg: `You clicked on ${area.name} at coords  !` });
      areaName=area.name;
      //alert('You clicked on '+area.name)
    }
  clickedOutside(evt) {
      //const coords = {x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
      this.setState({ msg: `` });
      areaName="That wasn't what we are looking for"
    }
  enterArea(area) {
     this.setState({ hoveredArea: area, msg: `You entered ${area.name} at coords ${JSON.stringify(area.coords)} !` });
     // areaName="You entered "+area.name;
    }
  leaveArea(area) {
     this.setState({ hoveredArea: null, msg: `You leaved ${area.shape} at coords ${JSON.stringify(area.coords)} !` });
     // areaName="Interact with the Image!"
    }
  getTipPosition(area) {
      if (!area) return { top: 0, left: 0 };
      // Calculate centroid
      const n = area.coords.length / 2;
      const { y, x } = area.coords.reduce(({ y, x }, val, idx) => {
        return !(idx % 2) ? { y, x: x + (val / n) } : { y: y + (val / n), x };
      }, { y: 0, x: 0 });
      return { top: `${y}px`, left: `${x}px` };
    }

render(){
    return( 
      <div>
      
        <div className="App" style={{ position: 'relative' }}>
        <p align="middle"> <font size = "7"><b>The Gallbag</b></font>
        
        <header className="App-header">

          <font size="5">
              <ImageMapper src={imageToLoad[x]} map={MAP} lineWidth={2}
                 onLoad={() => this.load()}
                 onClick={area => this.clicked(area)}
                 onMouseEnter={area => this.enterArea(area)}
                 onMouseLeave={area => this.leaveArea(area)}
                 onImageClick={evt => this.clickedOutside(evt)}
         />
          
          {/*
              	this.state.hoveredArea &&
          <span className="tooltip" style={{ ...this.getTipPosition(this.state.hoveredArea)}}>
            { this.state.hoveredArea && this.state.hoveredArea.name}
          </span>
          */}
        
          <p>
            We're going to learn what this is
          </p>
          <a>
            By clicking over stuff!
            Try clicking on the portal vein, the CBD, and the GallBag
          </a>
          <p>{areaName}</p>
          <button name="next" onClick={this.nextImage}>Next Image</button>
          </font>
          
        </header>
        </p>
      </div>
      
      </div> 
    )

    }      
  
}



export default App

