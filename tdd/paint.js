const Paint = function (litres) {
  this.litres = litres;
};

Paint.prototype.checkIfEmpty = function () {
  if (this.litres === 0) {
    return "empty";
  }
  else {return "not empty"};
};

Paint.prototype.reducePaint = function (litresReduced) {
  this.litres = this.litres - litresReduced;
  return this.litres;
};

module.exports = Paint;
