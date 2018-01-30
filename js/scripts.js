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
  //ctx.fill();
  ctx.stroke();
}

function buildCanvas(ctx) {
  ctx.fillStyle = '#ccddff';
  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.moveTo(2,2);
  ctx.lineTo(506,2);
  ctx.lineTo(506,1006);
  ctx.lineTo(2,1006);
  ctx.closePath();
  //ctx.fill();
  ctx.stroke();
}

function drawTile2(c, x, y) {
  if ((x <= 9) && (y <= 19)) {
    var xPos = (50*x)+6;
    var yPos = (50*y)+6;

    c.lineWidth = 1;
    c.beginPath();
    c.moveTo(xPos, yPos);
    c.lineTo(xPos + 46, yPos);
    c.lineTo(xPos + 46, yPos + 46);
    c.lineTo(xPos, yPos + 46);
    c.closePath();
    c.beginPath();
    c.moveTo(xPos+8, yPos+8);
    c.lineTo(xPos+38, yPos+8);
    c.lineTo(xPos+38, yPos+38);
    c.lineTo(xPos+8, yPos+38);
    c.closePath();
    c.stroke();
  }
}

function drawTile(c, x, y) {
  if ((x <= 9) && (y <= 19)) {
    var xPos = (50*x)+5;
    var yPos = (50*y)+5;
    c.lineWidth = 2;
    c.beginPath();
    c.moveTo(xPos, yPos);
    c.lineTo(xPos + 48, yPos);
    c.lineTo(xPos + 48, yPos + 48);
    c.lineTo(xPos, yPos + 48);
    c.closePath();
    c.stroke();
    c.fillStyle = '#cccccc';
    c.lineWidth = 1;
    c.beginPath();
    c.moveTo(xPos+2, yPos);
    c.lineTo(xPos + 48, yPos);
    c.lineTo(xPos + 48, yPos + 48);
    c.lineTo(xPos+2, yPos + 48);
    c.closePath();
    c.beginPath();
    c.moveTo(xPos+9, yPos+9);
    c.lineTo(xPos+39, yPos+9);
    c.lineTo(xPos+39, yPos+39);
    c.lineTo(xPos+9, yPos+39);
    c.closePath();
    c.fill();
    //c.stroke();

    c.fillStyle = '#dddddd';
    c.beginPath();
    c.moveTo(xPos+1, yPos+1);
    c.lineTo(xPos+9, yPos+9);
    c.lineTo(xPos+39, yPos+9);
    c.lineTo(xPos+47, yPos+1);
    c.closePath();
    c.fill();
    //c.fillStyle = '#aaaaaa';
    c.beginPath();
    c.moveTo(xPos+1, yPos+1);
    c.lineTo(xPos+9, yPos+9);
    c.lineTo(xPos+9, yPos+39);
    c.lineTo(xPos+1, yPos+47);
    c.closePath();
    c.fill();
    c.fillStyle = '#bbbbbb';
    c.beginPath();
    c.moveTo(xPos+1, yPos+47);
    c.lineTo(xPos+9, yPos+39);
    c.lineTo(xPos+39, yPos+39);
    c.lineTo(xPos+47, yPos+47);
    c.closePath();
    c.fill();
    c.beginPath();
    c.moveTo(xPos+47, yPos+47);
    c.lineTo(xPos+39, yPos+39);
    c.lineTo(xPos+39, yPos+9);
    c.lineTo(xPos+47, yPos+1);
    c.closePath();
    c.fill();
    //c.fill();

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
