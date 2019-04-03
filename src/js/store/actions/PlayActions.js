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
      dispatch(togglePlaying());
      return;
    }

    // Schedule all of the tracks
    sequenceArray = tracks.tracks.map((track) => _scheduleTrack(track));

    // Play them!
    dispatch(togglePlaying());
    Tone.context.latencyHint = 'balanced';
    Tone.Transport.bpm.value = bpm;
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
function _scheduleTrack (track) {
  const patternArray = [];

  const {beatLength} = track;

  track.measures.forEach((measure) => {
    measure.beats.forEach((beat) => {
      patternArray.push(beat);
    });
  });

  const seq =  new Tone.Sequence((time, beat) => {
    if (beat.isChecked) {
      beat.soundFunction(beatLength);
    }
    // TODO: figure out how to make draw work.
    // Tone.Draw.schedule(() => {
    //   console.log('Draw for', beat);
    //   beat.togglePlaying();
    // }, time);
  }, patternArray, beatLength);

  // set each sequence to loop and start at the same time.
  seq.loop = true;
  seq.start(0);

  return seq;

}


