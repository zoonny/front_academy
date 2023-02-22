const canvas = document.getElementById("canvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

const ctx = canvas.getContext("2d");

ctx.fillStyle = "RGB(0,0,0)";
ctx.fillRect(0, 0, width, height);

ctx.fillStyle = "rgb(255, 0, 0)";
ctx.fillRect(50, 50, 100, 150);

ctx.fillStyle = "rgb(0, 255, 0)";
ctx.fillRect(75, 75, 100, 100);

ctx.fillStyle = "rgba(255, 0, 255, 0.75)";
ctx.fillRect(25, 100, 175, 50);

ctx.strokeStyle = "RGB(255,255,255)";
ctx.lineWidth = 5;
ctx.strokeRect(25, 25, 175, 200);

ctx.fillStyle = "rgb(255, 255, 0)";
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
const triHeight = 50 * Math.tan(degToRad(60));
ctx.lineTo(100, 50 + triHeight);
ctx.lineTo(50, 50);
ctx.fill();

function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}
