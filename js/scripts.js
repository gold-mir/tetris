function buildCanvas(ctx) {
  ctx.fillStyle = '#ccddff';
  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.moveTo(2,2);
  ctx.lineTo(506,2);
  ctx.lineTo(506,1006);
  ctx.lineTo(2,1006);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}
$(document).ready(function() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  buildCanvas(ctx);
  drawUI(ctx);
});

function buildCanvas(ctx) {
  ctx.fillStyle = '#ccddff';
  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.moveTo(2,2);
  ctx.lineTo(506,2);
  ctx.lineTo(506,1006);
  ctx.lineTo(2,1006);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

function drawTile(ctx, x, y) {
if ((x <= 9) && (y <= 19)) {
  var xPos = (50*x)+6;
  var yPos = (50*y)+6;
  ctx.beginPath();
  ctx.moveTo(xPos, yPos);
  ctx.lineTo(xPos + 46, yPos);
  ctx.lineTo(xPos + 46, yPos + 46);
  ctx.lineTo(xPos, yPos + 46);
  ctx.closePath();
  ctx.stroke();
}
  else {
    console.log("Call out of bounds to drawTile function");
  };
}

function drawUI(ctx) {
  ctx.beginPath();
  //ctx.lineWidth = 4;
  ctx.fillStyle = '#ccffdd';
  ctx.moveTo(556, 2);
  ctx.lineTo(860, 2);
  ctx.lineTo(860, 206);
  ctx.lineTo(556, 206);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

function drawNextTile(ctx, x, y) {

  if ((x <= 5) && (y <= 3)) {
    var xPos = (50*x)+560;
    var yPos = (50*y)+6;
    ctx.beginPath();
    ctx.moveTo(xPos, yPos);
    ctx.lineTo(xPos + 46, yPos);
    ctx.lineTo(xPos + 46, yPos + 46);
    ctx.lineTo(xPos, yPos + 46);
    ctx.closePath();
    ctx.stroke();
  }
  else {
    console.log("Call out of bounds to drawNextTile function");
  };
}
