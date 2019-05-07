import React, { Component } from 'react'
import routine from "../assets/Exam Schedule even 2nd internal.xls";


export default class Exams extends Component {
  render() {
    return (
      <div className="box-container">
        <h1 className="text-center">Exams</h1>
        <div className="box">
          
          <div className="container">
            <h4 className="text-center">2nd Internal Exam Schedule, May 2019 </h4>
            <hr/>
          <div className="row" style={{marginBottom:"12px"}}>
            <div className="col col-12 col-md-10">
              4th semester 
            </div>
            <div className="col col-12 col-md-2">
              <a href={routine} download className="btn btn-primary">Download</a>
            </div>
          </div>

          <div className="row" style={{marginBottom:"12px"}}>
            <div className="col col-12 col-md-10">
              6th semester
            </div>
            <div className="col col-12 col-md-2">
              <a href={routine} download className="btn btn-primary">Download</a>
            </div>
          </div>

          <div className="row" style={{marginBottom:"12px"}}>
            <div className="col col-12 col-md-10">
              8th semester
            </div>
            <div className="col col-12 col-md-2">
              <a href={routine} download className="btn btn-primary">Download</a>
            </div>
            </div>
            <hr />
            <h4 className="text-center">Semester Exam routine</h4>
          <div className="row" style={{marginBottom:"12px"}}>
            <div className="col col-12 col-md-10">
              8th semester
            </div>
            <div className="col col-12 col-md-2">
              <a href={routine} download className="btn btn-primary">Download</a>
            </div>
          </div>
          </div>

        </div>
      </div>
    )
  }
}
