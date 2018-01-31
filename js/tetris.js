const directions = {left: new Point(-1, 0), right: new Point(1, 0), up: new Point(0, 1), down: new Point(0, -1)};

function Point(x, y, center){
  this.x = x;
  this.y = y;

  if(center != undefined){
    this.center = center;
  } else {
    this.center = false;
  }
  this.meta = {};
}
// POINT OBJECT DEFINITION
//returns a new point at x, y with all meta-information of the current point
Point.prototype.newCopy = function(x, y){
  var newPoint = new Point(x, y);
  newPoint.center = this.center;
  newPoint.meta = this.meta;
  return newPoint;
}

Point.prototype.equals = function(point){
  return(point.x === this.x && point.y === this.y);
}

Point.prototype.add = function(point){
  return this.newCopy(this.x + point.x, this.y + point.y);
}

Point.prototype.subtract = function(point){
  return this.newCopy(this.x - point.x, this.y - point.y);
}

Point.prototype.multiply = function(amount){
  return this.newCopy(this.x * amount, this.y * amount);
}

Point.prototype.toString = function(){
  return "(" + this.x + ", " + this.y + ")";
}

//BLOCK OBJECT DEFINITION

function Block(points, rotator){
  if(rotator != undefined){
    this.defaultRotate = Block.prototype.rotate;
    this.rotate = rotator;
  }
  this.points = points;
  this.meta = {};
}

Block.prototype.newCopy = function(points){
  var newBlock = new Block(points, this.rotate);
  newBlock.meta = this.meta;
  return newBlock;
}

Block.prototype.findCenter = function(){
  var center;
  this.points.forEach(function(point){
    if(point.center){
      center = point;
    }
  });
  return center;
}

Block.prototype.moveTo = function(target){
  var difference = target.subtract(this.findCenter());
  var output = [];
  this.points.forEach(function(point){
    var newPoint = point.add(difference);
    output.push(newPoint);
  });
  return this.newCopy(output);
}

Block.prototype.rotate = function(counterclockwise){
  var local = [];
  var centerPosition = this.findCenter();

  this.points.forEach(function(point){
    local.push(point.subtract(centerPosition));
  });

  var rotated = [];
  local.forEach(function(point){
    var newPoint;
    if(counterclockwise){
      newPoint = point.newCopy(-point.y, point.x);
    } else {
      newPoint = point.newCopy(point.y, -point.x);
    }
    rotated.push(newPoint);
  });

  var rotatedGlobal = [];
  rotated.forEach(function(point){
    var newPoint = point.add(centerPosition);
    rotatedGlobal.push(newPoint);
  });

  return this.newCopy(rotatedGlobal);
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
  return this.newCopy(result);
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

var lineRotator = function(counterclockwise){
  var vertical = (this.points[0].y !== this.points[1].y);
  if(vertical){
    return this.defaultRotate(false);
  } else {
    return this.defaultRotate(true);
  }
}

var squareRotator = function(counterclockwise){
  return this;
}

const pieces = {
  piece1: new Block([new Point(-1, 0), new Point(0, 0, true), new Point(1, 0), new Point(2, 0)], lineRotator),
  piece2: new Block([new Point(-1, 1), new Point(-1, 0), new Point(0, 0, true), new Point(1, 0)]),
  piece3: new Block([new Point(-1, 0), new Point(0, 0, true), new Point(1, 0), new Point(1, 1)]),
  piece4: new Block([new Point(1, 1, true), new Point(1, 0), new Point(0, 0), new Point(0, 1)], squareRotator),
  piece5: new Block([new Point(-1, -1), new Point(0, -1), new Point(0, 0, true), new Point(1, 0)]),
  piece6: new Block([new Point(-1, 0), new Point (0, 0, true), new Point(0, -1), new Point(1, -1)]),
  piece7: new Block([new Point(0, 1), new Point(0, 0, true), new Point(-1, 0), new Point(1, 0)])
};
