export default class Beat {

  /**
   *  Constructor the a beat.
   * @param beatId
   * @param measureId
   */
  constructor (beatId, measureId) {
    this.id = `${measureId}_B${beatId}`;
    this.isChecked = false;
    this.soundFunction = null;
  }

  /**
   * Indicate that a beat is to be played with the corresponding soundFunction function.
   * @param func - the function that generates the soundFunction.
   */
  checkBeat (func) {
    this.isChecked = true;
    this.soundFunction = func;
  }

  /**
   * Removes the beat from being played.
   */
  uncheckBeat () {
    this.isChecked = false;
    this.soundFunction = null;
  }
}
