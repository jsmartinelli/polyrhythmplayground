import React from 'react';
import TrackArea from "./views/TrackArea";
import InstrumentSelect from "./views/InstrumentSelect";
import Tone from 'tone';
import AddTrack from "./views/AddTrack";

class App extends React.Component {

  constructor (props) {
    super(props);

    // set initial state
    this.state = {
      tracks: [],
      currentInstrument: '',
    };

    this.playing = false;

    this.updateStateValue = this.updateStateValue.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  updateStateValue (type, value) {
    let obj = {};
    obj[type] = value;
    this.setState(obj);
  }

  createTrack = (trackData) => {
    // TODO: implement this next
    console.log("trackData", trackData);

  };

  removeTrack = (track) => {
    // TODO: implement this after createTrack
  };


  /**
   * Starts and stops all of the tracks.
   */
  toggle () {
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
        <input type="number" min="1" max="200" value={this.state.tempo} name="tempo" id="tempo"
             onChange={(e) => this.updateStateValue("tempo", e.target.value)}/>
        <button name="play" id="play" onClick={this.toggle}>Play</button>
      </div>
      <AddTrack createTrackHandler={this.createTrack}/>
      <TrackArea items={this.state.tracks} removeHandler={this.removeTrack}/>
      <br/>
      <InstrumentSelect/>
    </div>;
  }
}

export default App;
