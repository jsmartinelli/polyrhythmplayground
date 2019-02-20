import React from 'react';
import TrackArea from "./views/TrackArea";
import InstrumentSelect from "./views/InstrumentSelect";

class App extends React.Component {

  constructor (props) {
    super(props);

    // set initial state
    this.state = {
      tracks: [],
      currentInstrument: '',
      tempo: '120',
      timeSignature: '4/4',
      noteDivision: 'quarter',
      measures: '4'
    };

    this.updateStateValue = this.updateStateValue.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  updateStateValue (type, value) {
    let obj = {};
    obj[type] = value;
    this.setState(obj);
  }

  addTrack () {
    let tracks = this.state.tracks;
    // TODO: figure out how I am going to handle the models
    tracks.push({
      index: tracks.length,
      value: "thing" + tracks.length});
    this.setState({tracks: tracks});

  }

  removeTrack (trackToRemove) {
    let tracks = this.state.tracks.filter((track) => track.index !== trackToRemove );
    this.setState({
      tracks: tracks
    });
  }

  render () {
    return <div>
      <h1>Let's make some music!</h1>
      <label htmlFor="tempo">Tempo: </label>
      <input type="number" min="1" max="200" value={this.state.tempo} name="tempo" id="tempo"
             onChange={(e) => this.updateStateValue("tempo", e.target.value)}/>
      <div>
        <label htmlFor="timeSignature">Time Signature </label>
        <select id="timeSignature" name="timeSignature" value={this.state.timeSignature}
                onChange={(e) => this.updateStateValue("timeSignature", e.target.value)}>
          <option value="3/4">3/4</option>
          <option value="4/4">4/4</option>
          <option value="5/4">5/4</option>
          <option value="6/8">6/8</option>
          <option value="12/8">12/8</option>
        </select>
      </div>
      <div>
        <label htmlFor="noteDivision">Note Division </label>
        <select id="noteDivision" name="noteDivision" value={this.state.noteDivision}
                onChange={(e) => this.updateStateValue("noteDivision", e.target.value)}>
          <option value="whole">whole</option>
          <option value="quarter">quarter</option>
          <option value="eighth">eight</option>
          <option value="sixteenth">sixteenth</option>
        </select>
      </div>
      <label htmlFor="measures">Measures: </label>
      <input type="number" min="1" max="8" step="1" value={this.state.measures} id="measures" name="measures"
             onChange={(e) => this.updateStateValue("measures", e.target.value)}/>
      <button name="addtrack" id="addtrack" onClick={this.addTrack}>Add Track</button>
      <button name="play" id="play">Play</button>

      <TrackArea items={this.state.tracks} removeHandler={this.removeTrack}/>
      <br/>
      <InstrumentSelect/>
    </div>;
  }
}

export default App;
