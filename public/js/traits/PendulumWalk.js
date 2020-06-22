import { Sides, Trait } from '../Entity.js';

export default class PendulumWalk extends Trait {
  constructor() {
    super('pendulumWalk');
    this.enabled = true;
    this.speed = -30;
  }

  obstruct(entity, side) {
    if (side === Sides.LEFT || side === Sides.RIGHT) {
      this.speed = -this.speed;
    }
  }

  update(entity, deltaTime) {
    if (this.enabled) {
      entity.vel.x = this.speed;
    }
  }
}
