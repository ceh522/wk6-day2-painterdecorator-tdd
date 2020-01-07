const assert = require("assert");

const Paint = require("../paint.js");
const Room = require("../room.js");
const Decorator = require("../decorator.js");


let decorator

beforeEach(function(){
  decorator = new Decorator()
  room = new Room (4)
  paint = new Paint(5)
});

describe("Decorator", function() {
  it("should have an empty paint stock", function() {
    const actual = decorator.paintStock.length
    assert.strictEqual(actual, 0);
  });

  it("should add a can of paint to the paint stock", function() {
    decorator.addCanOfPaint(paint)
    const actual = decorator.paintStock.length
    assert.strictEqual(actual, 1);
  });

  it("should be able to calculate total litres of paint it has in stock", function() {
    decorator.addCanOfPaint(paint)
    const actual = decorator.litresInStock()
    assert.strictEqual(actual, 5)
  });

  it("should be able to calculate if there is enough paint to paint a room", function() {
    decorator.addCanOfPaint(paint)
    const litres = decorator.litresInStock()
    const actual = decorator.enoughPaintForRoom(litres, room)
    assert.strictEqual(actual, "enough paint")
  });

  it("should be able to paint room if there is enough paint", function() {
    decorator.addCanOfPaint(paint)
    const roomSize = room.size
    const metresPainted = room.paint()
    const litres = decorator.litresInStock()
    const enoughPaint = decorator.enoughPaintForRoom(litres, room)
    const actual = decorator.paintRoom(enoughPaint, roomSize, metresPainted)
    assert.strictEqual(actual, "litres in stock: 1, total metres painted: 4")

  })

});
