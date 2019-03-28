import React from 'react';
import '../styles/InstrumentSelect.css';
import Instrument from "./Instrument";

class InstrumentSelect extends React.Component {
  render () {
    return <div className="instrumentselect">
      <h2>Instrument Select</h2>
      <ul>
        <Instrument/>
        <Instrument/>
      </ul>
    </div>
  }
}

export default InstrumentSelect;
