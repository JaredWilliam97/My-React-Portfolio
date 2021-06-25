import React from "react";

export default function Portfolio() {
  return (
    <div>
      <div class="col-12" id="projects">
        <section class="container">
          <div class="column-card">
            <div class="card">
              <a
                id="weather-project-img"
                class="card-img-top"
                href="https://strong-one.github.io/Hollywood-Hub/"
                target="_blank"
                rel="noopener
                "
                alt="Hollywood-Hub"
              ></a>

              <h2>Projects</h2>
              <div class="card-body">
                <p>Group Project (Hollywood-Hub).</p>
              </div>
            </div>
          </div>
          <div class="column-card">
            <div class="card">
              <a
                id="workday-schedule"
                class="card-img-top"
                href="https://jaredwilliam97.github.io/Work-Day-Scheduler/"
                target="_blank"
                rel="noopener"
                alt="Work-Day-Scheduler"
              ></a>

              <div class="card-body">
                <p>
                  In this project I created a work-day scheduler to plan out
                  your day.
                </p>
              </div>
            </div>
          </div>
          <div class="column-card">
            <div class="card">
              <a
                id="code-quiz"
                class="card-img-top"
                href="https://fierce-coast-75782.herokuapp.com/notes"
                target="_blank"
                rel="noopener"
                alt="Note-Taker"
              ></a>
              <div class="card-body">
                <p>Note-Taker: An application to take Notes</p>
              </div>
            </div>
          </div>
          <div class="column-card">
            <div class="card">
              <a
                id="password-generator"
                class="card-img-top"
                href="https://murmuring-river-43433.herokuapp.com/"
                target="_blank"
                rel="noopener"
                alt="password-generator"
              ></a>
              <div class="card-body">
                <p>Full Stack Application for creating Recipes</p>
              </div>
            </div>
          </div>
          <div class="column-card">
            <div class="card">
              <a
                id="budget-tracker"
                class="card-img-top"
                href="https://nameless-harbor-04256.herokuapp.com/"
                target="_blank"
                rel="noopener"
                alt="password-generator"
              ></a>
              <div class="card-body">
                <p>Full Stack Application for organizing your Budget</p>
              </div>
            </div>
          </div>
          <div class="column-card">
            <div class="card">
              <a
                id="fitness-tracker"
                class="card-img-top"
                href="https://lit-inlet-24856.herokuapp.com/?id=60ccdb78e106220015089ca8"
                target="_blank"
                rel="noopener"
                alt="password-generator"
              ></a>
              <div class="card-body">
                <p>
                  Full Stack Application for your own personal Fitness Tracker
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
