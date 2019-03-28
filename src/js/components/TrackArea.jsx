import React from 'react';
import '../styles/Tracks.css';
import Track from "./Track";

class TrackArea extends React.Component {

  render () {
    let trackComponents = [];

    this.props.tracks.forEach((track) => trackComponents.push(<Track key={track.id} track={track} removeHandler={this.props.removeHandler}/>));

    return <div className="tracks">
      <h2>Tracks</h2>

      <ul>
        {trackComponents}
      </ul>
    </div>
  }
}

export default TrackArea;
