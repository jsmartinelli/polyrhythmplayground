import {Measure} from "./Measure";

export class Track {

  /**
   * Create a new Track based ont the following parameters
   * @param {number} beatsPerBar - How many beats are in a measure (this is the numerator of the time signature)
   * @param {number} beatUnit - What is one beat in a measure (This is the denominator of the time signature)
   * @param {number} numOfMeasures - How many measures are in the track.
   * @param {number} beatDivision - The number used to decide how many beats are in a measure
   * (e.g. beats in a measure = beatDivision * beatsPerBar)
   */
  constructor (beatsPerBar, beatUnit, numOfMeasures, beatDivision) {
    this.beatsPerBar = beatsPerBar;
    this.beatUnit = beatUnit;
    this.beatDivision = beatDivision;

    this.measures = [];

    const beats = beatDivision * beatsPerBar;

    for (let i = 0; i < numOfMeasures; i++) {
      this.measures.push(new Measure(beats));
    }

  };

  /**
   * Schedules all of the beats on the track using Tone.js Transport Class
   * @param {Tone.Transport} transport - instance of Tone.Transport.
   */
  scheduleTrack (tone) {
    this.measures.forEach((measure, measureIndex) => {
      measure.beats.forEach((beat, beatIndex) => {
        const func = beat.soundFunction;
        const time = this._getBarsBeatsSixteenths(measureIndex, beatIndex);

        if (beat.isChecked) {
          tone.Transport.schedule(func, tone.Time(time));
        }
      });
    });
  };

  /**
   * Generate a given beat's time in Bars:Beats:Sixteenths notation
   * @private
   *
   * @param measureIndex - index of the beat's measure
   * @param beatIndex - beat's index in the measure
   * @returns {string} Bars:Beats:Sixteenths notation for the beat
   */
  _getBarsBeatsSixteenths(measureIndex, beatIndex) {
    const quarters = Math.floor(beatIndex/this.beatDivision);
    const sixteenths =  this.beatDivision % 4 === 0 ? beatIndex % this.beatDivision : (beatIndex * this.beatDivision) % 4;
    return `${measureIndex}:${quarters}:${sixteenths}`;
  };

}
