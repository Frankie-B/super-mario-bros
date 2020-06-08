import Compositor from './Compositor.js';

export default class Level {
  constructor() {
    this.comp = new Compositor();
    this.entities = new Set();
  }

  update(deltaTine) {
    this.entities.forEach((entity) => {
      entity.update(deltaTine);
    });
  }
}
