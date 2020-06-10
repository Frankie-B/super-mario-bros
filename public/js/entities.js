import Entity from './Entity.js';
import { loadMarioSprite } from './sprites.js';
import Velocity from './traits/Velocity.js';
import Jump from './traits/Jump.js';
import Go from './traits/Go.js';

export function createMario() {
  return loadMarioSprite().then((sprite) => {
    const mario = new Entity();

    mario.size.set(14, 16);

    mario.addTrait(new Go());

    mario.addTrait(new Jump());

    // mario.addTrait(new Velocity());

    mario.draw = function drawMario(context) {
      sprite.draw('idle', context, 0, 0);
    };

    return mario;
  });
}
