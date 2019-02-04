import {Track} from "../src/js/models/Track";

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

