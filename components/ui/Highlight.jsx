import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Highlight({ icon, subtitle, para }) {
  return (
    <div className="highlight">
      <div className="highlight__img">
        <FontAwesomeIcon icon={ icon } />
      </div>
      <h3 className="highlight__subtitle">{ subtitle }</h3>
      <p className="highlight__para">
        { para }
      </p>
    </div>
  );
}

export default Highlight;
