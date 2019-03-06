import React, { Component } from 'react';
import '../styles/AboutCollege.css'

export default class AboutCollege extends Component {
  render() {
    return (
      <div className="AboutCollege-container">
        <div className="about-college">
            <h2 className="text-center">About the college</h2>
            <p><b>Haldia Institute of Technology (An Institute of ICARE, Haldia, 
                Approved by AICTE, Accredited with 'A' grade by NAAC, Affiliated to 
            <a href="http://makautexam.net/" target="_blank" rel="noopener noreferrer"> MAKAUT</a>
                , WB) 
                began its journey in the year 1996.</b> 
                </p>
                <p>It is the first private and accredited 
                academic institution catering technical education in West Bengal.</p>
            
            <p>The Institute is situated at Haldia – an industrial hub in Eastern India, located
                 about 138 Km away from Kolkata. It is situated at the heart of the Haldia, which 
                 is a major port, and is encircled by several industries. The Institute is well 
                 connected to Kolkata and Kharagpur by rail and road. It has a sprawling campus of
                  49 acres of land.
            </p>
            <p> There are 12 B.Tech courses, along with 5 M.Tech, MCA, and MBA courses. 
                It comprises of modern facilities like bank, departmental store, post office, medical store, 
                restaurant etc. It has also a separate R & D building, central computing facility 
                and a central library.<br/> Since inception, Haldia Institute of Technology is dedicated to 
                the objectives of creating highly trained professional manpower in various disciplines of 
                Engineering, Technology and Social Science. The Institute is also dedicated to the 
                contribution of higher scientific research in Technology as well as in Applied Science 
                and Social Science.
            </p>
            <a href="https://hithaldia.in/" target="_blank" rel="noopener noreferrer"><p>To know more visit official website...</p></a>
        </div>
      </div>  
    )
  }
}
