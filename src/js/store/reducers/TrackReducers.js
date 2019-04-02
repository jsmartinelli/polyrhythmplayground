import * as constants from '../../common/common';

const initialState = {
  tracks: []
};


export default function trackReducers(state = initialState, action) {
  switch (action.type) {
    case constants.CREATE_TRACK: {
      return {
        ...state,
        tracks: state.tracks.concat(action.payload.track)
      };
    }

    case constants.DELETE_TRACK: {
      const newTracks = state.tracks.filter((track) => track.id !== action.payload.trackId);
      return {
        ...state,
        tracks: newTracks
      };
    }

    case constants.UPDATE_TRACK: {
      const newTracks = state.tracks.map((track) => {
        if (track.id === action.payload.track.id) {
          return action.payload.track;
        }
        return track;
      });

      return {
        ...state,
        tracks: newTracks
      }


    }

    default: {
      return state;
    }

  }


}
