import Entity from '../Entity.js';
import Emitter from '../traits/Emitter.js';
import { loadAudioBoard } from '../loaders/audio.js';

export function loadCanon(audioContext) {
  return loadAudioBoard('mario', audioContext).then((audio) => {
    return createCanonFactory(audio);
  });
}

function createCanonFactory(audio) {
  function emitBullet() {
    console.log('Emit called', entity, level);
  }
  return function createCanon() {
    const canon = new Entity();
    canon.audio = audio;

    canon.addTrait(new Emitter());

    return canon;
  };
}
