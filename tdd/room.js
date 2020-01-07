const Room = function (size, metresPainted = 0) {
  this.size = size;
  this.metresPainted = metresPainted;
}

Room.prototype.paint = function (squareMetresPainted) {
  this.metresPainted =  this.metresPainted + squareMetresPainted;
  return this.metresPainted;
};

module.exports = Room;
