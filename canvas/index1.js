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

// ctx.fillRect(10, 10, 50, 50);

ctx.beginPath();
// radian = pi / 180 * 360도
// x, y, 반지름, 0 ~ 360도, 방향
ctx.arc(100, 100, 50, 0, (Math.PI / 180) * 360);
// ctx.arc(100, 100, 50, 0, (Math.PI / 180) * 180);
ctx.fillStyle = "red";
ctx.fill();
// ctx.stroke();
ctx.closePath();
