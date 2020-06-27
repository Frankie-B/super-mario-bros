import { loadMario } from './entities/Mario.js';
import { loadGoomba } from './entities/Goomba.js';
import { loadKoopa } from './entities/Koopa.js';
import { loadBullet } from './entities/Bullet.js';

export function loadEntities(audioContext) {
  const entityfactories = {};

  function addAs(name) {
    return (factory) => (entityfactories[name] = factory);
  }

  return Promise.all([
    loadMario(audioContext).then(addAs('mario')),
    loadGoomba(audioContext).then(addAs('goomba')),
    loadKoopa(audioContext).then(addAs('koopa')),
    loadBullet(audioContext).then(addAs('bullet')),
  ]).then(() => entityfactories);
}
