import { JsTunerUI, Recorder } from './index';

window.onload = () => {
  const ui = new JsTunerUI(document.getElementById("tuner"));
  const recorder = new Recorder();
  recorder.onData = (wave, hz)=>{
    ui.draw(wave, hz);
  }
  recorder.main();
};

