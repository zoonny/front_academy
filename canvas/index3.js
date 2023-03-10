const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");
const dpr = window.devicePixelRatio;
console.log(ctx);
console.log(dpr);

// const canvasWidth = 300;
// const canvasHeight = 300;
const canvasWidth = innerWidth;
const canvasHeight = innerHeight;

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

// 모니터 주사율 별로 동일 애니메이션 처리 로직
// 모니터 주사율 60hz = 1초 60번 실행 = 1000/60인 16ms마다 requestAnimationFrame 실행
// 애니메이셔 목표 fps: 10 = 1초에 10번 프레임을 찍어라
// now, then, delta 로 해결
let interval = 1000 / 60;
let now, delta;
let then = Date.now();

function animate() {
  window.requestAnimationFrame(animate);
  now = Date.now();
  delta = now - then;

  if (delta < interval) return;

  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  // y를 1px 이동
  particle.y += 1;
  particle.draw();

  then = now - (delta % interval);
}

animate();
