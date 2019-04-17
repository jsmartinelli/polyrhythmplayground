import React from 'react';

const Beat = (props) => {

  const playSample = (time, trackIndex) => {
    const sampleLength = props.metadata.samples.length;
    const sample = props.metadata.samples[trackIndex % sampleLength];
    sample.toMaster();
    sample.start(time);
  };

  // const updateBeat = (e) => {
  //   props.beat.isChecked = e.target.checked;
  //   //props.beat.soundFunction = triggerSynth1;
  //   props.beat.soundFunction = playSample;
  //   props.updateHandler();
  // };

  const onClick = () => {
    // Don't update currently playing
    if (props.metadata.isPlaying) return;

    props.beat.isChecked = !props.beat.isChecked;
    props.beat.soundFunction = playSample;
    props.updateHandler();
  };

  const playingCSS = props.beat.isPlaying ? "beat--playing" : "";
  const checkedCSS = props.beat.isChecked ? "beat--checked" : "beat--unchecked";

  return <div id={props.beat.id} className={`beat ${playingCSS} ${checkedCSS}`} onClick={onClick}>
  </div>
};

export default Beat;
