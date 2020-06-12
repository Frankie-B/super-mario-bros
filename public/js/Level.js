import Compositor from './Compositor.js';
import TileCollider from './TileCollider.js';
import { Matrix } from './math.js';

export default class Level {
  constructor() {
    this.gravity = 1500;
    this.totalTime = 0;
    this.comp = new Compositor();
    this.entities = new Set();
    this.tiles = new Matrix();

    this.tileCollider = new TileCollider(this.tiles);
  }

  update(deltaTine) {
    this.entities.forEach((entity) => {
      entity.update(deltaTine);

      entity.pos.x += entity.vel.x * deltaTine;
      this.tileCollider.checkX(entity);

      entity.pos.y += entity.vel.y * deltaTine;
      this.tileCollider.checkY(entity);

      entity.vel.y += this.gravity * deltaTine;
    });
    this.totalTime += deltaTine;
  }
}
