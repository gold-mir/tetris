$(document).ready(function() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  // var flashy = true;
  // debugger;
  // while (flashy === true) {
  //   flashy = flashyText(ctx, flashy);
  // }
  //window.clearInterval(timer);
  // console.log("Right after flashy text runs");
  buildCanvas(ctx);
  drawUI(ctx);
  drawScreen(ctx, canvas);
});

function buildCanvas(ctx) {
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

function colorPick(color) {
  var colors = [];
  switch(color) {
    case 1:
    colors = ["#00ffff","#33ffff","#00dddd"];
    break;
    case 2:
    colors = ["#0000ff","#3333ff","#0000dd"];
    break;
    case 3:
    colors = ["#ff7700","#ff9933","#dd6600"];
    break;
    case 4:
    colors = ["#ffff00","#ffff33","#dddd00"];
    break;
    case 5:
    colors = ["#00ff00","#33ff33","#00dd00"];
    break;
    case 6:
    colors = ["#ff0000","#ff3333","#dd0000"];
    break;
    case 7:
    colors = ["#770077","#993399","#660066"];
    break;
    default:
    console.log ("color out of bounds in colorpick");
  }
  return colors;
}

function flashyText(ctx, flashy) {
  var count = 0;
  timer = setInterval(function() {
    if (count == 0) {
      console.log("Loop1")
      ctx.fillStyle='#555555';
      ctx.font = '48px serif';
      ctx.fillText('Press Space to begin.', 350, 600);
      count++;
      document.body.onkeyup = function(e){
        if(e.keyCode == 32){
          console.log("In loop1");
          flashy = false;
        }
      }
    } else if (count == 1) {
      console.log("Loop2")
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      var image = document.getElementById('source');
      ctx.drawImage(image, 0,0);
      count = 0;
      document.body.onkeyup = function(e){
        if(e.keyCode == 32){
          console.log("In loop2");
          flashy = false;
        }
      }
    }
  },500);
  return flashy;
}

function drawScreen(c, canvas){
  c.clearRect(0, 0, canvas.width, canvas.height);
  buildCanvas(c);
  drawUI(c);
  inputArr = [
    {x:1,y:1,color:1},{x:1,y:2,color:1},{x:2,y:1,color:1},{x:2,y:2,color:1},
  ]
  for(var i = 0; i < inputArr.length;i++) {
    drawTile(c, inputArr[i].x, inputArr[i].y, inputArr[i].color);
  }
}
function drawTile(c, x, y, color) {
  if ((x <= 9) && (y <= 19)) {
    var xPos = (50*x)+5;
    var yPos = (50*y)+5;
    var colors = colorPick(color);

    c.lineWidth = 2;
    c.beginPath();
    c.moveTo(xPos, yPos);
    c.lineTo(xPos + 48, yPos);
    c.lineTo(xPos + 48, yPos + 48);
    c.lineTo(xPos, yPos + 48);
    c.closePath();
    c.stroke();

    c.fillStyle = colors[0];
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

    c.fillStyle = colors[1];
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

    c.fillStyle = colors[2];
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
