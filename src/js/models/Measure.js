import Beat from "./Beat";

class Measure {


  /**
   * Creates a measure with the expected number of beats
   * @param {number} beats - the number of beats that are in the measure.
   */
  constructor(beats){
    this.beats = [];

    for (let i = 0; i < beats; i++) {
      this.beats.push(new Beat());
    }

  }
}

export default Measure;
