import React from 'react'
import {NavLink} from "react-router-dom"
import logo from '../assets/hit_logo.png'
import '../styles/Nav.css'

let navClick=(e)=>{
    const icon=document.querySelector(".nav-toggle-btn i");
    const nav=document.querySelector(".hidden-nav");
    // const btn=document.querySelector(".nav-toggle-btn");
    icon.classList.toggle("fa-times");
    nav.classList.toggle("hide");
    // console.log(e.target);
}

// const componentDidMount=()=>{
//     const navbar=document.querySelector(".hidden-nav");
//     console.log(navbar);
    
//     // navbar.addEventListener("click",function(){
//     //     navbar.classList.toggle("hide");
//     // });
// }

// console.log(navbar);


const Nav= (props)=>{

    return(
        <div className="nav-container">
            <ul>
                <li className="brand"><img src={logo} alt="" className="nav_logo"/> Information Technology</li>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink exact to="/about-department">About Department</NavLink></li>
                <li><NavLink exact to="/about-college">About College</NavLink></li>
                <li><NavLink exact to="/gallery">Gallery</NavLink></li>
                <li><NavLink exact to="/contact">Contact us</NavLink></li>
                <li className="nav-spacer"></li>
                <li className="sign-in-btn"><button className="sign-in-btn"><i className="fa fa-sign-in-alt"/> Sign In</button></li>
                <button className="nav-toggle-btn" onClick={navClick}><i className="fas fa-bars"></i></button>
            </ul>

            <div class="hidden-nav hide">
                <NavLink exact to="/">Home</NavLink>
                <NavLink exact to="/about-department">About Department</NavLink>
                <NavLink exact to="/about-college">About College</NavLink>
                <NavLink exact to="/gallery">Gallery</NavLink>
                <NavLink exact to="/contact">Contact us</NavLink>
                <button className="sign-in-btn"><i className="fa fa-sign-in-alt"/> Sign In</button>
            </div>

        </div>
    );
}

export default Nav;
