const assert = require("assert");

const Decorator = require("../decorator.js");

let decorator

beforeEach(function(){
  decorator = new Decorator()
});

describe("Decorator", function() {
  it("should have an empty paint stock", function() {
    const actual = decorator.paintStock.length
    assert.strictEqual(actual, 0);
  })
})
