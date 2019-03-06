import React, { Component } from 'react';
import '../styles/Home.css'
import itLogo from '../assets/it_logo.png'
import img1 from '../assets/hit-home-l.jpg'

export default class Home extends Component {
  render() {
    return (
        <div className="Home-container">
            <div className="home-header container-fluid">
                <div className="row">
                    <div className="col col-12 col-md-3 text-center">
                        <img src={itLogo} alt=""/>
                    </div>
                    <div className="col col-12 col-md-9 ">
                        <h1>Department of Information Technology</h1>
                        <h3>Haldia Institute of Technology, West Bengal</h3>
                        <p></p>
                    </div>
                    <div className="home-top-img">
                        <img src={img1} alt=""/>
                    </div>
                </div>
                
            </div>

            <div className="container">
                <diiv className="row">
                    <div className="col col-12 col-md-8">
                        <div className="notice-container card">
hohoh
                        </div>
                    </div>
                    <div className="col col-12 col-md-4">
                        <div className="info-container card">
                            haha
                        </div>
                    </div>
                </diiv>
            </div>
        </div>  
    )
  }
}
