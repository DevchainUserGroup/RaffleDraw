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

contract('RaffleDraw', function(accounts) {
  var prize = "ether";
  it("should return a prize", function() {
    return RaffleDraw.deployed().then(function(instance) {
      return instance.addPrize(prize);
    }).then(function(value){
      return RaffleDraw.deployed().then(function(instance) {
        return instance.getPrize(0);
      }).then(function(value) {
        assert.equal(value, prize, "There should be a correct value");
      });
    });
  });
});

contract('RaffleDraw', function(accounts) {
  var prize1 = "ether";
  var prize2 = "bitcoin";
  it("should return a second prize", function() {
    return RaffleDraw.deployed().then(function(instance) {
      return instance.addPrize(prize1);
    }).then(function(value){
      return RaffleDraw.deployed().then(function(instance) {
        return instance.addPrize(prize2);
      }).then(function(value){
        return RaffleDraw.deployed().then(function(instance) {
          return instance.getPrize(1);
      }).then(function(value) {
        assert.equal(value, prize2, "There should be a correct value");
      });
    });
    });
  });
});

