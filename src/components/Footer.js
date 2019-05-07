import React from 'react'
import '../styles/Footer.css'
const Footer= (props)=>{
    return(
        <div className="footer-container">
            <div className="footer-top container-fluid">
                <div className="row">
                    <div className="col col-12 col-lg-4">
                    <p>HALDIA INSTITUTE OF TECHNOLOGY<br/>
                    Haldia, 721657 Tel: +91 3224 252800 <br/>
                    admin@hithaldia.in</p>
                    </div>
                    <div className="col col-12 col-lg-4"></div>
                    <div className="col col-12 col-lg-4">
                        <p>Maintained by IT Dept, HIT<br />
                            (Best viewed in Google Chrome)<br />
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ishubhamprakash/">Contact developer</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">© 2019 Copyright hithaldia.in</div>
        </div>
    );
}

export default Footer;
