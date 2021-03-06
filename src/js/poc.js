import Track from "./models/Track";
import Tone from "tone";

const beatDivision = 1;

const track = new Track(4, 4, 2, beatDivision);
const track2 = new Track(3, 4, 2, beatDivision);

//const synth = new Tone.MetalSynth().toMaster();
const polySynth = new Tone.PolySynth(6, Tone.Synth).toMaster();

function triggerSynth1(time){
  polySynth.triggerAttackRelease(["C4"], time);
  console.log("triggerSynth1");
}

function triggerSynth2 (time) {
  polySynth.triggerAttackRelease(["D4"], time);
  console.log("triggerSynth2");
}

function triggerSynth3(time){
  polySynth.triggerAttackRelease(["E4"], time);
  console.log("triggerSynth3");
}

function triggerSynth4(time){
  polySynth.triggerAttackRelease(["F4"], time);
  console.log("triggerSynth4");
}


function triggerSynth21(time){
  polySynth.triggerAttackRelease(["E3"], time);
  console.log("triggerSynth21");
}

function triggerSynth22 (time) {
  polySynth.triggerAttackRelease(["F3"], time);
  console.log("triggerSynth22");
}

function triggerSynth23(time){
  polySynth.triggerAttackRelease(["G3"], time);
  console.log("triggerSynth23");
}


// Configure the track to have every other note checked
track.measures.forEach((measure) => {
  measure.beats.forEach((beat, index) => {
    switch (index % 4) {
      case 0: beat.checkBeat(triggerSynth1); break;
      case 1: beat.checkBeat(triggerSynth2); break;
      case 2: beat.checkBeat(triggerSynth3); break;
      case 3: beat.checkBeat(triggerSynth4); break;
      default: beat.checkBeat(triggerSynth1);
    }
  });
});

track2.measures.forEach((measure) => {
  measure.beats.forEach((beat, index) => {
    switch (index % 3) {
      case 0: beat.checkBeat(triggerSynth21); break;
      case 1: beat.checkBeat(triggerSynth22); break;
      case 2: beat.checkBeat(triggerSynth23); break;
      default: beat.checkBeat(triggerSynth1);
    }
  });
});


const sequences = [];

sequences.push(track.scheduleTrack(Tone));
sequences.push(track2.scheduleTrack(Tone));
sequences.forEach(seq => {
  seq.start(0);
});

// Tone.Transport.loopEnd = `${track2.measures.length}m`;
// Tone.Transport.loop = true;
// Tone.Transport.timeSignature = 4;
// Tone.Transport.bpm.value = 120;

// Tone.context.latencyHint = 'balanced';
