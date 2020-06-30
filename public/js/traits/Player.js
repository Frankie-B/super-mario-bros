import { Trait } from '../Entity.js';

export default class Player extends Trait {
  constructor() {
    super('player');
    this.coins = 0;
    this.lives = 3;
    this.score = 0;

    this.listen('stomp', () => {
      this.score += 100;
      console.log('Score', this.score);
    });
  }
}
