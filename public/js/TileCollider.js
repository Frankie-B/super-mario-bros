import TileResolver from './TileResolver.js';

export default class TileCollider {
  constructor(tileMatrix) {
    this.tiles = new TileResolver(tileMatrix);
  }

  test(entity) {
    const match = this.tiles.matchByPosition(entity.pos.x, entity.pos.y);
    if (match) {
      console.log('We found a match', match, match.tile);
    }
    // console.log('testing', entity);
  }
}
