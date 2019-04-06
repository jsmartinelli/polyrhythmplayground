import Beat from "../js/models/Beat";

let beat;
const beatId = 1;
const measureId = 'T1_M1';

beforeEach(() => {
  beat = new Beat(beatId, measureId);
});

test('Check the beat defaults', () => {
  expect(beat.isChecked).toBe(false);
  expect(beat.soundFunction).toBe(null);
  expect(beat.id).toBe(`${measureId}_B${beatId}`);

});

test('Checking a beat', () => {
  const func = () => true;
  beat.checkBeat(func);

  expect(beat.isChecked).toBe(true);
  expect(beat.soundFunction).toBe(func);

});

test('Unchecking a beat', () => {
  const func = () => true;
  beat.checkBeat(func);
  beat.uncheckBeat();

  expect(beat.isChecked).toBe(false);
  expect(beat.soundFunction).toBe(null);

});
