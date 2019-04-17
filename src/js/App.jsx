import React from 'react';
import TrackArea from "./components/TrackArea";
import AddTrack from "./components/AddTrack";
import {createTrack, deleteTrack, updateTrack} from './store/actions/TrackActions';
import {playTracks, updateBPM} from './store/actions/PlayActions';
import {connect} from "react-redux";
import './styles/index.css';

class App extends React.Component {

  createTrack = (trackData) => {
    this.props.dispatch(createTrack(trackData));
  };

  removeTrack = (track) => {
    this.props.dispatch(deleteTrack(track));
  };

  onTempoChange = (e) => {
    this.props.dispatch(updateBPM(e.target.value));
  };

  playTrack = () => {
    this.props.dispatch(playTracks());
  };


  updateTrack = (track) => {
    this.props.dispatch(updateTrack(track));
  };


  render () {
    return <div className="app">
      <div id="play" className="playarea" name="playarea">
        <label htmlFor="tempo">Tempo: </label>
        <input type="number" min="1" max="200" defaultValue="120" name="tempo" id="tempo"
               disabled={this.props.metadata.isPlaying}
               onChange={this.onTempoChange}/>
        <button className="button" name="play" id="play" onClick={this.playTrack}>Play</button>
      </div>
      <AddTrack createTrackHandler={this.createTrack}/>
      <TrackArea tracks={this.props.tracks.tracks} metadata={this.props.metadata} removeHandler={this.removeTrack} updateHandler={this.updateTrack}/>
      <br/>
      {/*<InstrumentSelect/>*/}
    </div>;
  }
}

function mapStateToProps (state) {
  return state;
}

export default connect(mapStateToProps)(App);
