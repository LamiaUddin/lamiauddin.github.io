import React, { Component, Fragment } from "react";
import ReactTypingEffect from "react-typing-effect";
import Carousel from "react-bootstrap/Carousel";
import MediaQuery from "react-responsive";
import aust from "../aust.jpeg";
import newp from "../new.jpeg";
import amst from "../amst.JPG";

export default function Hobbies({ dark, id }) {
  return (
    <Fragment>
      <div className={"section" + (dark ? " sectionbig-dark" : "")}>
        <div className="sectionsmall-content" id={id}>
          <Carousel>
            <Carousel.Item>
              <img
                className="imgresponsive"
                src={amst}
                width="437"
                height="300"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Copenhagen, Denmark</h3>
                <p>
                  Copenhagen's beautiful canal houses, captured while sailing in
                  the Nyhavn canal
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="imgresponsive"
                src={newp}
                width="437"
                height="300"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Matamata, New Zealand</h3>
                <p>
                  The Hobbiton Movie Set where The Lord of the Rings film
                  trilogy was shot.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="imgresponsive"
                src={aust}
                width="437"
                height="300"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>NSW, Australia</h3>
                <p>
                  The Three Sisters which is an unusual rock formation in the
                  Blue Mountains
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </Fragment>
  );
}
