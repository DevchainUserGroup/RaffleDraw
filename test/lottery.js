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

contract('Lottery::randomIntBetweenZeroAnd', function(accounts) {
    it("should return a random int greater or equal to zero and less than given upper bound", function(done) {
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

});


contract('Lottery::getWinner', function(accounts) {

  it("should randomly return one of the added participants", function(done) {
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

contract('Lottery::winnerAcceptNextPrice', function(accounts) {

    it("should set the given winner to the next available price.", function(done) {
        var attendees = ['A1', 'A2', 'A3', 'A4'];
        var prices = ['P1', 'P2', 'P3', 'P4'];
        var a = 0;
        var p = 0;
        Lottery.deployed()
            // PARTICIPANTS
            .then( function(instance) { instance.addParticipant(attendees[a++]); return instance; })
            .then( function(instance) { instance.addParticipant(attendees[a++]); return instance; })
            .then( function(instance) { instance.addParticipant(attendees[a++]); return instance; })
            .then( function(instance) { instance.addParticipant(attendees[a++]); return instance; })
            // PRICES
            .then( function(instance) { instance.addPrice(prices[p++]); return instance; })
            .then( function(instance) { instance.addPrice(prices[p++]); return instance; })
            .then( function(instance) { instance.addPrice(prices[p++]); return instance; })
            .then( function(instance) { instance.addPrice(prices[p++]); return instance; })
            // WINNER
            .then( function(instance) { return instance.getWinner(); })
            .then( function(winner) {

                Lottery.deployed()
                    .then( function(instance) { instance.winnerAcceptNextPrice(winner); return instance; })
                    .then( function(instance) { return instance.getDrawingAtIndex(0); })
                    .then( function(drawing) {
                        assert.isAtLeast(attendees.indexOf(drawing[0]), 0);
                        assert.equal(drawing[1], "P1");
                        assert.equal(drawing[2], true);
                        done();
                    });

            });
    });

});
