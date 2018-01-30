const directions = {left: new Point(-1, 0), right: new Point(1, 0), up: new Point(0, 1), down: new Point(0, -1)};

function Point(x, y){
  this.x = x;
  this.y = y;
}

Point.prototype.equals = function(point){
  return(point.x === this.x && point.y === this.y);
}

Point.prototype.add = function(point){
  return new Point(this.x + point.x, this.y + point.y);
}

Point.prototype.subtract = function(point){
  return new Point(this.x - point.x, this.y - point.y);
}

Point.prototype.multiply = function(amount){
  return new Point(this.x * amount, this.y * amount);
}

Point.prototype.toString = function(){
  return "(" + this.x + ", " + this.y + ")";
}

function Block(points){
  this.points = points;
}

Block.prototype.findTopLeft = function(){
  var smallestX = this.points[0].x;
  var largestY = this.points[0].y;
  this.points.forEach(function(point){
    if(point.x < smallestX){
      smallestX = point.x;
    }
    if(point.y > largestY){
      largestY = point.y;
    }
  });
  return new Point(smallestX, largestY);
}

Block.prototype.toLocalCoordinates = function(topLeft){
  var lengthX = 0;
  var lengthY = 0;
  this.points.forEach(function(point){
    if(point.x - topLeft.x > lengthX){
      lengthX = point.x - topLeft.x;
    }
    if(topLeft.y - point.y > lengthY){
      lengthY = topLeft.y - point.y;
    }
  });
  var sideLength;
  if(lengthX > lengthY){
    sideLength = lengthX + 1;
  } else {
    sideLength = lengthY + 1;
  }

  var translationPoint = topLeft.add(new Point((Math.floor(sideLength/2)), -(Math.floor(sideLength/2))));
  var local = [];
  this.points.forEach(function(point){
    local.push(point.subtract(translationPoint));
  });
  return new Block(local);
}

Block.prototype.toGlobalCoordinates = function(topLeft){
  var lengthX = 0;
  var lengthY = 0;
  var localTopLeft = this.findTopLeft();
  this.points.forEach(function(point){
    if(point.x - localTopLeft.x > lengthX){
      lengthX = point.x - localTopLeft.x;
    }
    if(localTopLeft.y - point.y > lengthY){
      lengthY = localTopLeft.y - point.y;
    }
  });
  var sideLength;
  if(lengthX > lengthY){
    sideLength = lengthX + 1;
  } else {
    sideLength = lengthY + 1;
  }

  var translationPoint = topLeft.add(new Point((Math.floor(sideLength/2)), -(Math.floor(sideLength/2))));
  var globalCoords = [];
  this.points.forEach(function(point){
    globalCoords.push(point.add(translationPoint));
  });
  return new Block(globalCoords);
}

Block.prototype.rotate = function(counterclockwise){
  var topLeft = this.findTopLeft();
  var local = this.toLocalCoordinates(topLeft);
  var rotated = [];

  local.points.forEach(function(point){
    var newPoint;
    if(counterclockwise){
      newPoint = new Point(-point.y, point.x);
    } else {
      newPoint = new Point(point.y, -point.x);
    }
    rotated.push(newPoint);
  });
  var rotatedGlobal = new Block(rotated).toGlobalCoordinates(topLeft);
  return rotatedGlobal;
}

Block.prototype.translate = function(direction, amount){
  if(isNaN(amount)){
    amount = 1;
  }
  var moveBy = direction.multiply(amount);
  var result = [];
  this.points.forEach(function(point){
    result.push(point.add(moveBy));
  });
  return new Block(result);
}

Block.prototype.collides = function(otherBlock){
  var collides = false;
  this.points.forEach(function(thisPoint){
    otherBlock.points.forEach(function(otherPoint){
      if(thisPoint.equals(otherPoint)){
        collides = true;
      }
    })
  });
  return collides;
}

var ogCoords = [new Point(4, 9), new Point(5, 9), new Point(5, 10), new Point(5, 11)];
var myBlock = new Block(ogCoords);
