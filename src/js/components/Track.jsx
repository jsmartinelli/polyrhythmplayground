import React from 'react';
import Measure from "./Measure";

const Track = (props) => {

  const updateTrack = () => {
    props.updateHandler(props.track);
  };

  const measures = props.track.measures.map((measure, index) => {
    return <Measure key={index} beats={measure.beats} metadata={props.metadata} updateHandler={updateTrack}/>
  });

  return (
    <div className="track">
      <div className="track__details">
        {props.track.beatsPerBar}/{props.track.beatUnit} - {props.track.beatDivisonName} notes
      </div>
      <div className="track__data">
        {measures}
        <button className="button track__button" onClick={() => props.removeHandler(props.track.id)}
              disabled={props.metadata.isPlaying}>X</button>
      </div>
    </div>
  );

};

export default Track;
