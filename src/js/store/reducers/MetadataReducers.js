import * as constants from '../../common/common';
import Tone from 'tone';

const initialState = {
  isPlaying: false,
  sequences: [],
  bpm: '',
  samples: [new Tone.Player('https://s3-us-west-2.amazonaws.com/s.cdpn.io/969699/eucl-e3-2.mp3'),
            new Tone.Player('https://s3-us-west-2.amazonaws.com/s.cdpn.io/969699/eucl-fs3-1.mp3'),
            new Tone.Player('https://s3-us-west-2.amazonaws.com/s.cdpn.io/969699/eucl-a3-1.mp3'),
            new Tone.Player('https://s3-us-west-2.amazonaws.com/s.cdpn.io/969699/eucl-cs4-1.mp3')]
};


export default function metadataReducers (state = initialState, action) {
  switch (action.type) {
    case constants.TOGGLE_PLAYING: {
      return {
        ...state,
        isPlaying: !state.isPlaying
      }
    }

    case constants.UPDATE_BPM: {
      return {
        ...state,
        bpm: action.payload.bpm
      }
    }

    default: {
      return state;
    }


  }
}
