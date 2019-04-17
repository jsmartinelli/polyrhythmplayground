import React from 'react';
import Track from "./Track";

class TrackArea extends React.Component {

  render () {
    let trackComponents = [];

    this.props.tracks.forEach((track) => trackComponents.push(<Track key={track.id} track={track}
                                                                     metadata={this.props.metadata}
                                                                     removeHandler={this.props.removeHandler}
                                                                     updateHandler={this.props.updateHandler}/>));
    const NO_TRACKS_MESSAGE = 'Add a track to make some cool rhythms';

    return <div className="trackarea">
        {trackComponents.length === 0 ? NO_TRACKS_MESSAGE : trackComponents}
    </div>
  }
}

export default TrackArea;
