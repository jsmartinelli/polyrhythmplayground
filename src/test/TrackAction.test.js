import {deleteTrack, createTrack} from '../js/store/actions/TrackActions';
import * as common from '../js/common/common';
import Track from "../js/models/Track";

test('Basic createTrack test', () => {

  const trackData = {
    timeSignature: '4/4',
    beatDivision: 'quarter',
    measures: '2'
  };

  const [beatsPerBar, beatUnit] = trackData.timeSignature.split('/');
  const track = new Track(beatsPerBar, beatUnit, trackData.measures, trackData.beatDivision);

  const action = createTrack(trackData);
  expect(action.type).toBe(common.CREATE_TRACK);
  expect(action.payload.track.beatUnit).toBe(track.beatUnit);
  expect(action.payload.track.beatsPerBar).toBe(track.beatsPerBar);
  expect(action.payload.track.beatDivision).toBe(track.beatDivision);
  expect(action.payload.track.beatLength).toBe(track.beatLength);
  expect(action.payload.track.measures.length).toBe(track.measures.length);

});

test('Basic deleteTrack test', () => {
  const trackId = 1;

  const action = deleteTrack(trackId);
  expect(action.type).toBe(common.DELETE_TRACK);
  expect(action.payload.trackId).toBe(trackId);

});
