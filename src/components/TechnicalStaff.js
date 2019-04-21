import React, { Component } from 'react';
import '../styles/people.css';
import { TeacherBox } from './Faculty';

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
          link=""
          img=""
        />
        <TeacherBox
          name="Sri Anupam Chowdhury"
          qualification="BCA"
          desig="Instructor"
          sub=""
          link=""
          img=""
        />
        <TeacherBox
          name="Ms. Rinku Rani Bhunia "
          qualification="Dip. in CST, B.Tech. [CSE]"
          desig="Demonstrator"
          sub=""
          link=""
          img=""
        />
      </div>
    </div>
    );
  }
}
