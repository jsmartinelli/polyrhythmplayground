import Beat from "./Beat";

export default class Measure {


  /**
   * Creates a measure with the expected number of beats
   * @param id
   * @param trackId
   * @param {number} beats - the number of beats that are in the measure.
   */
  constructor(id, trackId, beats){
    this.id = `${trackId}_M${id}`;
    this.beats = [];

    for (let i = 0; i < beats; i++) {
      this.beats.push(new Beat(i, this.id));
    }

  }
}
