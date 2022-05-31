import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <header id="intro">
          <div className="top">
            <img
              className="profile-pic"
              src="https://media-public.canva.com/MADQ41R96cQ/1/screen.jpg"
            />
            <h1>
              Velaguez
              <div>Front-end Developer</div>
            </h1>
          </div>
        </header>
        <main>
          <div id="white">
            <h2>ABOUT MY SELF</h2>
            <h3>2001 -2004 Lorem ipsum dolor </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              rutrum turpis et ligula gravida porttitor.
            </p>
            <h3>2004 -2007 Lorem ipsum dolor</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              rutrum turpis et ligula gravida porttitor.
            </p>
            <h2 id="add-skill">ADDITIONAL SKILLS</h2>
            <ul>
              <li>
                content planning
                <Progress percentage="75" />
              </li>
              <li>
                graphi design <Progress percentage="80" />
              </li>
              <li>
                market strategy <Progress percentage="75" />
              </li>
              <li>
                project <Progress percentage="95" />
              </li>
            </ul>
            <h2>contact</h2>
            <p>+34-91-1234-567</p>
          </div>
          <div id="dark">
            <h2>ABOUT MY SELF</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              rutrum turpis et ligula gravida porttitor. Nulla lacinia
              ullamcorper quam nec vehicula. Curabitur molestie risus vel turpis
              laoreet, in accumsan dolor hendrerit.
            </p>
            <h2>WORK EXPERIENCE</h2>
            <h3>2012 -2019 Lorem ipsum dolor </h3>
            <ul>
              <h4>account manager</h4>
              <li>
                - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
              <li>- Nulla lacinia ullamcorper quam nec vehicula.</li>
              <li>
                - Curabitur molestie risus vel turpis laoreet, in accumsan dolor
                hendrerit.
              </li>
            </ul>
            <h3>2012 -2019 Lorem ipsum dolor </h3>
            <ul>
              <h4>account manager</h4>
              <li>
                - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
              <li>- Nulla lacinia ullamcorper quam nec vehicula.</li>
              <li>
                - Curabitur molestie risus vel turpis laoreet, in accumsan dolor
                hendrerit.
              </li>
            </ul>
            <h2>WORK EXPERIENCE</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              rutrum turpis et ligula gravida porttitor. Nulla lacinia
              ullamcorper quam nec vehicula. Curabitur molestie risus vel turpis
              laoreet, in accumsan dolor hendrerit. Morbi semper viverra mi,
              tincidunt tempor justo.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;

/**
 * @param {{percentage: number}} props
 * @returns
 */
export function Progress(props) {
  return (
    <span
      style={{ "--percentage": `${props.percentage}%` }}
      data-val={`${props.percentage}%`}
    ></span>
  );
}
