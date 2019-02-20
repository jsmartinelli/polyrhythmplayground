import React from 'react';
import '../styles/Tracks.css';
import Track from "./Track";

class TrackArea extends React.Component {

  render () {
    let trackComponents = [];

    this.props.items.forEach((item) => trackComponents.push(<Track item={item} removeHandler={this.props.removeHandler}/>));

    return <div className="tracks">
      <h2>Tracks</h2>

      <ul>
        {trackComponents}
      </ul>
    </div>
  }
}

export default TrackArea;
