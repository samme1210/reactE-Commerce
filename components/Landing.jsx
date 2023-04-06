import React from "react";
import UndrawBooks from "../assets/Undraw_Books.svg";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <header>
      <section id="landing">
        <div className="header__container">
          <div className="header__description">
            <h1>Wales' most awarded online library platform</h1>
            <h2>
              find your dream book with <span className="purple">Library</span>
            </h2>
            <a href="#featured">
              <button className="btn">Browse Books</button>
            </a>
          </div>
          <figure className="header__img--wrapper">
            <img src={UndrawBooks} alt="" />
          </figure>
        </div>
      </section>
    </header>
  );
}

export default Landing;
