import App from "./App.js";

export default class Background {
  constructor() {
    this.img = document.querySelector("#bg2-img");
    this.height = App.height;
    this.width = App.height * (this.img.width / this.img.height);
    this.leftPos = { x: 0, y: 0 };
    // bg2-img 사이즈가 맞지 않아 -4 적용
    this.rightPos = { x: this.width - 4, y: 0 };
    this.speed = -20;
  }

  update() {
    // this.pos.x -= 20;

    // 첫번째 이미지가 왼쪽 화면 밖으로 나갔으면
    if (this.leftPos.x + this.width < 0) {
      // 두번째 이미지의 끝으로 이동
      this.leftPos.x = this.rightPos.x + this.width - 4;
    }
    if (this.rightPos.x + this.width < 0) {
      this.rightPos.x = this.leftPos.x + this.width - 4;
    }
    this.leftPos.x += this.speed;
    this.rightPos.x += this.speed;
  }

  draw() {
    App.ctx.drawImage(
      this.img,
      this.leftPos.x,
      this.leftPos.y,
      this.width,
      this.height
    );
    App.ctx.drawImage(
      this.img,
      this.rightPos.x,
      this.rightPos.y,
      this.width,
      this.height
    );
  }
}
