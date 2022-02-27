class Cat {
  constructor() {
    this.height = 90;
    this.length = 150;
    this.x = 50;
    this.y = height - this.height;
    this.vy = 0;
    this.gravity = 0.3;
    this.poly = [];
  }

  jump() {
    if (this.y == height - this.height) {
      this.vy = -10;
      this.height = 110;
      this.length = 160;
      catImg = loadImage('../images/cat-jump-up.png');
      setTimeout(() => {
        catImg = loadImage('../images/cat-jump-down.png');
        setTimeout(() => {
          catImg = loadImage('../images/cat.gif');
          this.height = 90;
          this.lenth = 150;
        }, 600);
      }, 500);
      jumpSound.play();
    }
  }

  hits(train) {
    return collidePolyPoly(train.poly, this.poly);
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.height);

    if (this.y == height - this.height) {
      this.poly = new Array(
        createVector(this.x, this.y),
        createVector(this.x, this.y + this.height),
        createVector(this.x + this.length, this.y + this.height),
        createVector(this.x + this.length, this.y),
      );
    } else if (this.vy > 0) {
      this.poly[0] = createVector(this.x, this.y);
      this.poly[1] = createVector(this.x, this.y + this.height / 2);
      this.poly[2] = createVector(
        this.x + this.length * 0.7,
        this.y + this.height,
      );
      this.poly[3] = createVector(this.x + this.length, this.y + this.height);
      this.poly[4] = createVector(
        this.x + this.length,
        this.y + this.height / 2,
      );
      this.poly[5] = createVector(this.x + this.length * 0.3, this.y);
    } else if (this.vy < 0) {
      this.poly[0] = createVector(this.x, this.y + this.height / 2);
      this.poly[1] = createVector(this.x, this.y + this.height);
      this.poly[2] = createVector(
        this.x + this.length * 0.3,
        this.y + this.height,
      );
      this.poly[3] = createVector(
        this.x + this.length,
        this.y + this.height / 2,
      );
      this.poly[4] = createVector(this.x + this.length, this.y);
      this.poly[5] = createVector(this.x + this.length * 0.7, this.y);
    }

    // if (this.poly[0] != undefined) {
    //   beginShape();
    //   for (const p of this.poly) {
    //     vertex(p.x, p.y);
    //   }
    //   endShape(CLOSE);
    // }
  }

  show() {
    image(catImg, this.x, this.y, this.length, this.height);
    // fill('rgba(100,150,0,0.35)');
    // rect(this.x, this.y, this.length, this.height);
  }
}
