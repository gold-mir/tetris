$(document).ready(function () {
  var canvas = document.getElementById('canvas');
  var c = canvas.getContext('2d');
  //startScreen(c, canvas);
  drawAll(c, canvas);
  document.onkeydown = function (e) {
    switch (e.keyCode) {
      case 37:
      moveLeft(c, canvas);
      break;
      case 38:
      rotatePiece(c, canvas);
      break;
      case 39:
      moveRight(c, canvas);
      break;
      case 40:
      moveDown(c, canvas);
      break;
      default:
      console.log("non arrow key");
    }
    drawAll(c, canvas);
    //e.preventDefault();
  }

});

function moveLeft(c, canvas) {
  var i = 0;
  inputPiece.points.forEach(function (input) {
    if (inputPiece.points[i].x <=0){
      console.log("left")
    } else {inputPiece.points[i].x -= 1;
      i++;
    }
  });
  drawScreen(c, canvas);
}

function moveRight(c, canvas) {
  var i = 0;
  inputPiece.points.forEach(function (input) {
    if (inputPiece.points[i].x >=9){
      console.log("Right")
    } else {inputPiece.points[i].x += 1;
      i++;
    }
  });
  drawScreen(c, canvas);
}

function moveDown(c, canvas) {
  var i = 0;
  inputPiece.points.forEach(function (input) {
    if (inputPiece.points[i].y >= 19){
      console.log("down")
    } else {inputPiece.points[i].y += 1;
      i++;
    }
  });
  drawScreen(c, canvas);
}

function rotatePiece(c, canvas) {
  inputPiece = inputPiece.rotate();
  drawAll(c, canvas);
  return inputPiece;
}

function startScreen(c, canvas) {
  var blinkOn = true;
  var textInteveral = window.setInterval(function () {
    var image = document.getElementById('source');
    if (blinkOn) {
      blinkOn = false;
      //console.log("Blink On");
      c.fillStyle = '#555555';
      c.font = '48px serif';
      c.fillText('Press Space to begin.', 350, 600);
      c.drawImage(image, 0, 0);
    } else {
      //console.log("Blink Off");
      blinkOn = true;
      c.clearRect(0, 0, canvas.width, canvas.height);
      c.drawImage(image, 0, 0);
    }
    document.body.onkeydown = function (e) {
      if (e.keyCode == 32) {
        clearInterval(textInteveral);
        logoFadeInterval = window.setInterval(function () {
          c.globalAlpha -= 0.01
          c.clearRect(0, 0, canvas.width, canvas.height);
          c.drawImage(image, 0, 0);
          if (c.globalAlpha <= .01) {
            start = true;
            clearInterval(logoFadeInterval);
            c.clearRect(0, 0, canvas.width, canvas.height);
            c.globalAlpha = 1;
            //document.body.onkeydown = null;
            setTimeout(function () {
              drawAll(c, canvas);
            }, 1000)
            //return;
          }
        }, 10);
      }
    }
  }, 500);
}

function drawAll(c, canvas) {

  buildCanvas(c, canvas);
  drawUI(c, canvas);
  drawScreen(c, canvas);
}

function buildCanvas(c, canvas) {
  c.lineWidth = 4;
  c.beginPath();
  c.moveTo(2, 2);
  c.lineTo(506, 2);
  c.lineTo(506, 1006);
  c.lineTo(2, 1006);
  c.closePath();
  //c.fill();
  c.stroke();
}

function colorPick(color) {
  var colors = [];
  switch (color) {
    case 1:
    colors = ["#00ffff", "#33ffff", "#00dddd"];
    break;
    case 2:
    colors = ["#0000ff", "#3333ff", "#0000dd"];
    break;
    case 3:
    colors = ["#ff7700", "#ff9933", "#dd6600"];
    break;
    case 4:
    colors = ["#ffff00", "#ffff33", "#dddd00"];
    break;
    case 5:
    colors = ["#00ff00", "#33ff33", "#00dd00"];
    break;
    case 6:
    colors = ["#ff0000", "#ff3333", "#dd0000"];
    break;
    case 7:
    colors = ["#770077", "#993399", "#660066"];
    break;
    default:
    console.log("color out of bounds in colorpick " + color);
  }
  return colors;
}
var inputPiece = pieces.piece3;

function drawScreen(c, canvas) {
  c.clearRect(0, 0, canvas.width, canvas.height);
  buildCanvas(c);
  drawUI(c);
  console.log(inputPiece);

  for (var i = 0; i < inputPiece.points.length; i++) {
    drawTile(c, inputPiece.points[i].x, inputPiece.points[i].y, inputPiece.points[i].meta.color);

  }

}

function drawTile(c, x, y, color) {
  if ((x <= 9) && (y <= 19)) {

    var xPos = (50 * x) + 5;
    var yPos = (50 * y) + 5;
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
    c.moveTo(xPos + 2, yPos);
    c.lineTo(xPos + 48, yPos);
    c.lineTo(xPos + 48, yPos + 48);
    c.lineTo(xPos + 2, yPos + 48);
    c.closePath();

    c.beginPath();
    c.moveTo(xPos + 9, yPos + 9);
    c.lineTo(xPos + 39, yPos + 9);
    c.lineTo(xPos + 39, yPos + 39);
    c.lineTo(xPos + 9, yPos + 39);
    c.closePath();
    c.fill();

    c.fillStyle = colors[1];
    c.beginPath();
    c.moveTo(xPos + 1, yPos + 1);
    c.lineTo(xPos + 9, yPos + 9);
    c.lineTo(xPos + 39, yPos + 9);
    c.lineTo(xPos + 47, yPos + 1);
    c.closePath();
    c.fill();

    //c.fillStyle = '#aaaaaa';
    c.beginPath();
    c.moveTo(xPos + 1, yPos + 1);
    c.lineTo(xPos + 9, yPos + 9);
    c.lineTo(xPos + 9, yPos + 39);
    c.lineTo(xPos + 1, yPos + 47);
    c.closePath();
    c.fill();

    c.fillStyle = colors[2];
    c.beginPath();
    c.moveTo(xPos + 1, yPos + 47);
    c.lineTo(xPos + 9, yPos + 39);
    c.lineTo(xPos + 39, yPos + 39);
    c.lineTo(xPos + 47, yPos + 47);
    c.closePath();
    c.fill();

    c.beginPath();
    c.moveTo(xPos + 47, yPos + 47);
    c.lineTo(xPos + 39, yPos + 39);
    c.lineTo(xPos + 39, yPos + 9);
    c.lineTo(xPos + 47, yPos + 1);
    c.closePath();
    c.fill();

  } else {
    console.log("Call out of bounds to drawTile function");
  };
}

function drawUI(c, canvas) {
  c.beginPath();
  //c.lineWidth = 4;
  c.fillStyle = '#ccffdd';
  c.moveTo(556, 2);
  c.lineTo(860, 2);
  c.lineTo(860, 206);
  c.lineTo(556, 206);
  c.closePath();
  c.fill();
  c.stroke();
}

function drawNextTile(c, canvas, x, y) {

  if ((x <= 5) && (y <= 3)) {
    var xPos = (50 * x) + 560;
    var yPos = (50 * y) + 6;
    c.beginPath();
    c.moveTo(xPos, yPos);
    c.lineTo(xPos + 46, yPos);
    c.lineTo(xPos + 46, yPos + 46);
    c.lineTo(xPos, yPos + 46);
    c.closePath();
    c.stroke();
  } else {
    console.log("Call out of bounds to drawNextTile function");
  };
}
