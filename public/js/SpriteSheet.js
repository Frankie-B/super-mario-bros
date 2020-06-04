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
        y * this.height,
        x * this.width,
        this.height,
        this.width,
        0,
        0,
        this.height,
        this.width
      ); // draw subset of the image
    this.tiles.set(name, buffer);
  }

  draw(name, context, x, y) {
    const buffer = this.tiles.get(name);
    context.drawImage(buffer, x, y);
  }
}
