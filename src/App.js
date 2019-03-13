import React, { Component } from 'react';
import './App.css';
import Stopwatch from "./components/StopWatch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stopwatch initialSeconds = {0}  />
      </div>
    );
  }
}

export default App;
