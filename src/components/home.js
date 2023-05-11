import React, { Component, Fragment } from "react";
import ReactTypingEffect from "react-typing-effect";
import Typist from "react-typist";
import MediaQuery from "react-responsive";
import logo from "../travel.jpg";
export default function Home({ dark, id }) {
  return (
    <Fragment>
        <div
          className={"sectionsmall" + (dark ? " sectionsmallhome-dark" : "")}
        >
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <img src={logo} className="home-logo" alt="Logo" />
            <h1 className="main-small">Hi! I'm Lamia Uddin</h1>
            <ReactTypingEffect
              className="typingeffect"
              text={[
                "Computer engineering student @ uWaterloo",
                "Software Developer",
                "Aspiring Product Manager",
                "Avid Traveller",
                "Tech Enthusiast",
                "Clarinetist",
              ]}
              speed={50}
              typingDelay={1000}
              eraseDelay={1000}
            />

<a class="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
         
        </div>
    </Fragment>
  );
}
