import React from 'react'
import '../styles/Footer.css'
import SocialLink from './ComponentBox'
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
                        <SocialLink
                        facebook="https://www.facebook.com/the.hit.times/"
                        twitter="https://twitter.com/iSuvm"
                        linkedin="https://www.linkedin.com/in/ishubhamprakash/"
                        />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">© 2019 Copyright hithaldia.in</div>
        </div>
    );
}

export default Footer;