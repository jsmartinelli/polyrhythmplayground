import {CREATE_TRACK, DELETE_TRACK} from '../../common/common';

const initialState = {
  tracks: []
};


export default function trackReducers(state = initialState, action) {

  switch (action.type) {
    case (CREATE_TRACK): {
      return {
        ...state,
        tracks: state.tracks.concat(action.payload.track)
      };
    }

    case (DELETE_TRACK): {
      const newTracks = state.tracks.filter((track) => track.id !== action.payload.track.id);
      return {
        ...state,
        tracks: newTracks
      };
    }

    default: {
      return state;
    }

  }


}
