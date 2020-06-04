function loadImage(url) {
  return new Promise((resolve) => {
    //
    const image = new Image();
    image.addEventListener('load', () => {
      resolve(image);
    });
    image.src = url;
  });
}

// sprite API
class spriteSheet {
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

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

context.fillRect(0, 0, 50, 50);

loadImage('/img/tiles.png').then((image) => {
  // Create a sprite API to hand loading of tiles
  const sprites = new spriteSheet(image, 16, 16);
  sprites.define('ground', 0, 0);
  sprites.draw('ground', context, 45, 62);
});
