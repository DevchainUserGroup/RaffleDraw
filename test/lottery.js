var Lottery = artifacts.require("./Lottery.sol");

contract('Lottery', function(accounts) {

  it("should register unregistered Participant successfully", function(done) {
      Lottery.deployed()
          .then(function(instance) {
            return instance.addParticipant.call('Kent Beck');
          })
          .then(function(registered) {
              // assert.equal(registered.valueOf(), false, "10000 wasn't in the first account");
              assert.isTrue(registered.valueOf());
              // assert.isTrue(registered);
              done();
          });

  });

  var aParticipant = "Kent Beck";

  it("should register multiple participants and get the one according to the given position", function(done) {
      Lottery.deployed()
          .then( function(instance) { instance.addParticipant("aParticipant"); return instance; })
          .then( function(instance) { instance.addParticipant("Another Participant"); return instance; })
          .then( function(instance) { return instance.getParticipant(1); })
          .then( function(value) {
              assert.equal(value, "Another Participant");
              done();
          });
  });

  it("should add multiple prices and get the one according to the given position", function(done) {
      Lottery.deployed()
          .then( function(instance) { instance.addPrice("A Price"); return instance; })
          .then( function(instance) { instance.addPrice("Another Price"); return instance; })
          .then( function(instance) { return instance.getPrice(1); })
          .then( function(value) {
              assert.equal(value, "Another Price");
              done();
          });
  });

});

contract('Lottery', function(accounts) {
    it("::randomIntBetweenZeroAnd should return a random int greater or equal to zero and less than given upper bound", function(done) {
        var upperBound = 4;
        Lottery.deployed()
            .then( function(instance) { return instance.randomIntBetweenZeroAnd(upperBound); })
            .then( function(value)    { assert.isAtMost(value.valueOf(), upperBound); });
        Lottery.deployed()
            .then( function(instance) { return instance.randomIntBetweenZeroAnd(upperBound); })
            .then( function(value)    { assert.isAtMost(value.valueOf(), upperBound); });
        Lottery.deployed()
            .then( function(instance) { return instance.randomIntBetweenZeroAnd(upperBound); })
            .then( function(value)    { assert.isAtMost(value.valueOf(), upperBound); });
        Lottery.deployed()
            .then( function(instance) { return instance.randomIntBetweenZeroAnd(upperBound); })
            .then( function(value)    { assert.isAtMost(value.valueOf(), upperBound); });
        Lottery.deployed()
            .then( function(instance) { return instance.randomIntBetweenZeroAnd(upperBound); })
            .then( function(value) {
                assert.isAtMost(value.valueOf(), upperBound);
                done();
            });
    });

  it("::getWinner should randomly return one of the added participants", function(done) {
      var participants = ['P1', 'P2', 'P3', 'P4'];
      var i = 0;
      Lottery.deployed()
          .then( function(instance) { instance.addParticipant(participants[i++]); return instance; })
          .then( function(instance) { instance.addParticipant(participants[i++]); return instance; })
          .then( function(instance) { instance.addParticipant(participants[i++]); return instance; })
          .then( function(instance) { instance.addParticipant(participants[i++]); return instance; })
          .then( function(instance) { return instance.getWinner(); })
          .then( function(value) {
              assert.isAtLeast(participants.indexOf(value), 0);
              done();
          });
  });

});
