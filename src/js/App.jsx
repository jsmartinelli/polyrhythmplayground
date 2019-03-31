import React from 'react';
import TrackArea from "./components/TrackArea";
import InstrumentSelect from "./components/InstrumentSelect";
import Tone from 'tone';
import AddTrack from "./components/AddTrack";
import {createTrack, deleteTrack} from './store/actions/TrackActions';
import {connect} from "react-redux";
import './styles/index.css';

class App extends React.Component {

  constructor (props) {
    super(props);
    this.playing = false;
  }


  createTrack = (trackData) => {
    this.props.dispatch(createTrack(trackData));
  };

  removeTrack = (track) => {
    this.props.dispatch(deleteTrack(track));
  };

  onTempoChange = (e) => {
    Tone.Transport.tempo = e.target.value;
  };

  /**
   * Starts and stops all of the tracks.
   */
  toggle = () => {
    if (!this.playing) {
      // Starting the tracks slightly in the future to help fight latency
      Tone.Transport.start('+0.5');
    }
    else {
      Tone.Transport.stop();
    }
    this.playing = !this.playing;
  }

  render () {
    return <div>
      <h1>Let's make some music!</h1>
      <div id="play">
        <label htmlFor="tempo">Tempo: </label>
        <input type="number" min="1" max="200" defaultValue="120" name="tempo" id="tempo" onChange={this.onTempoChange}/>
        <button name="play" id="play" onClick={this.toggle}>Play</button>
      </div>
      <AddTrack createTrackHandler={this.createTrack}/>
      <TrackArea tracks={this.props.tracks} removeHandler={this.removeTrack}/>
      <br/>
      <InstrumentSelect/>
    </div>;
  }
}

function mapStateToProps (state) {
  return state.tracks;
}

export default connect(mapStateToProps)(App);
