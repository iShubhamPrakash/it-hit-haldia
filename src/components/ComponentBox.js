import React from 'react';
import '../styles/ComponentBox.css'

const SocialLink= (props)=>{
    return (
    <div className="social-link-container">
    <ul>
        <li><a href={props.facebook} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"/></a></li>
        <li><a href={props.twitter} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"/></a></li>
        <li><a href={props.linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"/></a></li>
    </ul>
    </div>
    );
}


export default SocialLink;