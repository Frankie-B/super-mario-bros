import Camera from './Camera.js';
import Timer from './Timer.js';
import { loadLevel } from './loaders/level.js';
import { loadMario } from './entities/Mario.js';
import { setupKeyboard } from './input.js';

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

Promise.all([loadMario(), loadLevel('1-1')]).then(([createMario, level]) => {
  const camera = new Camera();

  const mario = createMario();
  mario.pos.set(64, 64);

  level.entities.add(mario);

  const input = setupKeyboard(mario);

  input.listenTo(window);

  const timer = new Timer(1 / 60);

  timer.update = function updatePos(deltaTime) {
    level.update(deltaTime);

    if (mario.pos.x > 100) {
      camera.pos.x = mario.pos.x - 100;
    }

    level.comp.draw(context, camera);
  };

  timer.start();
});
