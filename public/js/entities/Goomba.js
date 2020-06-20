import Entity, { Sides } from '../Entity.js';
import { loadSpriteSheet } from '../loaders.js';

export function loadGoomba() {
  return loadSpriteSheet('goomba').then(createGoombaFactory);
}

function createGoombaFactory(sprite) {
  console.log(sprite);

  const walkAnim = sprite.animations.get('walk');

  function drawGoomba(context) {
    sprite.draw(walkAnim(this.lifetime), context, 0, 0);
  }

  return function createGoomba() {
    const goomba = new Entity();
    goomba.size.set(16, 16);
    goomba.lifetime = 0;

    goomba.addTrait({
      NAME: 'walk',
      speed: -30,
      obstruct(goomba, side) {
        if (side === Sides.LEFT || side === Sides.RIGHT) {
          this.speed = -this.speed;
        }
      },
      update(goomba, deltaTime) {
        goomba.lifetime += deltaTime;
        goomba.vel.x = this.speed;
      },
    });

    goomba.draw = drawGoomba;

    return goomba;
  };
}
