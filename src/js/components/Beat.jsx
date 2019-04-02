import React from 'react';
import Tone from "tone";

const Beat = (props) => {
  const polySynth = new Tone.Synth().toMaster();

  function triggerSynth1(time){
    polySynth.triggerAttackRelease('C4', time);
  }

  const updateBeat = (e) => {
    props.beat.isChecked = e.target.checked;
    props.beat.soundFunction = triggerSynth1;
    props.updateHandler();
  };



  return <div className="beat">
    <div className={props.beat.isPlaying ? "checkbox--playing": "beat__checkbox beat"}>
      <input type="checkbox" onChange={updateBeat} disabled={props.metadata.isPlaying}/>
    </div>
  </div>
};

export default Beat;
