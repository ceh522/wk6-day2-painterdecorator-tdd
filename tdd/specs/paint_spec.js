const assert = require("assert");

const Paint = require("../paint.js");

let paint

beforeEach(function(){
  paint = new Paint(4)
});

describe("Paint", function() {
  it("should have paint", function() {
    const actual = paint.litres
    assert.strictEqual(actual, 4);
  });

it("should check if it is empty", function() {
  
});

});
