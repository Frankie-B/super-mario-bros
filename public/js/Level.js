import Compositor from './Compositor.js';
import { Matrix } from './math.js';

export default class Level {
  constructor() {
    this.comp = new Compositor();
    this.entities = new Set();
    this.tiles = new Matrix();
  }

  update(deltaTine) {
    this.entities.forEach((entity) => {
      entity.update(deltaTine);
    });
  }
}
