import {Track} from "../js/models/Track";
//import Tone from 'tone';

/**
 * Tests for the Track Class
 */
test("Basic Track creation", () => {
  const beatsPerBar = 4;
  const beatUnit = 4;
  const numOfMeasures = 2;
  const beatDivision = 2;
  const beats = beatsPerBar * beatDivision;
  const track = new Track(beatsPerBar, beatUnit, numOfMeasures, beatDivision);

  // Sanity check that the constructor didn't mutate these values
  expect(track.beatsPerBar).toBe(beatsPerBar);
  expect(track.beatUnit).toBe(beatUnit);
  expect(track.beatDivision).toBe(beatDivision);

  // Where the correct number of measures created?
  expect(track.measures.length).toBe(numOfMeasures);

  // All of the measures should have the same number of beats
  track.measures.forEach( (measure) => {
    expect(measure.beats.length).toBe(beats);
    });

});


test('Testing _getBarsBeatsSixteenths for 8th Note Divisions', () => {
  const beatsPerBar = 4;
  const beatUnit = 4;
  const numOfMeasures = 2;
  const beatDivision = 2;
  const track = new Track(beatsPerBar, beatUnit, numOfMeasures, beatDivision);

  expect(track._getBarsBeatsSixteenths(0, 0)).toBe('0:0:0');
  expect(track._getBarsBeatsSixteenths(0, 1)).toBe('0:0:2');
  expect(track._getBarsBeatsSixteenths(0, 2)).toBe('0:1:0');
  expect(track._getBarsBeatsSixteenths(0, 3)).toBe('0:1:2');
  expect(track._getBarsBeatsSixteenths(0, 4)).toBe('0:2:0');
  expect(track._getBarsBeatsSixteenths(0, 5)).toBe('0:2:2');
  expect(track._getBarsBeatsSixteenths(0, 6)).toBe('0:3:0');
  expect(track._getBarsBeatsSixteenths(0, 7)).toBe('0:3:2');
  expect(track._getBarsBeatsSixteenths(1, 7)).toBe('1:3:2');

});


test('Testing _getBarsBeatsSixteenths for 16th Note Divisions', () => {
  const beatsPerBar = 4;
  const beatUnit = 4;
  const numOfMeasures = 2;
  const beatDivision = 4;
  const track = new Track(beatsPerBar, beatUnit, numOfMeasures, beatDivision);

  // Measure 0, beat 0 at time 0:0:0
  expect(track._getBarsBeatsSixteenths(0, 0)).toBe('0:0:0');
  // Measure 0, beat 1 at time 0:0:1
  expect(track._getBarsBeatsSixteenths(0, 1)).toBe('0:0:1');
  // Measure 0, beat 2 at time 0:0:2
  expect(track._getBarsBeatsSixteenths(0, 2)).toBe('0:0:2');
  // Measure 0, beat 3 at time 0:0:3
  expect(track._getBarsBeatsSixteenths(0, 3)).toBe('0:0:3');
  // Measure 0, beat 4 at time 0:1:0
  expect(track._getBarsBeatsSixteenths(0, 4)).toBe('0:1:0');
  // Measure 0, beat 5 at time 0:1:1
  expect(track._getBarsBeatsSixteenths(0, 5)).toBe('0:1:1');
  // Measure 0, beat 6 at time 0:1:2
  expect(track._getBarsBeatsSixteenths(0, 6)).toBe('0:1:2');
  // Measure 0, beat 7 at time 0:1:3
  expect(track._getBarsBeatsSixteenths(0, 7)).toBe('0:1:3');
  // Measure 0, beat 8 at time 0:2:0
  expect(track._getBarsBeatsSixteenths(0, 8)).toBe('0:2:0');
  // Measure 0, beat 9 at time 0:2:1
  expect(track._getBarsBeatsSixteenths(0, 9)).toBe('0:2:1');
  // Measure 0, beat 10 at time 0:2:2
  expect(track._getBarsBeatsSixteenths(0, 10)).toBe('0:2:2');
  // Measure 0, beat 11 at time 0:2:3
  expect(track._getBarsBeatsSixteenths(0, 11)).toBe('0:2:3');
  // Measure 0, beat 12 at time 0:3:0
  expect(track._getBarsBeatsSixteenths(0, 12)).toBe('0:3:0');
  // Measure 0, beat 13 at time 0:3:1
  expect(track._getBarsBeatsSixteenths(0, 13)).toBe('0:3:1');
  // Measure 0, beat 14 at time 0:3:2
  expect(track._getBarsBeatsSixteenths(0, 14)).toBe('0:3:2');
  // Measure 0, beat 15 at time 0:3:3
  expect(track._getBarsBeatsSixteenths(0, 15)).toBe('0:3:3');
  // Measure 1, beat 15 at time 1:3:3
  expect(track._getBarsBeatsSixteenths(1, 15)).toBe('1:3:3');

});


test('Testing _getBarsBeatsSixteenths for 4th Note Divisions', () => {
  const beatsPerBar = 4;
  const beatUnit = 4;
  const numOfMeasures = 2;
  const beatDivision = 1;
  const track = new Track(beatsPerBar, beatUnit, numOfMeasures, beatDivision);

  expect(track._getBarsBeatsSixteenths(0, 0)).toBe('0:0:0');
  expect(track._getBarsBeatsSixteenths(0, 1)).toBe('0:1:0');
  expect(track._getBarsBeatsSixteenths(0, 2)).toBe('0:2:0');
  expect(track._getBarsBeatsSixteenths(0, 3)).toBe('0:3:0');
  expect(track._getBarsBeatsSixteenths(1, 3)).toBe('1:3:0');


});


test('Testing Track.Schedule by checking every other beat', () => {
  const Tone = jest.genMockFromModule('tone');

  const beatsPerBar = 4;
  const beatUnit = 4;
  const numOfMeasures = 1;
  const beatDivision = 2;
  const track = new Track(beatsPerBar, beatUnit, numOfMeasures, beatDivision);
  track.measures.forEach((measure) => {
    measure.beats.forEach((beat, index) => {
      if (index % 2 === 0) {
        beat.checkBeat(() => true);
      }
    });
  });

  track.scheduleTrack(Tone);

  expect(Tone.Transport.schedule).toHaveBeenCalledTimes(4);



});


