import Tone from 'tone';
import * as constants from '../../common/common';

let sequenceArray;

export function playTracks () {
  return (dispatch, getState) => {
    const {tracks, metadata} = getState();
    const bpm = metadata.bpm;
    // If the tracks are already playing, stop them.
    if (metadata.isPlaying) {
      Tone.Transport.stop();
      // Clean up sequences to be safe
      sequenceArray.forEach(sequence => sequence.dispose());
      dispatch(togglePlaying());
      return;
    }

    // Schedule all of the tracks
    sequenceArray = tracks.tracks.map((track, index) => _scheduleTrack(track, index));
    sequenceArray.forEach(sequence => sequence.start(0));

    // Play them!
    dispatch(togglePlaying());
    Tone.context.latencyHint = 'balanced';
    Tone.Transport.bpm.value = bpm ? bpm : 120;
    Tone.Transport.start('+0.1');

  };
}


export function togglePlaying () {
  return {
    type: constants.TOGGLE_PLAYING
  }
}

export function updateBPM (bpm) {
  return {
    type: constants.UPDATE_BPM,
    payload: {
      bpm: bpm
    }
  }
}


/**
 * Schedules all of the beats on the track using Tone.js Transport Class
 * @private
 * @param {Track} track - a Track object
 */
function _scheduleTrack (track, trackIndex) {
  const patternArray = [];

  const {beatLength} = track;


  track.measures.forEach((measure) => {
    measure.beats.forEach((beat) => {
      patternArray.push(beat);
    });
  });

  const seq =  new Tone.Sequence((time, beat) => {
    if (beat.isChecked) {
      beat.soundFunction(time, trackIndex);
    }
    Tone.Draw.schedule(() => {
      const beatElement = document.getElementById(beat.id);
      beatElement.classList.add("beat--playing");
      setTimeout(()=> beatElement.classList.remove("beat--playing"), 100);
    }, time);
  }, patternArray, beatLength);

  // set each sequence to loop and start at the same time.
  seq.loop = true;
  seq.start(0);
  const loopEnd = `+${patternArray.length} * ${beatLength}`;
  console.log(`LoopEnd for Track ${track.id}`, loopEnd);



  return seq;

}


