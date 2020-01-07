const assert = require("assert");

const Paint = require("../paint.js");

let paint

beforeEach(function(){
  paint = new Paint(4)
  paint2 = new Paint(0)
});

describe("Paint", function() {
  it("should have paint", function() {
    const actual = paint.litres
    assert.strictEqual(actual, 4);
  });

it("should check if it is empty", function() {
  const actual = paint2.checkIfEmpty()
  assert.strictEqual(actual, "empty")
});

it("should be able to empty itself of paint", function(){
  const actual = paint.reducePaint(1)
  assert.strictEqual(actual, 3)
})

});
