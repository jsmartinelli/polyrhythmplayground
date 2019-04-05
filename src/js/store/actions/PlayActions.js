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
    sequenceArray.forEach(sequence => sequence.start(0));

    // Play them!
    dispatch(togglePlaying());
    Tone.context.latencyHint = 'balanced';
    //TODO: why does setting the BPM force it to 4/4 time?
    Tone.Transport.bpm.value = bpm ? bpm : 120;
    //Tone.Transport.loop = true;
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
  //seq.loopStart = 0;
  // TODO: See if setting loopEnd to the
  const loopEnd = `+${patternArray.length} * ${beatLength}`;
  console.log(`LoopEnd for Track ${track.id}`, loopEnd);
  //seq.loopEnd = loopEnd;


  return seq;

}


