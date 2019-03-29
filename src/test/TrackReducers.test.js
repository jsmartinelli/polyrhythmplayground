import trackReducers from '../js/store/reducers/TrackReducers';
import * as common from '../js/common/common';
import Track from "../js/models/Track";

let initialState;

beforeEach(() => {
  initialState = {
    tracks: []
  }
});


test('Basic create Track flow', () => {
  const track = new Track(4, 4, 1, 'quarter');
  const action = {
    type: common.CREATE_TRACK,
    payload: {
      track: track
    }
  };

  const outputState = trackReducers(initialState, action)
  expect(outputState.tracks.length).toBe(1);

});


test('Basic remove Track flow', () => {
  const track = new Track(4, 4, 1, 'quarter');
  const action = {
    type: common.DELETE_TRACK,
    payload: {
      trackId: track.id
    }
  };

  initialState.tracks.push(track);

  const outputState = trackReducers(initialState, action)
  expect(outputState.tracks.length).toBe(0);

});


test('Default flow', () => {
  const track = new Track(4, 4, 1, 'quarter');
  initialState.tracks.push(track);

  const action = {
    type: "AN_INVALID_TYPE",
    payload: {
      track: track
    }
  };

  const outputState = trackReducers(initialState, action)
  expect(outputState.tracks.length).toBe(1);

});
