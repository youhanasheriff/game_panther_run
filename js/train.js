class Train {
  constructor(h, img) {
    this.w = 75;
    this.h = h;
    this.x = width;
    this.y = height - this.h;
    this.poly = [];
    this.img = img;
  }

  move() {
    this.x -= 12;
    this.poly = new Array(
      createVector(this.x, this.y),
      createVector(this.x, this.y + this.h),
      createVector(this.x + this.w, this.y + this.h),
      createVector(this.x + this.w, this.y),
    );

    // if (this.poly[0] != undefined) {
    //   beginShape();
    //   for (const p of this.poly) {
    //     vertex(p.x, p.y);
    //   }
    //   endShape(CLOSE);
    // }
  }

  show() {
    image(this.img, this.x, this.y, this.w, this.h);
    // fill(255, 50);
    // rect(this.x, this.y, this.w, this.h);
  }
}
