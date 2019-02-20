import React from 'react';

class Track extends React.Component {
  render () {
    return (
      <li>
        <h3>This is a track #{this.props.item.index}</h3>
        <button onClick={() => this.props.removeHandler(this.props.item.index)}>X</button>
      </li>
    );
  }
}

export default Track;
