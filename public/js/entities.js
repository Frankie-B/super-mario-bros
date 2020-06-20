import { loadMario } from './entities/Mario.js';
import { loadGoomba } from './entities/Goomba.js';
import { loadKoopa } from './entities/Koopa.js';

export function loadEntities() {
  return Promise.all([loadMario(), loadGoomba(), loadKoopa()]);
}
