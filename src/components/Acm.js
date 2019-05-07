import React, { Component } from 'react';
import workshop1 from '../assets/acm final.jpg';
import workshop2 from '../assets/flags12345.jpg';
import member from '../assets/Chapter Members all.pdf';
import officer from '../assets/Acm_members.pdf';

export default class Acm extends Component {
  render() {
    return (
      <div className="box-container">
        <div className="box">
        <h1 className="text-center" style={{ textAlign: "center" }}>
          Acm Student Chapter<hr/>
        </h1>
          <div className="container">
            <div className="row d-none d-md-block">
              <h3 className="text-center text-success">Workshops</h3>
              <img src={workshop1} style={{ width: "100%" }} alt="" />
              <hr />
              <img src={workshop2} style={{ width: "100%" }} alt="" />
            </div>
          </div>
        </div>
    
        <div className="box">
          <div className="container">
            <div className="row">
              <h3 className="col-12 text-center text-primary">
                ACM Members:
              </h3>
              <MemberBlock
                name="Dr. Soumen Paul"
                email="s.paul.it@gmail.com"
                memNo="2471314"
                memType="Faculty Sponsor"
                active="Yes"
              />
              <MemberBlock
                name="Mr Suman Kumar"
                email="suman3961@gmail.com"
                memNo="6883751"
                memType="Chair"
                active="Yes"
              />
              <MemberBlock
                name="Ashish Kumar"
                email="askumaryg@gmail.com"
                memNo="6487294"
                memType="Vice Chair"
                active="Yes"
              />
              <MemberBlock
                name="Aditya Kumar"
                email="adityakumaradi95@gmail.com"
                memNo="1531981"
                memType="Treasurer"
                active="Yes"
              />
              <MemberBlock
                name="Manasija Bhattacharya"
                email="manasijait.bhattacharya@gmail.com"
                memNo="7762090"
                memType="Chapter Member"
                active="Yes"
              />
              <MemberBlock
                name="Puja Kumari"
                email="puja7629@gmail.com"
                memNo="4938978"
                memType="Chapter Member"
                active="Yes"
              />
              <MemberBlock
                name="Mr. Saket kumar"
                email="saket1192@gmail.com"
                memNo="7419325"
                memType="Secretary"
                active="Yes"
              />
              <MemberBlock
                name="Ms Amisha Sinha"
                email="amishasinha35@gmail.com"
                memNo="3310201"
                memType="Membership Chair"
                active="Yes"
              />
              <MemberBlock
                name="Amrit Raj Shrivastava"
                email="amrit.rj608@gmail.com"
                memNo="8593309"
                memType="Web Master"
                active="Yes"
              />
            </div>
            <br/><br/>
            <a href={member} download class="btn btn-primary">Download all members details</a><br/><br/>
            <a href={officer} download class="btn btn-primary">List of all ACM Officers</a>
          </div>
        </div>

       </div>
    );
  }
}


const MemberBlock = (props) => (
  <div className="col col-12 col-md-6">
    <div className="member-container">
      <h5><strong>{props.name}</strong></h5><hr/>
      <p><strong>Email: </strong>{props.email}
      <br/><strong>Member no: </strong>{props.memNo}
      <br/><strong>Membership type: </strong>{props.memType}
      <br/><strong>Active: </strong>{props.active}</p>
    </div>
  </div>
);

const officerBlock = (props) => (
  <div className="col col-12 col-md-6">
    <div className="member-container">
      <h5><strong>{props.name}</strong></h5><hr/>
      <p><strong>Email: </strong>{props.email}
      <br/><strong>Member no: </strong>{props.memNo}
      <br/><strong>Membership type: </strong>{props.memType}
      <br/><strong>Active: </strong>{props.active}</p>
    </div>
  </div>
);

