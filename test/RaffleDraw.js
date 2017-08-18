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
  var participant1 = "John";
  var participant2 = "Alice"
  var raffleDraw;
  it("should return a participant", function() {
    return RaffleDraw.deployed().then(function(instance) {
      raffleDraw = instance; 
      return raffleDraw.addParticipant(participant1);
    }).then(function(){
      return raffleDraw.addParticipant(participant2);      
    }).then(function(){
      return raffleDraw.getParticipant(1);
    }).then(function(value) {
     assert.equal(value, participant2, "There should be a correct value");
   });     
  });
});

contract('RaffleDraw', function(accounts) {
  var prize = "ether";
  var raffleDraw;
  it("should return a prize", function() {
    return RaffleDraw.deployed().then(function(instance) {
      raffleDraw = instance;
      return raffleDraw.addPrize(prize);
    }).then(function(){
      return raffleDraw.getPrize(0);
    }).then(function(value) {
      assert.equal(value, prize, "There should be a correct value");
    });
  });
});

contract('RaffleDraw', function(accounts) {
  var prize1 = "ether";
  var prize2 = "bitcoin";
  var raffleDraw;
  it("should return a second prize", function() {
    return RaffleDraw.deployed().then(function(instance) {
      raffleDraw = instance;
      return raffleDraw.addPrize(prize1);
    }).then(function(){
      return raffleDraw.addPrize(prize2);
    }).then(function(){
      return raffleDraw.getPrize(1);
    }).then(function(value) {
      assert.equal(value, prize2, "There should be a correct value");
    });
  });
});

contract('RaffleDraw', function(accounts) {
  var participant = "cbr";
  var raffleDraw;
  it("should return a random winner", function() {
    return RaffleDraw.deployed().then(function(instance) {
      raffleDraw = instance;
      return raffleDraw.addParticipant(participant);
    }).then(function(){
      return raffleDraw.getRandomWinner();
    }).then(function(){
      return raffleDraw.getWinner(0);
    }).then(function(value) {
      assert.equal(value, participant, "There should be a correct value");
    });
  });
});

contract('RaffleDraw', function(accounts) {
  var winner = "cbr";
  var raffleDraw;
  it("should return a winner", function() {
    return RaffleDraw.deployed().then(function(instance) {
      raffleDraw = instance;
      return raffleDraw.addWinner(winner);
    }).then(function(){
      return raffleDraw.getWinner(0);
    }).then(function(value) {
      assert.equal(value, winner, "There should be a correct value");
    });
  });
});

contract('RaffleDraw', function(accounts) {
  var winner = "cbr";
  var account_one = accounts[0];
  // var account_two = accounts[1];
  var raffleDraw;
  it("should return a winner", function() {
    return RaffleDraw.deployed().then(function(instance) {
      raffleDraw = instance;
      return raffleDraw.addWinner(winner, {from: account_one});
    }).then(function(){
      return raffleDraw.getWinner(0);
    }).then(function(value) {
      assert.equal(value, winner, "There should be a correct value");
    });
  });
});


