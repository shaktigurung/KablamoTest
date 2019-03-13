import React from 'react';
import './../App.css';

export default () => {
  return (
    <div>
        <h4> What were the main bugs and fixes for the given Code ? </h4>
        <ul className = "question-answer">
            <li> Re-defined all functions and methods using ES6 Fat Arrow function </li>
            <li> Assignment of value to "secondsElapsed" variable was missing "this" object</li>
            <li> HandleresetClick function was reseting laps value outside of setState</li>
            <li> formattedSeconds function was called on H1 tag without "this" object </li>
            <li> handleLabClick was using forceupdate which we donot need since we using setState</li>
            <li> Also I tried to separate various codes into functional components but due to lack of time I couldn't refactor all the codes</li>
        </ul>

        <h2> Thank you for your valuable time</h2>
        <p> Please <a href ="https://shaktigurung.netlify.com" rel="noopener noreferrer" target="_blank"> Click here! </a> to check my portfolio website. </p>
        <p>  Source Code for the App is in <a href="https://github.com/shaktigurung/KablamoTest" rel="noopener noreferrer" target="_blank">Github</a>. Thank you</p>
    </div>
  )
}
