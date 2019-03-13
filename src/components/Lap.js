import React from 'react';

export default function Lap(props) {
  return (
    <div key={props.index}  className="stopwatch-lap">
      <strong>{props.index}</strong>/ {this.props.formattedSeconds(this.props.lap)} <button onClick={this.props.onDelete} > X </button>
    </div>
  )
}


