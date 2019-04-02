import React from 'react';
import Beat from "./Beat";

const Measure = (props) => {

  const beats = props.beats.map((beat, index) => <Beat key={index} beat={beat} metadata={props.metadata} updateHandler={props.updateHandler}/>);

  return <div className="measure">
    {beats}
  </div>

};

export default Measure;
