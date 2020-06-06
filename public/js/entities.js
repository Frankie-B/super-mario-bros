import Entity from './Entity.js';
import { loadMarioSprite } from './sprites.js';

export function createMario() {
  return loadMarioSprite().then((sprite) => {
    const mario = new Entity();
    mario.pos.set(64, 180);
    mario.velocity.set(2, -10);

    mario.draw = function drawMario(context) {
      sprite.draw('idle', context, this.pos.x, this.pos.y);
    };

    mario.update = function updateMario() {
      this.pos.x += this.velocity.x;
      this.pos.y += this.velocity.y;
    };

    return mario;
  });
}
