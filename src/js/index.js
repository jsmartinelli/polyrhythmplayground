
import Tone from 'tone';
import {Track} from "./models/Track";

console.log(Tone);
const playButton = document.getElementById('playtrack');
const stopButton = document.getElementById('stoptrack');


const track = new Track(4, 4, 2, 2);

// Configure the track to have each quarter note checked.
track.measures.forEach((measure) => {
  measure.beats.forEach((beat, index) => {
    if (index === 1) {
      beat.isChecked = true;
    }
  });
});


const synth = new Tone.MetalSynth().toMaster();
const polySynth = new Tone.PolySynth(6, Tone.Synth).toMaster();

function triggerSynth(time){
  synth.triggerAttackRelease('8n', time);
}

function triggerPolySynth (time) {
  polySynth.triggerAttackRelease(["C4", "E4", "A4"], "8n");
}


track.measures.forEach((measure, measureIndex) => {
  const func = measureIndex%2 ? triggerSynth : triggerPolySynth;
  
  measure.beats.forEach((beat, beatIndex) => {
    if (beat.isChecked) {
      Tone.Transport.schedule(func, Tone.Time('8n') + Tone.Time(`${measureIndex}m`));
    }
  });
});

Tone.Transport.loopEnd = `${track.measures.length}m`;
Tone.Transport.loop = true;

playButton.addEventListener('click', () => {
  Tone.Transport.toggle();
  console.log("started");
});
stopButton.addEventListener('click', () => Tone.Transport.toggle());






