import React, { Component } from 'react';
import '../styles/people.css';
import { TeacherBox } from './Faculty';

import rinku from '../assets/rinku.jpg'
import anupam from '../assets/Anupam.jpg'
import anusree from '../assets/Anshree.jpg'


export default class TechnicalStaff extends Component {
  render() {
    return (
      <div className="box-container">
      <h1 className="text-center">Technical Staffs</h1>
      <div className="box">
        <TeacherBox
          name="Ms.Anusree Pramanik"
          qualification="Diploma in CSE, BCA"
          desig="Sr.Instructor"
          sub=""
          link="https://hithaldia.in/main/it-technical-staff/"
          img={anusree}
        />
        <TeacherBox
          name="Sri Anupam Chowdhury"
          qualification="BCA, MCA"
          desig="Instructor"
          sub=""
          link="https://hithaldia.in/main/it-technical-staff/"
          img={anupam}
        />
        <TeacherBox
          name="Ms. Rinku Rani Bhunia "
          qualification="Dip. in CST, B.Tech. [CSE]"
          desig="Demonstrator"
          sub=""
          link="https://hithaldia.in/main/it-technical-staff/"
          img={rinku}
        />
      </div>
    </div>
    );
  }
}
