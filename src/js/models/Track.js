import Measure from "./Measure";

class Track {

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

    this.beatLength = `${beatDivision * beatUnit}n`;

  };

  /**
   * Schedules all of the beats on the track using Tone.js Transport Class
   * @param {Tone} tone - instance of Tone.
   */
  scheduleTrack (tone) {
    const patternArray = [];
    console.log(this.beatDivision);
    this.measures.forEach((measure, measureIndex) => {
      measure.beats.forEach((beat, beatIndex) => {
        // push all of the beats into an array
        patternArray.push(beat);

        // const func = beat.soundFunction;
        // const time = this._getBarsBeatsSixteenths(measureIndex, beatIndex);
        // if (beat.isChecked) {
          // tone.Transport.schedule(func, tone.Time(time));
          //new tone.Loop(func, tone.Time(time)).start(time);
        // }
      });
    });

    // now, setup the sequence.
    console.log(patternArray);
    const seq =  new tone.Sequence((time, beat) => {
      if (beat.isChecked) {
        beat.soundFunction(time);
      }
    }, patternArray, '4n');

    seq.loop = true;

    return seq;

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
    // Default sixteenths to zero to handle a beatDivistion of 1 (quarter notes)
    let sixteenths = 0;

    if (this.beatDivision !== 1) {
      sixteenths = this.beatDivision % 4 === 0 ? beatIndex % this.beatDivision : (beatIndex * this.beatDivision) % 4;
    }

    return `${measureIndex}:${quarters}:${sixteenths}`;
  };


}

export default Track;
