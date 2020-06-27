import Entity, { Sides, Trait } from '../Entity.js';
import Killable from '../traits/Killable.js';
import { loadSpriteSheet } from '../loaders.js';

export function loadBullet() {
  return loadSpriteSheet('bullet').then(createBulletFactory);
}

class Behavior extends Trait {
  constructor() {
    super('behavior');
  }

  collides(us, them) {
    if (us.killable.dead) {
      return;
    }

    if (them.stomper) {
      if (them.vel.y > us.vel.y) {
        us.killable.kill();
      } else {
        them.killable.kill();
      }
    }
  }
}

function createBulletFactory(sprite) {
  function drawBullet(context) {
    sprite.draw('bullet', context, 0, 0);
  }

  return function createGoomba() {
    const bullet = new Entity();
    bullet.size.set(16, 14);

    bullet.addTrait(new Behavior());
    bullet.addTrait(new Killable());

    bullet.draw = drawBullet;

    return bullet;
  };
}
