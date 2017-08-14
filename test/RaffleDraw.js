var RaffleDraw = artifacts.require("./RaffleDraw.sol");

contract('RaffleDraw', function(accounts) {
  it("should return a number equal to 0", function() {
    return RaffleDraw.deployed().then(function(instance) {
      return instance.random(1);
    }).then(function(value) {
      assert.equal(value, 0, "There should be a correct value");
    });
  });
});

contract('RaffleDraw', function(accounts) {
  var participant = "cbr";
  it("should return a participant", function() {
    return RaffleDraw.deployed().then(function(instance) {
      return instance.addParticipant(participant);
    }).then(function(value){
      return RaffleDraw.deployed().then(function(instance) {
        return instance.getParticipant(0);
      }).then(function(value) {
        assert.equal(value, participant, "There should be a correct value");
      });
    });
  });
});
