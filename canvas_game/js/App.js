import Background from "./Background.js";

export default class App {
  static canvas = document.querySelector("canvas");
  static ctx = App.canvas.getContext("2d");
  static dpr = devicePixelRatio > 1 ? 2 : 1;
  static interval = 1000 / 60;
  static width = 1024;
  static height = 768;
  constructor() {
    this.background = new Background();

    // bind(this) : resize시 this가 window를 가리키게 됨
    // this.resize.bind(this)를 해주면 this가 App 클래스로 인식되며
    // resize 함수에서는 this가 App으로 인식될 수 있도록 함
    window.addEventListener("resize", this.resize.bind(this));
  }
  resize() {
    App.canvas.width = App.width * App.dpr;
    App.canvas.height = App.height * App.dpr;
    App.ctx.scale(App.dpr, App.dpr);

    const width =
      innerWidth > innerHeight ? innerHeight * 0.9 : innerWidth * 0.9;
    App.canvas.style.width = width + "px";
    App.canvas.style.height = width * (3 / 4) + "px";
  }
  render() {
    // 주사율마다 처리속도를 같게 처리
    let now, delta;
    let then = Date.now();
    const frame = () => {
      requestAnimationFrame(frame);
      now = Date.now();
      delta = now - then;
      if (delta < App.interval) return;

      App.ctx.clearRect(0, 0, App.width, App.height);
      App.ctx.fillRect(50, 50, 100, 100);

      this.background.update();
      this.background.draw();

      then = now - (delta % App.interval);
    };
    requestAnimationFrame(frame);
  }
}
