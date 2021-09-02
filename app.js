const canvas = document.createElement("canvas");
canvas.width = 400;
canvas.height = 400;
canvas.style.backgroundColor = "#ff0000";
const context = canvas.getContext("2d");
document.body.appendChild(canvas);

var x = 200;
var y = 200;
var angle = 180;
var lineSize = 150;
var lineX = 200;
var lineY = 200;
var angleVel = 0;
var angleVelAcc;
 
setInterval(() => {
    context.clearRect(0, 0, 400, 400);
    context.stroke();

    context.beginPath();
    context.arc(x, y, 10, 0, 2 * Math.PI, true);
    context.fill();
    context.closePath();

    context.beginPath();
    context.moveTo(lineX, lineY);
    context.lineTo(x, y);
    context.closePath();
    
    x = lineX + Math.sin(angle) * lineSize;
    y = lineY + Math.cos(angle) * lineSize;

    angleVelAcc = -0.01 * Math.sin(angle);
    angleVel += angleVelAcc;
    angleVel *= 0.99;
    angle += angleVel;

}, 10);

document.addEventListener("keypress", (e) => {
    angleVel = 0;
    angle += 0.1;
})