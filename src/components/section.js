import React from "react";
import MediaQuery from 'react-responsive'
import { SocialIcon } from 'react-social-icons';

export default function Section({ title, subtitle, dark, id }) {
  return (
    <React.Fragment>
   

    <div className={"sectionbig" + (dark ? " sectionbig-dark" : "")}>
      <div className="sectionsmall-content" id={id}>
      <div className="iconmarg2">
        <div className="iconmarg"> <SocialIcon url="https://www.linkedin.com/in/lamiauddin/" /></div>
        <div className="iconmarg"> <SocialIcon  url="https://github.com/lamiauddin" /></div>
        <div className="iconmarg"> <SocialIcon url="mailto:lamiahameed@yahoo.com"  /></div>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}
