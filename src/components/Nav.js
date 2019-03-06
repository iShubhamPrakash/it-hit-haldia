import React from 'react'
import {NavLink} from "react-router-dom"
import logo from '../resources/hit_logo.png'
import '../styles/Nav.css'

const Nav= (props)=>{
    return(
        <div className="nav-container">
            <ul>
                <li><NavLink exact to="/"><img src={logo} alt="" className="nav_logo"/> Information Technology</NavLink></li>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink exact to="/AboutDepartment">AboutDepartment</NavLink></li>
                <li><NavLink exact to="/AboutCollege">AboutCollege</NavLink></li>
                <li className="nav-spacer"></li>
                <li><button className="sign-in-btn"><i className="fa fa-sign-in-alt"/> Sign In</button></li>

            </ul>
        </div>
    );
}

export default Nav;
