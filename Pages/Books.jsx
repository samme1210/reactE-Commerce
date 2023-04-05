import React from "react";

function Books() {
  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All Books
                </h2>
                <select id="filter" defaultValue="DEFAULT">
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Price, Low to High</option>
                  <option value="HIGH_TO_LOW">Price, Low to High</option>
                  <option value="RATING">RATING</option>
                </select>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Books;
