import Measure from "../js/models/Measure";

/**
 * Tests for the Measure class.
 */
test('Check that the correct number of beats where created', () => {
  const beats = 8;
  const trackId = "T1";
  const measureId = 1;
  const measure = new Measure(measureId, trackId, beats);

  expect(measure.beats.length).toBe(beats);
  expect(measure.id).toBe(`${trackId}_M${measureId}`);
});
