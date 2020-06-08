import Compositor from './Compositor.js';
import TileCollider from './TileCollider.js';
import { Matrix } from './math.js';

export default class Level {
  constructor() {
    this.comp = new Compositor();
    this.entities = new Set();
    this.tiles = new Matrix();

    this.tileCollider = new TileCollider(this.tiles);
  }

  update(deltaTine) {
    this.entities.forEach((entity) => {
      entity.update(deltaTine);

      this.tileCollider.test(entity);
    });
  }
}
