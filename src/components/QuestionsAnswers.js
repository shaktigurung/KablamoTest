import React from 'react';
import './../App.css';

export default () => {
  return (
    <div>
        <h4> What were the main bugs and fixes for the given Code ? </h4>
        <ul className = "question-answer">
            <li> Function declarations were wrong, so re-defined all functions using ES6 Fat Arrow function </li>
            <li> Assignment of value to "secondsElapsed" variable was missing "this" object</li>
            <li> HandleresetClick function was using "," instead of ";" after laps value reset</li>
            <li> formattedSeconds function was called on H1 tag without "this" object </li>
            <li> Also I tried to separate various codes into functional components</li>
        </ul>

        <h2> Thank you for your valuable time</h2>
        <p> Please <a href ="https://shaktigurung.netlify.com" rel="noopener noreferrer" target="_blank"> Click here! </a> to check my portfolio website. </p>
        <p>  Source Code for the App is in <a href="https://github.com/shaktigurung/KablamoTest" rel="noopener noreferrer" target="_blank">Github</a>. Thank you</p>
    </div>
  )
}
