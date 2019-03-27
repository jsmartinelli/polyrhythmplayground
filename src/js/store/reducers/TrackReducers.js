import {CREATE_TRACK, DELETE_TRACK} from '../../common/common';

const initialState = {
  tracks: []
};


export default function trackReducers(state = initialState, action) {

  switch (action.type) {
    case (CREATE_TRACK): {



      return state;
    }

    case (DELETE_TRACK): {




    }

    default: {
      return state;
    }

  }


}
