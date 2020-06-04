// sprite API
export default class SpriteSheet {
  constructor(image, height, width) {
    this.image = image;
    this.height = height;
    this.width = width;
    this.tiles = new Map();
  }

  define(name, x, y) {
    const buffer = document.createElement('canvas'); // buffer to store image from tile
    buffer.height = this.height;
    buffer.width = this.width;
    buffer
      .getContext('2d')
      .drawImage(
        this.image,
        x * this.width,
        y * this.height,
        this.width,
        this.height,
        0,
        0,
        this.width,
        this.height
      ); // draw subset of the image
    this.tiles.set(name, buffer);
  }

  draw(name, context, x, y) {
    const buffer = this.tiles.get(name);
    context.drawImage(buffer, x, y);
  }

  drawTile(name, context, x, y) {
    this.draw(name, context, x * this.width, y * this.height);
  }
}
