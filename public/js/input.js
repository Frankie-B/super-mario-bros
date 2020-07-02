import Keyboard from './KeyboardState.js';
import InputRouter from './InputRouter.js';

export function setupKeyboard(window) {
  const input = new Keyboard();
  const router = new InputRouter();

  input.listenTo(window);

  input.addMapping('Space', (keyState) => {
    if (keyState) {
      router.route((entity) => entity.jump.start());
    } else {
      router.route((entity) => entity.jump.cancel());
    }
  });

  input.addMapping('KeyF', (keyState) => {
    router.route((entity) => entity.turbo(keyState));
  });

  input.addMapping('ArrowRight', (keyState) => {
    router.route((entity) => (entity.go.dir += keyState ? 1 : -1));
  });

  input.addMapping('ArrowLeft', (keyState) => {
    router.route((entity) => (entity.go.dir += keyState ? -1 : 1));
  });

  return router;
}
