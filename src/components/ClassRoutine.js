import React, { Component } from 'react'
import routine from "../assets/DEPARTMENTALROUTINE_IT_EVEN_2018-19.xlsx";

export default class ClassRoutine extends Component {
  render() {
    return (
      <div className="box-container">
        <h1 className="text-center">Class Routine</h1>
        <h5 className="text-center"> (Year 2018-19)</h5>
        <div className="box">
          <div className="container">
          <div className="row" style={{marginBottom:"12px"}}>
            <div className="col col-12 col-md-10">
              4th semester class routine
            </div>
            <div className="col col-12 col-md-2">
              <a href={routine} download className="btn btn-primary">Download</a>
            </div>
          </div>

          <div className="row" style={{marginBottom:"12px"}}>
            <div className="col col-12 col-md-10">
              6th semester class routine
            </div>
            <div className="col col-12 col-md-2">
              <a href={routine} download className="btn btn-primary">Download</a>
            </div>
          </div>

          <div className="row" style={{marginBottom:"12px"}}>
            <div className="col col-12 col-md-10">
              8th semester class routine
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
