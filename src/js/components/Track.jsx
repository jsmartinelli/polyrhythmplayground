import React from 'react';
import Measure from "./Measure";

class Track extends React.Component {
  render () {
    const measures = this.props.track.measures.map((measure, index) => {
      return <Measure key={index} beats={measure.beats}/>
    });

    return (
      <li>
        <h3>This is a track #{this.props.track.index}</h3>
        {measures}
        <button onClick={() => this.props.removeHandler(this.props.track)}>X</button>
      </li>
    );
  }
}

export default Track;
