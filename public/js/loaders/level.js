import Level from '../Level.js';
import { createBackgroundLayer, createSpriteLayer } from '../layers.js';
import { loadJSON, loadSpriteSheet } from '../loaders.js';

export function loadLevel(name) {
  return loadJSON(`/levels/${name}.json`)
    .then((levelSpec) =>
      Promise.all([levelSpec, loadSpriteSheet(levelSpec.spriteSheet)])
    )
    .then(([levelSpec, backgroundSprites]) => {
      const level = new Level();

      createTiles(level, levelSpec.backgrounds, levelSpec.patterns);

      const backgroundLayer = createBackgroundLayer(level, backgroundSprites);
      level.comp.layers.push(backgroundLayer);

      const spriteLayer = createSpriteLayer(level.entities);
      level.comp.layers.push(spriteLayer);

      return level;
    });
}

function createTiles(level, tiles, patterns, offsetX = 0, offsetY = 0) {
  function applyRange(tile, xStart, xLen, yStart, yLen) {
    const xEnd = xStart + xLen;
    const yEnd = yStart + yLen;
    for (let x = xStart; x < xEnd; ++x) {
      for (let y = yStart; y < yEnd; ++y) {
        const derivedX = offsetX;
        const derivedY = offsetY;
        if (tile.pattern) {
          console.log('Pattern detected', patterns[tile.pattern]);

          const tiles = patterns[tile.pattern].tiles;

          createTiles(level, tiles, patterns, derivedY);
        } else {
          level.tiles.set(derivedX, derivedY, {
            name: tile.name,
            type: tile.type,
          });
        }
      }
    }
  }

  tiles.forEach((tile) => {
    tile.ranges.forEach((range) => {
      if (range.length === 4) {
        const [xStart, xLen, yStart, yLen] = range;
        applyRange(tile, xStart, xLen, yStart, yLen);
      } else if (range.length === 3) {
        const [xStart, xLen, yStart] = range;
        applyRange(tile, xStart, xLen, yStart, 1);
      } else if (range.length === 2) {
        const [xStart, yStart] = range;
        applyRange(tile, xStart, 1, yStart, 1);
      }
    });
  });
}
