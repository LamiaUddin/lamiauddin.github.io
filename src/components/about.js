import React from "react";
import MediaQuery from "react-responsive";
import { Card, CardDeck } from "react-bootstrap";
import imgpro from "../pro.png";
import tech from "../tech.png";

export default function About({ title, subtitle, dark, id }) {
  return (
    <React.Fragment>
      <div className={"sectionbig" + (dark ? " sectionbig-dark" : "")}>
        <div className="sectionsmall-content" id={id}>
          <p id="aboutP">
            I am a fourth year computer engineering student at the University of
            Waterloo, I'm currently looking for my next co-op so please feel
            free to reach me out at luddin@uwaterloo.ca !
          </p>
          <CardDeck>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={imgpro} />
              <Card.Body>
                <Card.Title>Programming Languages</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Java</li>
                    <li>C++</li>
                    <li>Javascript/Typescript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>C#</li>
                    <li>Python</li>
                    <li>SQL</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={tech} />
              <Card.Body>
                <Card.Title>Frameworks/Technologies</Card.Title>
                <Card.Text>
                  <ul>
                    <li>React.js</li>
                    <li>PostgresSQL </li>
                    <li>Node.js</li>
                    <li>Vue.js</li>
                    <li>Angular</li>
                    <li>NestJs</li>
                    <li>Express</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
      </div>
    </React.Fragment>
  );
}
