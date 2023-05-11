import React from "react";
import MediaQuery from "react-responsive";
import Timeline from "./timeline";

export default function Projects({ title, subtitle, dark, id }) {
  return (
    <React.Fragment>
      
        <div className={"sectionsmall" + (dark ? " sectionsmall-dark" : "")}>
          <div className="sectionsmall-content" id={id}>
            <Timeline></Timeline>
          </div>
        </div>

    </React.Fragment>
  );
}
