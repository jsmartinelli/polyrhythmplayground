import * as constants from '../../common/common';

const initialState = {
  isPlaying: false,
  sequences: [],
  bpm: ''
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
