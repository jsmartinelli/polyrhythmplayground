import React from 'react';
import Tone from "tone";

const Beat = (props) => {
  const polySynth = new Tone.Synth().toMaster();

  const triggerSynth1 = (time) => {
    polySynth.triggerAttackRelease('C4', time);
  };

  const updateBeat = (e) => {
    props.beat.isChecked = e.target.checked;
    props.beat.soundFunction = triggerSynth1;
    props.updateHandler();
  };

  const classCSS = props.beat.isPlaying ? "beat__checkbox--playing" : "beat__checkbox"

  return <div className="beat">
    <div className={classCSS}>
      <input type="checkbox" onChange={updateBeat} disabled={props.metadata.isPlaying}/>
    </div>
  </div>
};

export default Beat;
