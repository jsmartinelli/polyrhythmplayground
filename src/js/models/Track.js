import Measure from "./Measure";
import {beatDivisions} from '../common/common';

export default class Track {

  /**
   * Create a new Track based ont the following parameters
   * @param {number} beatsPerBar - How many beats are in a measure (this is the numerator of the time signature)
   * @param {number} beatUnit - What is one beat in a measure (This is the denominator of the time signature)
   * @param {number} numOfMeasures - How many measures are in the track.
   * @param {string} beatDivision - The name of the note length used to decide how many beats are in a measure
   *                    (e.g. 'quarter', 'eighth', etc.)
   */
  constructor (beatsPerBar, beatUnit, numOfMeasures, beatDivision) {
    // Generate a unique-ish ID based on Date.now() and a random value
    this.id = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase()
    this.beatsPerBar = parseInt(beatsPerBar);
    this.beatUnit = parseInt(beatUnit);
    this.beatDivision = parseInt(beatDivisions.find((beatDiv) => beatDiv.name === beatDivision).value) / this.beatUnit;
    this.beatLength = `${this.beatDivision * this.beatUnit}n`;
    this.measures = [];

    const beats = this.beatDivision * this.beatsPerBar;
    for (let i = 0; i < numOfMeasures; i++) {
      this.measures.push(new Measure(i, this.id, beats));
    }


  };

}

