import SpriteSheet from './SpriteSheet.js';
import { loadImage } from './loaders.js';

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

context.fillRect(0, 0, 50, 50);

loadImage('/img/tiles.png').then((image) => {
  // Create a sprite API to hand loading of tiles
  const sprites = new SpriteSheet(image, 16, 16);
  sprites.define('ground', 0, 0);
  sprites.define('sky', 3, 23);
  for (let x = 0; x < 25; x++) {
    for (let y = 0; y < 14; y++) {
      sprites.draw('sky', context, x * 16, y * 16);
    }
  }
});
