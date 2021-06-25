import React from "react";
import familypic from "./familypic.jpg";
export default function About() {
  return (
    <>
      <h1>About Page</h1>
      <section className="row">
        <div
          className="col-12 d-flex justify-content-center vh-100"
          id="background"
        >
          <div className="row mx-4 d-flex align-items-center">
            <div className="col-4">
              <img id="bio-picture" src={familypic} alt="family pic" />
            </div>

            <p className="card-text">
              Hi, my name is Jared. I'm a native of International Falls. In
              October of 2020, my wife and I welcomed our first baby into the
              world, a little girl named Baylor. It's been amazing watching her
              learn and grow. I was a Hardware Server Engineer for the past 8
              years and feel I have gone as far as I can go in that field. I am
              now enrolled in the University of Denver Coding Boot Camp. This
              has taught me not only automation but also the Full Stack
              Development. I am now ready to accept a position that will be
              either front-end, back-end or a fullstack website! Please visit my
              LinkedIn to connect with me or my Github to view all of my
              projects that I have worked on.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
