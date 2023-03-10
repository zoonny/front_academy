const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");
const dpr = window.devicePixelRatio;
console.log(ctx);
console.log(dpr);

const canvasWidth = 300;
const canvasHeight = 300;

// css style에 맞춰서 늘어남
canvas.style.width = canvasWidth + "px";
canvas.style.height = canvasHeight + "px";

canvas.width = canvasWidth * dpr;
canvas.height = canvasHeight * dpr;
ctx.scale(dpr, dpr);

class Particle {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw() {
    ctx.beginPath();
    // radian = pi / 180 * 360도
    // x, y, 반지름, 0 ~ 360도, 방향
    ctx.arc(this.x, this.y, this.radius, 0, (Math.PI / 180) * 360);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
  }
}

const x = 100;
const y = 100;
const radius = 50;
const particle = new Particle(x, y, radius);
// particle.draw();

// 매 프레임마다 animate 로직이 무한으로 수행
function animate() {
  window.requestAnimationFrame(animate);
  // console.log(1);

  // 전체 canvas 지우고 새로 draw
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  particle.draw();
}

animate();
