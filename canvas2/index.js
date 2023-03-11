import CanvasOption from "./js/CanvasOption.js";
import Particle from "./js/Particle.js";
import Tail from "./js/Tail.js";
import Spark from "./js/Spark.js";
import { hypotenuse, randomNumBetween } from "./js/Utils.js";

class Canvas extends CanvasOption {
  constructor() {
    super();
    this.particles = [];
    this.tails = [];
    this.sparks = [];
  }

  init() {
    this.canvasWidth = innerWidth;
    this.canvasHeight = innerHeight;
    this.canvas.width = this.canvasWidth * this.dpr;
    this.canvas.height = this.canvasHeight * this.dpr;
    this.ctx.scale(this.dpr, this.dpr);

    this.canvas.style.width = this.canvasWidth + "px";
    this.canvas.style.height = this.canvasHeight + "px";

    // this.createParticles();
  }

  createTail() {
    const x = randomNumBetween(this.canvasWidth * 0.2, this.canvasWidth * 0.8);
    const vy = this.canvasHeight * randomNumBetween(0.01, 0.015) * -1;
    // const color = "red";
    const color = "255, 255, 255";
    this.tails.push(new Tail(x, vy, color));
  }

  createParticles(x, y, color) {
    const PARTICLE_NUM = 400;
    // const x = randomNumBetween(0, this.canvasWidth);
    // const y = randomNumBetween(0, this.canvasHeight);
    for (let i = 0; i < PARTICLE_NUM; i++) {
      // 삼각함수
      // sin, cos, tan
      // 각도: a, 반지름: r
      // cos(a) = x / r -> x = r * cos(a)
      // sin(a) = y / r -> y = r * sin(a)
      // tan(a) = y / x -> y = x * tan(a)
      const r =
        randomNumBetween(2, 100) * hypotenuse(innerWidth, innerHeight) * 0.0001;
      const angle = (Math.PI / 180) * randomNumBetween(0, 360); // radian

      const vx = r * Math.cos(angle);
      const vy = r * Math.sin(angle);
      const opacity = randomNumBetween(0.6, 0.9);
      this.particles.push(new Particle(x, y, vx, vy, opacity, color));
    }
  }

  render() {
    let now, delta;
    let then = Date.now();

    const frame = () => {
      requestAnimationFrame(frame);
      now = Date.now();
      delta = now - then;
      if (delta < this.interval) return;
      this.ctx.fillStyle = this.bgColor + "20"; // #00000010, 10: opacity
      this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

      if (Math.random() < 0.03) {
        this.createTail();
      }

      this.tails.forEach((tail, index) => {
        tail.update();
        tail.draw();

        if (tail.vy > -0.7) {
          this.tails.splice(index, 1);
          this.createParticles(tail.x, tail.y, tail.color);
        }
      });

      this.particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        if (Math.random() < 0.1) {
          this.sparks.push(new Spark(particle.x, particle.y, 0.3));
        }

        if (particle.opacity < 0) {
          this.particles.splice(index, 1);
        }
      });

      this.sparks.forEach((spark, index) => {
        spark.update();
        spark.draw();

        if (spark.opacity < 0) {
          this.sparks.splice(index, 1);
        }
      });

      then = now - (delta % this.interval);
    };
    requestAnimationFrame(frame);
  }
}

const canvas = new Canvas();

window.addEventListener("load", () => {
  canvas.init();
  canvas.render();
});

window.addEventListener("resize", () => {
  canvas.init();
});
