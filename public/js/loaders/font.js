import { loadImage } from '../loaders.js';
import SpriteSheet from '../SpriteSheet.js';

const CHARS =
  ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';

export function loadFont() {
  return loadImage('./img/font.png').then((image) => {
    const fontSprite = new SpriteSheet(image);

    const size = 8;
    const rowLen = image.width;
    for (let [index, char] of [...CHARS].entries()) {
      const x = (index * size) % rowLen;
      const y = Math.floor((index * size) / rowLen);
      console.log(index, char, x, y);
    }

    fontSprite.define('A', 8, 16, 8, 8);

    return fontSprite;
  });
}
