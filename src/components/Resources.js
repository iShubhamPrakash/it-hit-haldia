import React, { Component } from 'react'
import placement2018 from "../assets/placement_2018.png"

export default class Resources extends Component {
  render() {
    return (
      <div>
        <Placement/>
      </div>
    )
  }
}

const Placement = () => (
  <div className="box">
    <h2 className="text-center text-primary">Placement 2018 <hr/></h2>
    
    <img src={placement2018} alt="" style={{width:"100%"}}/>
  </div>
)