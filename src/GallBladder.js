import React from 'react';
import ReactDOM from 'react-dom';
import ImageMapper from 'react-image-mapper';
import normal from './Images/GB/Normal.png';
let MAP = {
name: "myMap",
areas: [
    {name: "CBD",shape:"poly", coords: [172,382,176,396,186,395,195,393,204,391,214,391,213,378,207,378,199,377,190,375,180,376]},
    {name: "GB", shape: "poly", coords: [255,366,265,350,295,310,326,279,350,259,366,247,395,231,424,232,434,250,427,274,395,314,339,353,291,368]},
    {name: "Portal Vein", shape: "circle", coords: [194,414,18]}
    ]

}
let areaName = "GB";

export default class Gallbladder extends React.Component
{

render(){
    return( 
    <div className="App">
    <header className="App-header">

    
      <ImageMapper src={normal}  map={MAP}
       
        onClick={()=>areaName=this.name}
        /*onLoad={() => this.load()}  //  sample code from https://coldiary.github.io/react-image-mapper/
        onClick={area=>this.clicked(area)}
        onMouseEnter={area=>this.enterArea(area)}
        onMouseLeave={area=>this.leaveArea(area)}
        onImageClick={evt=> this.clickedOutside(evt)}*/
          />
   
      <p>
        Were going to learn what this is
      </p>
      <a>
        By mousing over stuff!

        Try mousing over the portal vein, the CBD, and the GallBag

      
      </a>
      <p>
      {
          areaName   //trying to change value of areaName using onClick but not updating
      }  
      </p>
    </header>

  </div>
    )
    }       
}