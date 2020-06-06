// sprite API
export default class SpriteSheet {
  constructor(image, height, width) {
    this.image = image;
    this.height = height;
    this.width = width;
    this.tiles = new Map();
  }

  define(name, x, y, width, height) {
    const buffer = document.createElement('canvas'); // buffer to store image from tile
    buffer.width = width;
    buffer.height = height;
    buffer
      .getContext('2d')
      .drawImage(this.image, x, y, width, height, 0, 0, width, height); // draw subset of the image
    this.tiles.set(name, buffer);
  }

  defineTile(name, x, y) {
    this.define(name, x * this.width, y * this.height, this.width, this.height);
  }

  draw(name, context, x, y) {
    const buffer = this.tiles.get(name);
    context.drawImage(buffer, x, y);
  }

  drawTile(name, context, x, y) {
    this.draw(name, context, x * this.width, y * this.height);
  }
}
