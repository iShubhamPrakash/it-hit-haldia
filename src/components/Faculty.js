import React, { Component } from 'react';
import '../styles/people.css';
import defaultImage from '../assets/image-no-found.png'
import souman from '../assets/Souman.jpg'
import ramkrishna from '../assets/ramkrishna.jpg'
import moumita from '../assets/mou.jpg'
import tamosa from '../assets/tamosa.jpg'
import mb from '../assets/mb.jpg'
import bd from '../assets/bd.jpeg'
import sabya from '../assets/sabya.png'

export default class Faculty extends Component {
  render() {
    return (
      <div className="box-container">
        <h1 className="text-center">Faculty</h1>
        <div className="box">
          <TeacherBox
            name="Dr.Soumen Paul"
            qualification="M.Stat, M.Tech and Ph.D(Engg.)"
            desig="Professor and HOD"
            sub="Algorithm, Soft Computing"
            link="http://hithaldia.in/hit_resource/one_page/it/Soumen%20Paul.docx"
            img={souman}
          />
        
          <TeacherBox
            name="Mr.Manasija Bhattacharya"
            qualification="B.E, M.Tech"
            desig="Assistant Professor"
            sub="IOT,Networking"
            link="http://hithaldia.in/hit_resource/one_page/it/One%20Page%20Biodata_Manasija%20Bhattacharya.docx"
            img={mb}
          />

          <TeacherBox
            name="Mr.Susmit Maity"
            qualification="M.Tech"
            desig="Associate Professor"
            sub="Cellular Automata"
            link="http://hithaldia.in/hit_resource/one_page/it/Susmit_Maity.doc"
            img=""
          />
          <TeacherBox
            name="Mrs. Moumita Mantri"
            qualification="B.Tech, M.Tech"
            desig="Assistant Professor"
            sub="Cryptography"
            link="http://hithaldia.in/hit_resource/one_page/it/One%20Page%20Biodata_M.Mantri.docx"
            img={moumita}
          />
          <TeacherBox
            name="Dr.Sabyasachi Samanta"
            qualification="M.Tech and PhD(Engg.)"
            desig="Associate Professor"
            sub="Information Security"
            link=""
            img={sabya}
          />
          <TeacherBox
            name="Mr. Bidyut Das"
            qualification="M.Tech"
            desig="Assistant Professor"
            sub="Natural Language Processing, Machine Learning"
            link="http://hithaldia.in/hit_resource/one_page/it/One%20Page%20Biodata_Sabyasachi.doc"
            img={bd}
          />
          <TeacherBox
            name="Mr.Pranab Goswami"
            qualification="B.E, M.tech"
            desig="Assistant Professor"
            sub="Imge Processing,Video Analysis"
            link="http://hithaldia.in/hit_resource/one_page/it/One%20Page%20Biodata_Mandatory%20Disclosure_AICTE(Pranab).doc"
            img=""
          />
          <TeacherBox
            name="Mr.Ramkrishna Ghosh"
            qualification="B.Tech, M.Tech"
            desig="Assistant Professor"
            sub="Wireless Sensor Network"
            link="http://hithaldia.in/hit_resource/one_page/it/ramkisne.docx"
            img={ramkrishna}
          />
          <TeacherBox
            name="Mrs.Ruma Munian"
            qualification="B.Tech, M.Tech"
            desig="Assistant Professor"
            sub="Information Security"
            link="https://hithaldia.in/main/it-faculty-details/"
            img=""
          />
          <TeacherBox
            name="Mrs.Tamosa Chakraborty"
            qualification="B.Tech, M.Tech"
            desig="Assistant Professor"
            sub="Cyber Physical Design"
            link="https://hithaldia.in/main/it-faculty-details/"
            img={tamosa}
          />
          <TeacherBox
            name="Mrs.Banani Ghose"
            qualification="M.Tech"
            desig="Assistant Professor"
            sub="Wireless Sensor Network, Context Aware Computing"
            link="http://hithaldia.in/hit_resource/one_page/mca/bg.docx"
            img=""
          />
        </div>
      </div>
    )
  }
}

export const TeacherBox =(props)=>(
  <div className="teacher-box-container">
    <div className="teacher-box">
      <div className="teacher-box-header">
        <img src={props.img.length ? props.img : defaultImage} alt="" style={{objectFit:"fill"}}/>
      </div>
      <div classname="teacher-box-body">
        <h5 className="teacher-name">{props.name}</h5>
        <p className="teacher-data">{props.qualification}<br/>{props.desig}<br/>{props.sub}</p>
      </div>
      <hr/>
      <div className="teacher-box-footer">
        <a href={props.link}>More details</a>
      </div>
    </div>
  </div>
)