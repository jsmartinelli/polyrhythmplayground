export default class Beat {

  /**
   * Basic constructor for the Beat class.
   */
  constructor () {
    this.isChecked = false;
    this.soundFunction = null;
    this.isplaying = false;
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

  togglePlaying () {
    this.isplaying = !this.isplaying;
  }

}
