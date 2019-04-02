import * as constants from '../../common/common';
import Track from "../../models/Track";

export function createTrack (trackData) {
  const [beatsPerBar, beatUnit] = trackData.timeSignature.split('/');
  const track = new Track(beatsPerBar, beatUnit, trackData.measures, trackData.beatDivision);
  return {
    type: constants.CREATE_TRACK,
    payload: {
      track
    }
  }
}

export function deleteTrack (trackId) {
  return {
    type: constants.DELETE_TRACK,
    payload: {
      trackId
    }
  }
}

export function updateTrack (track) {
  return {
    type: constants.UPDATE_TRACK,
    payload: {
      track
    }
  }
}
