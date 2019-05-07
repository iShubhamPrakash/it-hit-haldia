import React, { Component } from 'react'
import extraCurricular from "../assets/Extra-Curricular.png"
import interSchool from "../assets/Intrer-institute.png"

export default class Sports extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Extra Curriculars</h1>
        <ExtraActivities />
        <div className="text-center">
      <a href={extraCurricular} className="btn btn-primary" download>Download </a>
    </div>
        <InterSchool />
        <div className="text-center">
      <a href={interSchool} className="btn btn-primary" download>Download</a>
    </div>
      </div>
    )
  }
}

const ExtraActivities = () => (
  <div className="box">
    <div>
      <img src={extraCurricular} alt="" style={{width:"100%"}}/>
    </div>
  </div>
);
const InterSchool = () => (
  <div className="box">
    <div>
      <img src={interSchool} alt="" style={{width:"100%"}}/>
    </div>
</div>
);