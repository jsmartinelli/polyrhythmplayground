
import Tone from 'tone';
import {Track} from "./models/Track";

const playButton = document.getElementById('playtrack');
const stopButton = document.getElementById('stoptrack');
const beatDivision = 1;

const track = new Track(4, 4, 2, beatDivision);

const synth = new Tone.MetalSynth().toMaster();
const polySynth = new Tone.PolySynth(6, Tone.Synth).toMaster();

function triggerSynth(time){
  polySynth.triggerAttackRelease(["C4"], "16n");
}

function triggerPolySynth (time) {
  polySynth.triggerAttackRelease(["C4", "E4", "A4"], "16n");
}

// Configure the track to have every other note checked
track.measures.forEach((measure) => {
  measure.beats.forEach((beat, index) => {
    if (index % 2 === 0) {
      beat.checkBeat(triggerPolySynth);
    } else if (index === 3) {
      beat.checkBeat(triggerSynth);
    }

  });
});

track.scheduleTrack(Tone);

Tone.Transport.loopEnd = `${track.measures.length}m`;
Tone.Transport.loop = true;
Tone.Transport.timeSignature = 4;
Tone.Transport.bpm.value = 120;

playButton.addEventListener('click', () => Tone.Transport.toggle());
stopButton.addEventListener('click', () => Tone.Transport.toggle());






