import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import Nav from './components/Nav';
import Home from "./components/Home"
import AboutCollege from "./components/AboutCollege"
import AboutDepartment from "./components/AboutDepartment"
import Contact from "./components/Contact"
import Gallery from "./components/Gallery"
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <div style={{paddingTop:"60px"}}>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about-college" component={AboutCollege}/>
          <Route exact path="/about-department" component={AboutDepartment}/>
          <Route exact path="/gallery" component={Gallery}/>
          <Route exact path="/contact" component={Contact}/>
        </div>
        <Footer/>
      </div>  
    );
  }
}

export default App;
