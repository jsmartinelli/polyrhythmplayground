import {Measure} from "./Measure";

export class Track {


  /**
   * Create a new Track based ont the following parameters
   * @param {number} beatsPerBar - How many beats are in a measure (this is the numerator of the time signature)
   * @param {number} beatUnit - What is one beat in a measure (This is the denominator of the time signature)
   * @param {number} numOfMeasures - How many measures are in the track.
   * @param {number} beatDivision - The number used to decide how many beats are in a measure (e.g. beats in a measure = beatDivision * beatsPerBar)
   * TODO: beatDivision needs a better name
   */
  constructor (beatsPerBar, beatUnit, numOfMeasures, beatDivision) {
    this.beatsPerBar = beatsPerBar;
    this.beatUnit = beatUnit;
    this.numOfMeasures = numOfMeasures;
    this.beatDivision = beatDivision;

    this.measures = [];

    const beats = beatDivision * beatsPerBar;

    for (let i = 0; i < numOfMeasures; i++) {
      this.measures.push(new Measure(beats));
    }



  };







}
