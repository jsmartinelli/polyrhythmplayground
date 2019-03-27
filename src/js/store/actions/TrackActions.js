import {CREATE_TRACK, DELETE_TRACK} from '../../common/common';

export function createTrack (track) {
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
