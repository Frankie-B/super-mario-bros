import { loadJSON } from '../loaders.js';

export function loadMusicSheet(name) {
  return loadJSON(`/music/${name}.json`).then((musicSheet) => {
    console.log(musicSheet);
  });
}
