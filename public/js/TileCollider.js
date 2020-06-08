class TileResolver {
  constructor(matrix, tileSize = 16) {
    this.matrix = matrix;
    this.tileSize = tileSize;
  }

  toIndex(pos) {
    return Math.floor(pos / this.tileSize);
  }

  getByIndex(indexX, indexY) {
    const tile = this.matrix.get(indexX, indexY);
    if (tile) {
      return {
        tile,
      };
    }
  }

  matchByPosition(posX, posY) {
    return this.getByIndex(this.toIndex(posX), this.toIndex(posY));
  }
}

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
