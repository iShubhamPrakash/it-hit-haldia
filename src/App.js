/* 
Developer contact
Shubham Prakash
(http://shubhamprakash.me)
shubham.prakash2308@gmail.com 
LinkedIn: https://www.linkedin.com/in/ishubhamprakash/
*/
import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import Nav from './components/NavBar';
import Home from "./components/Home"

import Overviews from "./components/Overviews"
import Resources from "./components/Resources"
import Gallery from "./components/Gallery"

import Faculty from "./components/Faculty"
import TechnicalStaff from "./components/TechnicalStaff"

import ClassRoutine from "./components/ClassRoutine"
import Exams from "./components/Exams"
import AcademicCalender from "./components/AcademicCalender"

import Acm from "./components/Acm"
import Arc from "./components/Arc"
import Sports from "./components/Sports"

import QuestionPaper from "./components/QuestionPaper"
import ImportantLinks from "./components/ImportantLinks"
import Projects from "./components/Projects"

import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <div style={{paddingTop:"60px",minHeight:"75vh"}}>
          <Route exact path="/" component={Home}/>
          
          <Route exact path="/overview" component={Overviews}/>
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/gallery" component={Gallery} />
          
          <Route exact path="/faculty" component={Faculty}/>
          <Route exact path="/technical-staffs" component={TechnicalStaff} />
          
          <Route exact path="/class-routine" component={ClassRoutine}/>
          <Route exact path="/exams" component={Exams}/>
          <Route exact path="/academic-calender" component={AcademicCalender} />
          
          <Route exact path="/acm" component={Acm}/>
          <Route exact path="/arc" component={Arc}/>
          <Route exact path="/sports" component={Sports} />

          <Route exact path="/question-papers" component={QuestionPaper}/>
          <Route exact path="/important-links" component={ImportantLinks}/>
          <Route exact path="/projects" component={Projects}/>
          
        </div>
        <Footer/>
      </div>  
    );
  }
}

export default App;
