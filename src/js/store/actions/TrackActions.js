import {CREATE_TRACK, DELETE_TRACK} from '../../common/common';
import Track from "../../models/Track";

export function createTrack (trackData) {
  const [beatsPerBar, beatUnit] = trackData.timeSignature.split('/');
  const track = new Track(beatsPerBar, beatUnit, trackData.measures, trackData.beatDivision);

  return {
    type: CREATE_TRACK,
    payload: {
      track
    }
  }
}


export function deleteTrack (track) {
  return {
    type: DELETE_TRACK,
    payload: {
      track
    }
  }
}
