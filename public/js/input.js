import Keyboard from './KeyboardState.js';

export function setupKeyboard(entity) {
  const input = new Keyboard();

  input.addMapping('Space', (keyState) => {
    // alternative jump key - keyP
    if (keyState) {
      entity.jump.start();
    } else {
      entity.jump.cancel();
    }
  });

  input.addMapping('ArrowRight', (keyState) => {
    // alternative - keyD
    entity.go.dir += keyState ? 1 : -1;
  });

  input.addMapping('ArrowLeft', (keyState) => {
    // alternative - keyA
    entity.go.dir += keyState ? -1 : 1;
  });

  return input;
}
