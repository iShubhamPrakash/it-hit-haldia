import React, { Component } from 'react'
import academicCalender from '../assets/academic-calender.jpg'
import "../styles/academicCalender.css"

export default class AcademicCalender extends Component {
  render() {
    return (
      <div className="calender-container box-container">
        <h1 className="text-center">Academic Calender</h1>
        <div className="box" style={{overflowX: "auto",overflowY:"hidden"}}>
        <table border="0" cellspacing="0" cellpadding="0" className="Table1">
        <colgroup>
            <col width="56" />
            <col width="291" />
            <col width="62" />
            <col width="153" />
            <col width="173" />
        </colgroup>
        <tr className="Table11">
            <td colspan="3" style={{textAlign:"left", width:"1.27cm" }} className="Table1_A1">
                <p className="P4"><span className="T2"> </span></p>
                <p className="P4"><span className="T4">Even Semester (A.Y.: 2018 – 2019)</span></p>
                <p className="P1"> </p>
            </td>
            <td colspan="2" style={{textAlign:"left", width:"3.494cm" }} className="Table1_A1">
                <p className="P1"> </p>
                <p className="P4"><span className="T4">For Continuing Batch </span></p>
                <p className="P1"> </p>
            </td>
        </tr>
        <tr className="Table11">
            <td style={{textAlign:"left", width:"1.27cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">1</span></p>
            </td>
            <td colspan="2" style={{textAlign:"left", width:"6.668cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">Academic Programme commences</span></p>
            </td>
            <td colspan="2" style={{textAlign:"left", width:"3.494cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">January 7, 2019</span></p>
            </td>
        </tr>
        <tr className="Table11">
            <td style={{textAlign:"left", width:"1.27cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">2</span></p>
            </td>
            <td colspan="2" style={{textAlign:"left", width:"6.668cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">First Test Slot</span></p>
            </td>
            <td colspan="2" style={{textAlign:"left", width:"3.494cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">March 4 to March 12, 2019</span></p>
            </td>
        </tr>
        <tr className="Table11">
            <td style={{textAlign:"left", width:"1.27cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">3</span></p>
            </td>
            <td colspan="2" style={{textAlign:"left", width:"6.668cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">Second Test Slot</span></p>
            </td>
            <td colspan="2" style={{textAlign:"left", width:"3.494cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">May 2 to May 8, 2019</span></p>
            </td>
        </tr>
        <tr className="Table11">
            <td style={{textAlign:"left", width:"1.27cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">4 (a)</span></p>
            </td>
            <td colspan="2" style={{textAlign:"left", width:"6.668cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">Practical Examinations &amp; Viva-Voce</span></p>
            </td>
            <td colspan="2" style={{textAlign:"left", width:"3.494cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">May 13 to May 17, 2019</span></p>
            </td>
        </tr>
        <tr className="Table11">
            <td style={{textAlign:"left", width:"1.27cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">4 (b)</span></p>
            </td>
            <td colspan="2" style={{textAlign:"left", width:"6.668cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">Theory Examinations</span></p>
            </td>
            <td colspan="2" style={{textAlign:"left", width:"3.494cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">May 22 to June 11, 2019</span></p>
            </td>
        </tr>
        <tr className="Table11">
            <td style={{textAlign:"left", width:"1.27cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">5</span></p>
            </td>
            <td colspan="2" style={{textAlign:"left", width:"6.668cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">Inter Semester Break (Summer)</span></p>
            </td>
            <td colspan="2" style={{textAlign:"left", width:"3.494cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">June 12 to July 12, 2019</span></p>
            </td>
        </tr>
        <tr className="Table11">
            <td style={{textAlign:"left", width:"1.27cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">6 (a)</span></p>
            </td>
            <td colspan="2" style={{textAlign:"left", width:"6.668cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">Publication of Result (Final Semester)</span></p>
            </td>
            <td colspan="2" style={{textAlign:"left", width:"3.494cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">Results will be announced in the University website in June 30,
                        2019</span></p>
            </td>
        </tr>
        <tr className="Table11">
            <td style={{textAlign:"left", width:"1.27cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">6 (b)</span></p>
            </td>
            <td colspan="2" style={{textAlign:"left", width:"6.668cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">Publication of Result (Other than Final Semester)</span></p>
            </td>
            <td colspan="2" style={{textAlign:"left", width:"3.494cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">Results will be announced in the University website in August 2019</span>
                </p>
            </td>
        </tr>
        <tr className="Table11">
            <td colspan="5" style={{textAlign:"left", width:"1.27cm" }} className="Table1_A1">
                <p className="P2"> </p>
                <p className="P5"><span className="T6">During Inter-Semester-Break (Summer), Practical Training </span><span
                        className="T7">(where applicable)</span><span className="T6"> may be conducted.</span></p>
                <p className="P2"> </p>
            </td>
        </tr>
        <tr className="Table11">
            <td colspan="2" style={{textAlign:"left", width:"1.27cm" }} className="Table1_A1">
                <p className="P1"> </p>
                <p className="P4"><span className="T4">Odd Semester (A.Y.: 2019 – 2020)</span></p>
                <p className="P1"> </p>
            </td>
            <td colspan="2" style={{textAlign:"left", width:"1.427cm" }} className="Table1_A1">
                <p className="P1"> </p>
                <p className="P4"><span className="T4">For Ensuing New Batch</span></p>
                <p className="P1"> </p>
            </td>
            <td style={{textAlign:"left", width:"3.967cm" }} className="Table1_A1">
                <p className="P1"> </p>
                <p className="P4"><span className="T4">For Continuing Batch</span></p>
                <p className="P1"> </p>
            </td>
        </tr>
        <tr className="Table11">
            <td style={{textAlign:"left", width:"1.27cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">1</span></p>
            </td>
            <td style={{textAlign:"left", width:"6.668cm" }} className="Table1_A1">
                <p className="P6"><span className="T5">University-Registration process for ensuing newly admitted students
                        process will be started on</span></p>
            </td>
            <td colspan="2" style={{textAlign:"left", width:"1.427cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">June 10, 2019</span></p>
            </td>
            <td style={{textAlign:"left", width:"3.967cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">N.A.</span></p>
            </td>
        </tr>
        <tr className="Table11">
            <td style={{textAlign:"left", width:"1.27cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">2</span></p>
            </td>
            <td style={{textAlign:"left", width:"6.668cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">Admission activities </span><span className="T8">(for ensuing newly admitted
                        students for the session 2019 – 2020)</span><span className="T5"> will be completed by</span></p>
            </td>
            <td colspan="2" style={{textAlign:"left", width:"1.427cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">July 31, 2019</span></p>
            </td>
            <td style={{textAlign:"left", width:"3.967cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">N.A.</span></p>
            </td>
        </tr>
        <tr className="Table11">
            <td style={{textAlign:"left", width:"1.27cm" }} className="Table1_A1">
                <p className="P7"><span className="T5">3</span></p>
            </td>
            <td style={{textAlign:"left", width:"6.668cm" }} className="Table1_A1">
                <p className="P7"><span className="T5">Commencement of Academic Programme</span></p>
            </td>
            <td colspan="2" style={{textAlign:"left", width:"1.427cm" }} className="Table1_A1">
                <p className="P7"><span className="T5">August 1, 2019</span></p>
            </td>
            <td style={{textAlign:"left", width:"3.967cm" }} className="Table1_A1">
                <p className="P7"><span className="T5">July 15, 2019</span></p>
            </td>
        </tr>
        <tr className="Table11">
            <td style={{textAlign:"left", width:"1.27cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">4</span></p>
            </td>
            <td style={{textAlign:"left", width:"6.668cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">Registration activities</span><span className="T8"> (for ensuing newly
                        admitted students for the session 2019 – 2020) </span><span className="T5">will be completed
                        by</span></p>
            </td>
            <td colspan="2" style={{textAlign:"left", width:"1.427cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">September 9, 2019</span></p>
            </td>
            <td style={{textAlign:"left", width:"3.967cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">N.A.</span></p>
            </td>
        </tr>
        <tr className="Table11">
            <td style={{textAlign:"left", width:"1.27cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">5</span></p>
            </td>
            <td style={{textAlign:"left", width:"6.668cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">First Test Slot</span></p>
            </td>
            <td colspan="2" style={{textAlign:"left", width:"1.427cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">September 14 to 20, 2019</span></p>
            </td>
            <td style={{textAlign:"left", width:"3.967cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">September 14 to 20, 2019</span></p>
            </td>
        </tr>
        <tr className="Table11">
            <td style={{textAlign:"left", width:"1.27cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">6 (a)</span></p>
            </td>
            <td style={{textAlign:"left", width:"6.668cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">Second Test Slot</span></p>
            </td>
            <td colspan="2" style={{textAlign:"left", width:"1.427cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">November 14 to 20, 2019</span></p>
            </td>
            <td style={{textAlign:"left", width:"3.967cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">November 14 to 20, 2019</span></p>
            </td>
        </tr>
        <tr className="Table11">
            <td style={{textAlign:"left", width:"1.27cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">6 (b)</span></p>
            </td>
            <td style={{textAlign:"left", width:"6.668cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">Practical Examinations &amp; Viva-Voce</span></p>
            </td>
            <td colspan="2" style={{textAlign:"left", width:"1.427cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">November 22 to 30, 2019</span></p>
            </td>
            <td style={{textAlign:"left", width:"3.967cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">November 22 to 30, 2019</span></p>
            </td>
        </tr>
        <tr className="Table11">
            <td style={{textAlign:"left", width:"1.27cm" }} className="Table1_A1">
                <p className="P7"><span className="T5">7</span></p>
            </td>
            <td style={{textAlign:"left", width:"6.668cm" }} className="Table1_A1">
                <p className="P7"><span className="T5">Theory Examinations</span></p>
            </td>
            <td colspan="2" style={{textAlign:"left", width:"1.427cm" }} className="Table1_A1">
                <p className="P7"><span className="T5">December 4 to 21, 2019</span></p>
            </td>
            <td style={{textAlign:"left", width:"3.967cm" }} className="Table1_A1">
                <p className="P7"><span className="T5">December 4 to 21, 2019</span></p>
            </td>
        </tr>
        <tr className="Table11">
            <td style={{textAlign:"left", width:"1.27cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">8</span></p>
            </td>
            <td style={{textAlign:"left", width:"6.668cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">Inter Semester Break</span></p>
            </td>
            <td colspan="2" style={{textAlign:"left", width:"1.427cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">December 24, 2019 to January 12, 2020</span></p>
            </td>
            <td style={{textAlign:"left", width:"3.967cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">December 24, 2019 to January 12, 2020</span></p>
            </td>
        </tr>
        <tr className="Table11">
            <td style={{textAlign:"left", width:"1.27cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">9</span></p>
            </td>
            <td style={{textAlign:"left", width:"6.668cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">Publication of Result</span></p>
            </td>
            <td colspan="3" style={{textAlign:"left", width:"1.427cm" }} className="Table1_A1">
                <p className="P4"><span className="T5">Results will be announced in the University website in January
                        2020.</span></p>
            </td>
        </tr>
        <tr className="Table11">
            <td colspan="5" style={{textAlign:"left", width:"1.27cm" }} className="Table1_A1">
                <p className="P2"> </p>
                <p className="P5"><span className="T5">Separate Supplementary Examination for final year student will be held on
                        September, 2019</span></p>
                <p className="P3"> </p>
                <p className="P5"><span className="T5">Details will be available in the University website in due course.</span>
                </p>
                <p className="P2"> </p>
            </td>
        </tr>
        <tr className="Table11">
            <td colspan="5" style={{textAlign:"left", width:"1.27cm" }} className="Table1_A1">
                <p className="P3"> </p>
                <p className="P5"><span className="T5">Announcement regarding Registration &amp; Examinations activities will be
                        available in the University websites in due course.</span></p>
                <p className="P3"> </p>
            </td>
        </tr>
        </table>
        </div>
        <div className="text-center"><a href={academicCalender} className="btn btn-primary" download>Download</a></div>
      </div>
    )
  }
}
