import Keyboard from './KeyboardState.js';

export function setupKeyboard(mario) {
  const input = new Keyboard();

  input.addMapping('Space', (keyState) => {
    // (represents the A button) alternative jump key - KeyP
    if (keyState) {
      mario.jump.start();
    } else {
      mario.jump.cancel();
    }
  });

  input.addMapping('KeyF', (keyState) => {
    // (represents the B button)alternative - KeyO
    mario.turbo(keyState);
  });

  input.addMapping('ArrowRight', (keyState) => {
    // alternative - KeyD
    mario.go.dir += keyState ? 1 : -1;
  });

  input.addMapping('ArrowLeft', (keyState) => {
    // alternative - KeyA
    mario.go.dir += keyState ? -1 : 1;
  });

  return input;
}
