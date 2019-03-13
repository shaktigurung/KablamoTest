import React from 'react';

export default function Lap(props) {
 const value = this.props;
 console.log(value);
  return (
    <div key={this.props.index}  className="stopwatch-lap">
      <strong>{this.props.index}</strong>/ {this.props.formattedSeconds(this.props.lap)} <button onClick={this.props.onDelete} > X </button>
    </div>
  )
}




