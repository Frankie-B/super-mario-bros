import Keyboard from './KeyboardState.js';
import InputRouter from './InputRouter.js';

export function setupKeyboard(window) {
  const input = new Keyboard();
  const router = new InputRouter();

  input.listenTo(window);

  input.addMapping('Space', (keyState) => {
    // alternative key binding (A button) = 'KeyP'
    if (keyState) {
      router.route((entity) => entity.jump.start());
    } else {
      mario.router.route((entity) => entity.jump.start());
    }
  });

  input.addMapping('KeyF', (keyState) => {
    // alternative key binding (B button) = KeyO
    router.route((entity) => entity.turbo(keyState));
  });

  input.addMapping('ArrowRight', (keyState) => {
    // alternative key binding = KeyD
    router.route((entity) => (entity.go.dir += keyState ? 1 : -1));
  });

  input.addMapping('ArrowLeft', (keyState) => {
    // alternative key binding = KeyA
    router.route((entity) => (entity.go.dir += keyState ? -1 : 1));
  });

  return router;
}
