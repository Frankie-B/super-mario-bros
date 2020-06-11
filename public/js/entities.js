import Entity from './Entity.js';
import { loadSpriteSheet } from './loaders.js';
import Jump from './traits/Jump.js';
import Go from './traits/Go.js';

function createAnim(frames, frameLen) {
  return function resolveFrame(distance) {
    const frameIndex = Math.floor(distance / frameLen) % frames.length;
    const frameName = (frameIndex, frames[frameIndex]);
    return frameName;
  };
}

export function createMario() {
  return loadSpriteSheet('mario').then((sprite) => {
    const mario = new Entity();

    mario.size.set(14, 16);

    mario.addTrait(new Go());

    mario.addTrait(new Jump());

    const runAnim = createAnim(['run-1', 'run-2', 'run-3'], 10);

    // mario frame router
    function routeFrame(mario) {
      if (mario.go.dir !== 0) {
        return runAnim(mario.go.distance);
      }
      return 'idle';
    }

    mario.draw = function drawMario(context) {
      sprite.draw(routeFrame(this), context, 0, 0);
    };

    return mario;
  });
}
