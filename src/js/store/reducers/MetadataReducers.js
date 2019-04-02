import * as constants from '../../common/common';

const initialState = {
  isPlaying: false,
  sequences: []
};


export default function metadataReducers (state = initialState, action) {
  switch (action.type) {
    case constants.TOGGLE_PLAYING: {
      return {
        ...state,
        isPlaying: !state.isPlaying
      }
    }

    default: {
      return state;
    }


  }
}
