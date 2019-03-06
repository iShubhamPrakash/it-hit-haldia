import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import AboutCollege from "./components/AboutCollege"
import AboutDepartment from "./components/AboutDepartment"
import Nav from './components/Nav';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
          <Route path="/AboutCollege" component={AboutCollege}/>
          <Route path="/AboutDepartment" component={AboutDepartment}/>
          <Footer/>
      </div>  
    );
  }
}

export default App;
