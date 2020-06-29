import Keyboard from './KeyboardState.js';

export function setupKeyboard(mario) {
  const input = new Keyboard();

  input.addMapping('Space', (keyState) => {
    // alternative key binding (A button) = 'KeyP'
    if (keyState) {
      mario.jump.start();
    } else {
      mario.jump.cancel();
    }
  });

  input.addMapping('KeyF', (keyState) => {
    // alternative key binding (B button) = KeyO
    mario.turbo(keyState);
  });

  input.addMapping('ArrowRight', (keyState) => {
    // alternative key binding = KeyD
    mario.go.dir += keyState ? 1 : -1;
  });

  input.addMapping('ArrowLeft', (keyState) => {
    // alternative key binding = KeyA
    mario.go.dir += keyState ? -1 : 1;
  });

  return input;
}
