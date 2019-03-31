import React from 'react';
import Track from "./Track";

class TrackArea extends React.Component {

  render () {
    let trackComponents = [];

    this.props.tracks.forEach((track) => trackComponents.push(<Track key={track.id} track={track} removeHandler={this.props.removeHandler}/>));

    return <div className="trackarea">
      <h3>Tracks</h3>
        {trackComponents}
    </div>
  }
}

export default TrackArea;
