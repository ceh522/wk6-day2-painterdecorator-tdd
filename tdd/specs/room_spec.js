const assert = require("assert");

const Room = require("../room.js");

let room

beforeEach(function(){
  room = new Room(200)
});

describe("Room", function() {
  it("should have a size", function() {
    const actual = room.size
    assert.strictEqual(actual, 200);
  });


  it("should start unpainted", function() {
    const actual = room.metresPainted
    assert.strictEqual(actual, 0);
  });

  it("should be able to be painted", function() {
    room.paint(1)
    const actual = room.metresPainted
    assert.strictEqual(actual, 1);
  });

});
