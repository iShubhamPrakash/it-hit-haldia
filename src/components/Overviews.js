import React, { Component } from 'react'
import '../styles/Overviews.css'
import img1 from '../assets/hit1.jpg'

export default class Overviews extends Component {
  render() {
    return (
      <div className="AboutCollege-container">
        <div className="about-college">
          <h1 className="text-center">Overview</h1><hr />
          <img src={img1} alt="haldia institute of technology" style={{width: "100%"}}/><br/><br/>
          <p><strong>Haldia Institute of Technology (An Institute of ICARE, Haldia, Approved by AICTE, Accredited with 'A' grade by NAAC, Affiliated to  <a href="http://makautexam.net/" target="_blank" rel="noopener noreferrer"> MAKAUT</a>, WB) began its journey in the year 1996.</strong> It is the first private and accredited academic institution catering technical education in West Bengal. The Institute is situated at Haldia – an industrial hub in Eastern India, located about 138 Km away from Kolkata. It is situated at the heart of the Haldia, which is a major port, and is encircled by several industries. The Institute is well connected to Kolkata and Kharagpur by rail and road. It has a sprawling campus of 49 acres of land. There are 12 B.Tech courses, along with 5 M.Tech, MCA, and MBA courses. It comprises of modern facilities like bank, departmental store, post office, medical store, restaurant etc. It has also a separate R & D building, central computing facility and a central library. Since inception, Haldia Institute of Technology is dedicated to the objectives of creating highly trained professional manpower in various disciplines of Engineering, Technology and Social Science. The Institute is also dedicated to the contribution of higher scientific research in Technology as well as in Applied Science and Social Science.</p>
          
          <h2>VISION</h2><hr/>
          <ul>
            <li>To achieve centre of excellence of in the field of Science,Technology and Management Education for creating dynamic human resources of global standards with capabilities of accepting new challenges.</li>
          </ul>

          <h2>MISSION</h2><hr/>
          <ul>
            <li>To impart quality and value based education to raise satisfaction level of all stake-holders.</li>
            <li>To create competent,creative professionals, and great entrepreneurs who can work as individual or in group in multi-cultural global environments.</li>
            <li>To prepare citizens who would grow to be competent enough to contribute significantly with personal integrity and civic responsibility for the betterment of mankind throughout their careers and profession.</li>
          </ul>

          <a href="https://hithaldia.in/" target="_blank" rel="noopener noreferrer"><p>To know more visit official website...</p></a>

        </div>
      </div>
    )
  }
}
