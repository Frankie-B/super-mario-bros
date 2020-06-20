import Camera from './Camera.js';
import Timer from './Timer.js';
import { loadLevel } from './loaders/level.js';
import { loadMario } from './entities/Mario.js';
import { loadGoomba } from './entities/Goomba.js';
import { loadKoopa } from './entities/Koopa.js';

import { setupKeyboard } from './input.js';

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

Promise.all([loadMario(), loadGoomba(), loadKoopa(), loadLevel('1-1')]).then(
  ([createMario, createGoomba, createKoopa, level]) => {
    const camera = new Camera();

    const mario = createMario();
    mario.pos.set(64, 64);

    const goomba = createGoomba();
    goomba.pos.x = 220;

    level.entities.add(goomba);

    const koopa = createKoopa();
    koopa.pos.x = 260;

    level.entities.add(koopa);

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
  }
);
