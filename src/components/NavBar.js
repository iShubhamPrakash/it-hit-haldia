// import React from 'react'
// import {NavLink} from "react-router-dom"
// import logo from '../assets/hit_logo.png'
// import '../styles/Nav.css'

// const Nav= (props)=>{

//     return(
//         <div className="nav-container">
//             <ul>
//                 <li className="brand"><img src={logo} alt="" className="nav_logo"/> Information Technology</li>
//                 <li><NavLink exact to="/">Home</NavLink></li>
//                 <li><NavLink exact to="/about-department">About Department</NavLink></li>
//                 <li><NavLink exact to="/about-college">About College</NavLink></li>
//                 <li><NavLink exact to="/gallery">Gallery</NavLink></li>
//                 <li><NavLink exact to="/contact">Contact us</NavLink></li>
//                 <li className="nav-spacer"></li>
//                 <li className="sign-in-btn"><button className="sign-in-btn"><i className="fa fa-sign-in-alt"/> Sign In</button></li>
//                 <button className="nav-toggle-btn" onClick={navClick}><i className="fas fa-bars"></i></button>
//             </ul>

//             <div class="hidden-nav hide">
//                 <NavLink exact to="/">Home</NavLink>
//                 <NavLink exact to="/about-department">About Department</NavLink>
//                 <NavLink exact to="/about-college">About College</NavLink>
//                 <NavLink exact to="/gallery">Gallery</NavLink>
//                 <NavLink exact to="/contact">Contact us</NavLink>
//                 <button className="sign-in-btn"><i className="fa fa-sign-in-alt"/> Sign In</button>
//             </div>

//         </div>
//     );
// }

// export default Nav;

import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";
import logo from "../assets/hit_logo.png";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">
            <img src={logo} alt="" className="nav-logo" />
            <p className="brand-name">Information Technology</p>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/* <NavItem>
                <NavLink to="/components/">Components</NavLink>
              </NavItem> */}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  The School
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink to="/overview/">Overview</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink to="/resources/">Resources</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink to="/gallery/">Gallery</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  The People
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink to="/faculty/">Faculty</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink to="/technical-staffs/">Technical Staffs</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Academics
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink to="/class-routine/">Class Routine</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink to="/exams/">Exams</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink to="/academic-calender/">Academic Calender</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Activities
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink to="/acm/">ACM</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink to="/arc/">ARC</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink to="/sports/">Sports</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Archives
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink to="/question-papers/">Question Papers</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink to="/important-links/">Important Links</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink to="/projects/">Projects</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
