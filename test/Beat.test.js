import {Beat} from "../src/js/models/Beat";


test('Check the beat defaults', () => {
  const beat = new Beat();

  expect(beat.isChecked).toBe(false);
  expect(beat.sound).toBe(null);

});
