import React, { Component, Fragment } from "react";
import logo from "../travel.jpg";
import { Link, animateScroll as scroll } from "react-scroll";
import MediaQuery from 'react-responsive'
import { slide as Menu } from 'react-burger-menu'

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };



  render() {
    return (
  <Fragment>

<Menu>
<Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Link>
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Hobbies
              </Link>
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact Me
              </Link>
      </Menu>

</Fragment>
    );
  }
}



