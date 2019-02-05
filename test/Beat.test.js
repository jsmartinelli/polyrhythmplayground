import {Beat} from "../src/js/models/Beat";

let beat;

beforeEach(() => {
  beat = new Beat();
})

test('Check the beat defaults', () => {
  expect(beat.isChecked).toBe(false);
  expect(beat.soundFunction).toBe(null);

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
