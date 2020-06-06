import Compositor from './Compositor.js';
import Entity from './Entity.js';
import { loadLevel } from './loaders.js';
import { createMario } from './entities.js';
import { loadBackgroundSprites } from './sprites.js';
import { createBackgroundLayer } from './layers.js';

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

function createSpriteLayer(entity) {
  return function drawSpriteLayer(context) {
    for (let i = 0; i < 20; i++) {
      // sprite.draw('idle', context, pos.x + i * 16, pos.y);
      entity.draw(context);
    }
  };
}

Promise.all([createMario(), loadBackgroundSprites(), loadLevel('1-1')]).then(
  ([mario, backgroundSprites, level]) => {
    const comp = new Compositor();
    const backgroundLayer = createBackgroundLayer(
      level.backgrounds,
      backgroundSprites
    );

    comp.layers.push(backgroundLayer);

    const gravity = 0.5;

    const spriteLayer = createSpriteLayer(mario);
    comp.layers.push(spriteLayer);

    function updatePos() {
      comp.draw(context);
      mario.update();
      mario.velocity.y += gravity;
      requestAnimationFrame(updatePos);
    }

    updatePos();
  }
);
