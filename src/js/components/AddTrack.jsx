import React from 'react';
import {beatDivisions, timeSignatures} from '../common/common';

class AddTrack extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      timeSignature: '4/4',
      beatDivision: 'quarter',
      measures: '2'
    }
  }

  timeSignatureOnChange = (e) => {
    this.setState({timeSignature: e.target.value});
  };

  noteDivisionOnChange = (e) => {
    this.setState({beatDivision: e.target.value});
  };

  measureOnChange = (e) => {
    this.setState({measures: e.target.value});
  };

  createTrack = (e) => {
    this.props.createTrackHandler({
      ...this.state
    });
  };


  render() {
    return <div className="addtrack" name="addtrack" id="addtrack">
      <div className="addtrack__item">
        <label htmlFor="timeSignature">Time Signature </label>
        <select id="timeSignature" name="timeSignature" defaultValue="4/4" onChange={this.timeSignatureOnChange}>
          {
            timeSignatures.map(timeSig => (
              <option key={timeSig} value={timeSig}>{timeSig}</option>
            ))
          }
        </select>
      </div>
      <div className="addtrack__item">
        <label htmlFor="noteDivision">Note Division </label>
        <select id="noteDivision" name="noteDivision" defaultValue="quarter" onChange={this.noteDivisionOnChange}>
          {
            beatDivisions.map(({name}) => (
              <option key={name} value={name}>{name}</option>
            ))
          }
        </select>
      </div>
      <div className="addtrack__item">
        <label htmlFor="measures">Measures: </label>
        <input type="number" min="1" max="8" step="1" id="measures" name="measures" defaultValue="2"
               onChange={this.measureOnChange}/>
      </div>
      <div className="addtrack__item">
        <button name="addtrack" id="addtrack" onClick={this.createTrack}>Add Track</button>
      </div>
    </div>
  }
}
export default AddTrack;
