import React, { Component } from 'react';
import '../styles/Home.css'
import itLogo from '../assets/it_logo.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
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
                    </div>
                    <marquee><p className="text-danger">This site is under development... please check back soon.. Thankyou...</p></marquee>
                    <div className="home-top-img">
                        <Carousel>
                            <div>
                                <img src={img1} />
                            </div>
                            <div>
                                <img src={img1} />
                            </div>
                            <div>
                                <img src={img1} />
                            </div>
                            <div>
                                <img src={img1} />
                            </div>
                            <div>
                                <img src={img1} />
                            </div>
                            <div>
                                <img src={img1} />
                            </div>
                            <div>
                                <img src={img1} />
                            </div>
                            <div>
                                <img src={img1} />
                            </div>
                        </Carousel>
                    </div>
                </div>
                
            </div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-md-8">
                        <div className="notice-container s-card">
                            <div className="header">
                                <p className="h4 text-center">Notice</p>
                            </div><hr/>
                            <div className="body">
                                <ul>
                                    <li>
                                        <p className="h5 text-danger">notice title</p>
                                        <p className="text-primary">Date: 23.03.2019</p>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, non quisquam illo voluptatum eum fugiat iste nobis delectus earum, quaerat nesciunt quam fuga sapiente, velit excepturi placeat et ratione porro.</p>
                                    </li>
                                    <li>
                                        <p className="h5 text-danger">notice title</p>
                                        <p className="text-primary">Date: 23.03.2019</p>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, non quisquam illo voluptatum eum fugiat iste nobis delectus earum, quaerat nesciunt quam fuga sapiente, velit excepturi placeat et ratione porro.</p>
                                    </li>
                                    <li>
                                        <p className="h5 text-danger">notice title</p>
                                        <p className="text-primary">Date: 23.03.2019</p>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, non quisquam illo voluptatum eum fugiat iste nobis delectus earum, quaerat nesciunt quam fuga sapiente, velit excepturi placeat et ratione porro.</p>
                                    </li>
                                    <li>
                                        <p className="h5 text-danger">notice title</p>
                                        <p className="text-primary">Date: 23.03.2019</p>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, non quisquam illo voluptatum eum fugiat iste nobis delectus earum, quaerat nesciunt quam fuga sapiente, velit excepturi placeat et ratione porro.</p>
                                    </li>
                                    <li>
                                        <p className="h5 text-danger">notice title</p>
                                        <p className="text-primary">Date: 23.03.2019</p>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, non quisquam illo voluptatum eum fugiat iste nobis delectus earum, quaerat nesciunt quam fuga sapiente, velit excepturi placeat et ratione porro.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col col-12 col-md-4">
                        <div className="info-container s-card">
                            <div className="header">
                                <p className="h4 text-center">Highlites</p>
                            </div><hr/>
                            <div className="body">
                                <p className="text-center text-danger">Placement 2019 passout batch <br/>
                                    (Till date)</p>
                                <ul>
                                    <li>Infosys: 22</li>
                                    <li>Wipro: 29</li>
                                    <li>TCS: 22</li>
                                    <li>Extramarks: 15</li>
                                    <li>ABJOOBA: 2</li>
                                    <li>BYJUS: 1</li>
                                    <li>PRATAN: 1</li>
                                    <li>OTHERS: 4</li>
                                </ul>
                                <p className="text-center text-danger">Placement 2018 passout batch</p>
                                <ul>
                                    <li>Infosys: 22</li>
                                    <li>Wipro: 29</li>
                                    <li>TCS: 22</li>
                                    <li>Extramarks: 15</li>
                                    <li>ABJOOBA: 2</li>
                                    <li>BYJUS: 1</li>
                                    <li>PRATAN: 1</li>
                                    <li>OTHERS: 4</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
            </div>
        </div>  
    )
  }
}
