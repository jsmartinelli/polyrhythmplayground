import {Measure} from "../src/models/Measure";

/**
 * Tests for the Measure class.
 */
test('Check that the correct number of beats where created', () => {
  const beats = 8;
  const measure = new Measure(beats);

  expect(measure.beats.length).toBe(beats);
});
