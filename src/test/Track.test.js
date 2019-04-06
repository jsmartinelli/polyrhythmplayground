import Track from '../js/models/Track';
//import Tone from 'tone';

/**
 * Tests for the Track Class
 */
test("Basic Track creation", () => {
  const beatsPerBar = 4;
  const beatUnit = 4;
  const numOfMeasures = 2;
  const beatDivisionInput = 'quarter';
  const beatDivisionOutput = 1;
  const beats = beatsPerBar * beatDivisionOutput;
  const beatLength = `${beatDivisionOutput * beatUnit}n`;
  const track = new Track(beatsPerBar, beatUnit, numOfMeasures, beatDivisionInput);

  // Sanity check that the constructor didn't mutate these values
  expect(track.beatsPerBar).toBe(beatsPerBar);
  expect(track.beatUnit).toBe(beatUnit);
  expect(track.beatDivision).toBe(beatDivisionOutput);
  expect(track.beatLength).toBe(beatLength);

  // Check that the correct number of measures created
  expect(track.measures.length).toBe(numOfMeasures);

  // All of the measures should have the same number of beats
  track.measures.forEach( (measure) => {
    expect(measure.beats.length).toBe(beats);
    });

});


test("Track Creation with String number values", () => {
  const beatsPerBar = 4;
  const beatUnit = 4;
  const numOfMeasures = 2;
  const beatDivisionInput = 'quarter';
  const beatDivisionOutput = 1;
  const beatLength = `${beatDivisionOutput * beatUnit}n`;
  const track = new Track(beatsPerBar.toString(), beatUnit.toString(), numOfMeasures.toString(), beatDivisionInput);

  // String values are parsed correctly as integers
  expect(track.beatsPerBar).toBe(beatsPerBar);
  expect(track.beatUnit).toBe(beatUnit);
  expect(track.beatDivision).toBe(beatDivisionOutput);
  expect(track.beatLength).toBe(beatLength);
});

test("Track ID is unique", () => {
  const beatsPerBar = 4;
  const beatUnit = 4;
  const numOfMeasures = 2;
  const beatDivisionInput = 'quarter';
  const beatDivisionOutput = 1;
  const beats = beatsPerBar * beatDivisionOutput;
  const beatLength = `${beatDivisionOutput * beatUnit}n`;
  const track1 = new Track(beatsPerBar, beatUnit, numOfMeasures, beatDivisionInput);
  const track2 = new Track(beatsPerBar, beatUnit, numOfMeasures, beatDivisionInput);
  expect(track1.id === track2.id).toBeFalsy();

});


