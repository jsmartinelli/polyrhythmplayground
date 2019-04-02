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
      this.measures.push(new Measure(beats));
    }


  };

  // /**
  //  * Schedules all of the beats on the track using Tone.js Transport Class
  //  * @param {Tone} tone - instance of Tone.
  //  */
  // scheduleTrack (tone) {
  //   const patternArray = [];
  //   console.log(this.beatDivision);
  //   this.measures.forEach((measure, measureIndex) => {
  //     measure.beats.forEach((beat, beatIndex) => {
  //       patternArray.push(beat);
  //     });
  //   });
  //
  //   // now, setup the sequence.
  //   console.log(patternArray);
  //   const seq =  new tone.Sequence((time, beat) => {
  //     if (beat.isChecked) {
  //       beat.soundFunction(this.beatLength);
  //     }
  //   }, patternArray, this.beatLength);
  //
  //   seq.loop = true;
  //
  //   return seq;
  //
  // };

  // /**
  //  * Generate a given beat's time in Bars:Beats:Sixteenths notation
  //  * @private
  //  *
  //  * @param measureIndex - index of the beat's measure
  //  * @param beatIndex - beat's index in the measure
  //  * @returns {string} Bars:Beats:Sixteenths notation for the beat
  //  */
  // _getBarsBeatsSixteenths(measureIndex, beatIndex) {
  //   const quarters = Math.floor(beatIndex/this.beatDivision);
  //   // Default sixteenths to zero to handle a beatDivistion of 1 (quarter notes)
  //   let sixteenths = 0;
  //
  //   if (this.beatDivision !== 1) {
  //     sixteenths = this.beatDivision % 4 === 0 ? beatIndex % this.beatDivision : (beatIndex * this.beatDivision) % 4;
  //   }
  //
  //   return `${measureIndex}:${quarters}:${sixteenths}`;
  // };


}

