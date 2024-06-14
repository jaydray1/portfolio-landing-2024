'use client'

import TypingAnimation from "./Typing"

const About = () => (
    <section
    id="home"
    data-nav-tooltip="Home"
    className="pp-section pp-scrollable"
  >
    <div className="home-banner">
      <div className="container">
        <div className="row full-screen align-items-center">
          <div className="col-lg-6">
            <div className="type-box">
              <h6>Hello, I am</h6>
              <h1 className="font-alt">Jon-Michael</h1>
              <p className="lead">
                <TypingAnimation />
              </p>
              <p className="desc">
                I collaborate, communicate, code, solve, architect, and lead. 
                {`I've`} been working in the React ecosystem for the last six years where
                What {`I've`} worked on:
              </p>
              <ul>
                 <li>Redux, Context, Reducers, useState</li>
                 <li>Styled-components, CSS, HTML, JSX</li>
                 <li>React-hook-forms, custom hooks, Lodash, ES6, Draftjs</li>
                </ul>
              <div className="btn-bar">
                <a className="px-btn px-btn-theme" href="https://azure-donny-32.tiiny.site" rel="noopener noreferrer" target="_blank">
                  View Resume
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hb-img">
              <img src="static/img/_home-banner.jpg" title="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About