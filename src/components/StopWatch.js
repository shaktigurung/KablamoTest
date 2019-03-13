import React, { Component } from 'react'
//import Lap from "./Lap"; 
import Welcome from "./Welcome";
import QuestionsAnswers from "./QuestionsAnswers";

export default class StopWatch extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
          secondsElapsed: this.props.initialSeconds,
          lastClearedIncrementer: null,
          laps: []
        };  
        this.incrementer = null;
      }

    formattedSeconds = (sec) => { 
        const value = Math.floor(sec / 60) + ':' + ('0' + sec % 60).slice(-2); 
        return value;
    }

    handleStartClick = () => {
        this.incrementer = setInterval(() =>
          this.setState({
            secondsElapsed: this.state.secondsElapsed + 1,
          }), 1000);
      }

    handleStopClick = () => {
        clearInterval(this.incrementer);
        this.setState({
          lastClearedIncrementer: this.incrementer,
        });
      }
    
    handleResetClick = () => {
        clearInterval(this.incrementer);
        this.setState({
          secondsElapsed: 0,
          laps: []
        });
    }
    
    handleLabClick = () => {
        this.setState({
          laps: this.state.laps.concat([this.state.secondsElapsed])
        })
    }
    
    handleDeleteClick = (index) => {
      //return () => this.laps.splice(index, 1);
      alert("this need to be deleted, I need to work on this. thank you");

    }
    
    render() {
        const { 
            secondsElapsed, 
            lastClearedIncrementer,
          } = this.state;
      
          return (
            <div className="stopwatch">
              <Welcome />

              <h1 className="stopwatch-timer">{this.formattedSeconds(secondsElapsed)}</h1>
      
              {(secondsElapsed === 0 || this.incrementer === lastClearedIncrementer
                ? <button type="button" className="start-btn" onClick={this.handleStartClick}>start</button>
                : <button type="button" className="stop-btn" onClick={this.handleStopClick}>stop</button>
              )}
      
              {(secondsElapsed !== 0 && this.incrementer !== lastClearedIncrementer
                ? <button type="button" onClick={this.handleLabClick}>lap</button>
                : null
              )}
      
              {(secondsElapsed !== 0 && this.incrementer === lastClearedIncrementer
                ? <button type="button" onClick={this.handleResetClick}>reset</button>
                : null
              )}
      
              <ul className="stopwatch-laps">
                { this.state.laps.map((lap, i) =>
                    <li className="stopwatch-lap"><strong>{i + 1}</strong>/ {this.formattedSeconds(lap)} <button onClick={this.handleDeleteClick} > X </button> </li>)
                }
              </ul>

              <QuestionsAnswers />
            </div>
          );
        }
    }
    

