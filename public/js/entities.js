import Entity from './Entity.js';
import { loadSpriteSheet } from './loaders.js';
import Jump from './traits/Jump.js';
import Go from './traits/Go.js';

export function createMario() {
  return loadSpriteSheet('mario').then((sprite) => {
    console.log(sprite);
    const mario = new Entity();

    mario.size.set(14, 16);

    mario.addTrait(new Go());

    mario.addTrait(new Jump());

    mario.draw = function drawMario(context) {
      sprite.draw('idle', context, 0, 0);
    };

    return mario;
  });
}
