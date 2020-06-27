import { loadJSON } from '../loaders.js';
import AudioBoard from '../AudioBoard.js';
// const audioContext = new AudioContext();
// const audioBoard = new AudioBoard(audioContext);
// const loadAudio = createAudioLoader(audioContext);

// loadAudio('/audio/jump.ogg').then((buffer) => {
//   audioBoard.addAudio('jump', buffer);
// });
// loadAudio('/audio/jump.ogg').then((buffer) => {
//   audioBoard.addAudio('stomp', buffer);
// });

export function loadAudioBoard(name, audioContext) {
  const loadAudio = createAudioLoader(audioContext);
  loadJSON(`/sounds/${name}.json`).then((audioSheet) => {
    const audioBoard = new AudioBoard();
    const fx = audioSheet.fx;
    Object.keys(fx).forEach((name) => {
      const url = fx[name];
      console.log(name, url);
    });

    console.log('load audioBoard context', audioContext);
    console.log(audioSheet);
  });
}

export function createAudioLoader(context) {
  return function loadAudio(url) {
    return fetch(url)
      .then((response) => {
        return response.arrayBuffer();
      })
      .then((arrayBuffer) => {
        return context.decodeAudioData(arrayBuffer);
      });
  };
}
