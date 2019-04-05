import React from 'react';
import TrackArea from "./components/TrackArea";
import InstrumentSelect from "./components/InstrumentSelect";
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
    return <div>
      <h1>Let's make some music!</h1>
      <div id="play">
        <label htmlFor="tempo">Tempo: </label>
        <input type="number" min="1" max="200" defaultValue="120" name="tempo" id="tempo"
               disabled={this.props.metadata.isPlaying}
               onChange={this.onTempoChange}/>
        <button name="play" id="play" onClick={this.playTrack}>Play</button>
      </div>
      <AddTrack createTrackHandler={this.createTrack}/>
      <TrackArea tracks={this.props.tracks.tracks} metadata={this.props.metadata} removeHandler={this.removeTrack} updateHandler={this.updateTrack}/>
      <br/>
      <InstrumentSelect/>
    </div>;
  }
}

function mapStateToProps (state) {
  return state;
}

export default connect(mapStateToProps)(App);
