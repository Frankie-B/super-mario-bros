import Camera from './Camera.js';
import Timer from './Timer.js';
import { loadLevel } from './loaders.js';
import { createMario } from './entities.js';
import { createCollisionLayer } from './layers.js';
import { setupKeyboard } from './input.js';

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

Promise.all([createMario(), loadLevel('1-1')]).then(([mario, level]) => {
  const camera = new Camera();
  mario.pos.set(64, 64);

  level.entities.add(mario);

  level.comp.layers.push(createCollisionLayer(level));

  const input = setupKeyboard(mario);

  input.listenTo(window);

  // Debug utility
  ['mousedown', 'mousemove'].forEach((eventName) => {
    canvas.addEventListener(eventName, (event) => {
      if (event.buttons === 1) {
        mario.vel.set(0, 0);
        mario.pos.set(
          event.offsetX - camera.pos.x,
          event.offsetY - camera.pos.y
        );
      }
    });
  });

  const timer = new Timer(1 / 60);

  timer.update = function updatePos(deltaTime) {
    level.update(deltaTime);

    level.comp.draw(context, camera);
  };

  timer.start();
});
