import React from 'react';
import Beat from "./Beat";

const Measure = (props) => {

  const beats = props.beats.map((beat, index) => <Beat key={index} beat={beat}/>);

  return <div>
    <p>This is a measure</p>
    {beats}
  </div>

};

export default Measure;
