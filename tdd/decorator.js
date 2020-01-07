const Decorator = function (paintStock) {
  this.paintStock = [];
};


Decorator.prototype.addCanOfPaint = function(paint) {
  this.paintStock.push(paint)
};

Decorator.prototype.litresInStock = function() {
  total = 0
  for (i = 0; i < this.paintStock.length; i++){
  total = total + this.paintStock[i].litres
  };
  return total
};

Decorator.prototype.enoughPaintForRoom = function(litres, room) {
  if (litres > room.size) {
    return "enough paint"
  } else {
    return "not enough paint"
  };
};

Decorator.prototype.paintRoom = function(enoughPaint, roomSize, metresPainted) {
  if (enoughPaint === "enough paint"){
    metresPainted = roomSize
    let litresInStock = this.litresInStock() - metresPainted
    return `litres in stock: ${litresInStock}, total metres painted: ${metresPainted}`;
  };
}

module.exports = Decorator;
