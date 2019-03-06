import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../styles/Gallery.css'
import img1 from '../assets/hit1.jpg'

export default class Gallery extends Component {
  render() {
    return (
      <div className="gallery-container">
        <div className="gallery-header">
            
        </div>
    
        <Carousel>
            <div>
                <img src={img1} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={img1} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={img1} />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    </div>  
    )
  }
}
