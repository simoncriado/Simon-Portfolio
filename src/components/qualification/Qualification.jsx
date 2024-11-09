import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My career path</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Full Stack Web Development
                </h3>
                <span className="qualification__subtitle">
                  Oxygen Academy - Spain (remote)
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  JavaScript Essential Training
                </h3>
                <span className="qualification__subtitle">
                  LinkedIn Learning
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Modern JavaScript & React/Firebase
                </h3>
                <span className="qualification__subtitle">Udemy</span>
                <h3 className="qualification__title">React & Redux</h3>
                <span className="qualification__subtitle">Codecademy</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Front End JS Web Development
                </h3>
                <span className="qualification__subtitle">
                  Ubiqum Code Academy - Barcelona
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> May 2019 - October
                  2019
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Junior Full Stack Developer
                </h3>
                <span className="qualification__subtitle">
                  Emotion - Barcelona
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> August 2023 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Junior Full Stack Developer
                </h3>
                <span className="qualification__subtitle">
                  Prototyp - Barcelona
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> April 2023 - July
                  2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Junior Full Stack Developer (Apprenticenship)
                </h3>
                <span className="qualification__subtitle">
                  Oxygen Academy & Recruiting - Spain (remote)
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Junior Front End Developer
                </h3>
                <span className="qualification__subtitle">
                  Own and personal projects
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> March 2022 -
                  September 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Product Manager / Technical Support
                </h3>
                <span className="qualification__subtitle">
                  Bhaasha - Zurich
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> November 2019 -
                  February 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Junior Frontend Web Developer (Apprenticenship)
                </h3>
                <span className="qualification__subtitle">
                  Ubiqum Code Academy - Barcelona
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2019
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
