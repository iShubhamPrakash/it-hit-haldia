import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../styles/Gallery.css'
import img1 from '../assets/hit1.jpg'
import img2 from '../assets/hit2.jpg'
import img3 from '../assets/hit3.jpg'
import img4 from '../assets/hit4.jpg'
import img5 from '../assets/hit5.jpg'

export default class Gallery extends Component {
  render() {
    return (
      <div className="gallery-container">
        <div className="gallery-header">
            <h1 className="text-center">Gallery</h1>
        </div>
        <div className="gallery-body">
          <div className="galery-carousel">
          <Carousel>
            <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
            </div>
            <div>
                <img src={img4} />
            </div>
            <div>
                <img src={img5} />
            </div>
        </Carousel>
          </div>
        </div>
    </div>  
    )
  }
}
