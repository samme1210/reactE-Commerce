
import React from "react";
import Highlight from "./ui/Highlight";

function Highlights() {
  return (
    <section id="highlights">
      <div className="conntainer">
        <div className="row">
          <h2 className="section__title">
            Why Choose <span className="purple">Library</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon="bolt"
              subtitle="Easy and Quick"
              para="Get access to the book you purchased online insantly"
            />
            <Highlight
              icon="book-open"
              subtitle="10,000 + Books"
              para="Get access to the book you purchased online insantly"
            />
            <Highlight
              icon="tags"
              subtitle="Affordable"
              para="Get access to the book you purchased online insantly"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
