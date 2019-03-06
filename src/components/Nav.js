import React from 'react'
import {NavLink} from "react-router-dom"
import logo from '../assets/hit_logo.png'
import '../styles/Nav.css'

const Nav= (props)=>{
    return(
        <div className="nav-container">
            <ul>
                <li><img src={logo} alt="" className="nav_logo"/> Information Technology</li>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink exact to="/about-department">About Department</NavLink></li>
                <li><NavLink exact to="/about-college">About College</NavLink></li>
                <li><NavLink exact to="/gallery">Gallery</NavLink></li>
                <li><NavLink exact to="/contact">Contact us</NavLink></li>
                <li className="nav-spacer"></li>
                <li><button className="sign-in-btn"><i className="fa fa-sign-in-alt"/> Sign In</button></li>

            </ul>
        </div>
    );
}

export default Nav;
