import React from 'react';
import Tone from "tone";

const Beat = (props) => {
  const polySynth = new Tone.Synth().toMaster();

  const triggerSynth1 = (time) => {
    polySynth.triggerAttackRelease('C4', time);
  };

  const playSample = (time, trackIndex) => {
    const sampleLength = props.metadata.samples.length;
    const sample = props.metadata.samples[trackIndex % sampleLength];
    sample.toMaster();
    sample.start(time);
  };

  const updateBeat = (e) => {
    props.beat.isChecked = e.target.checked;
    //props.beat.soundFunction = triggerSynth1;
    props.beat.soundFunction = playSample;
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
