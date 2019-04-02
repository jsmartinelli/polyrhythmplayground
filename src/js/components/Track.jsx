import React from 'react';
import Measure from "./Measure";

class Track extends React.Component {

  updateTrack = () => {
    this.props.updateHandler(this.props.track);
  };

  render () {
    const measures = this.props.track.measures.map((measure, index) => {
      return <Measure key={index} beats={measure.beats} metadata={this.props.metadata} updateHandler={this.updateTrack}/>
    });

    return (
      <div className="track">
        {measures}
        <button className="track__button" onClick={() => this.props.removeHandler(this.props.track.id)}>X</button>
      </div>
    );
  }
}

export default Track;
