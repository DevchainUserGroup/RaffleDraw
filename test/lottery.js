var Lottery = artifacts.require("./Lottery.sol");

contract('Lottery', function(accounts) {

  it("should register unregistered Participant successfully", function(done) {
      Lottery.deployed()
          .then(function(instance) {
            return instance.register.call('Kent Beck');
          })
          .then(function(registered) {
              // assert.equal(registered.valueOf(), false, "10000 wasn't in the first account");
              assert.isTrue(registered.valueOf());
              // assert.isTrue(registered);
              done();
          });

  });

  var aParticipant = "Kent Beck";

  it("should register multiple participant and get the one according to the given position", function(done) {
      Lottery.deployed()
          .then( function(instance) { instance.register("aParticipant"); return instance; })
          .then( function(instance) { instance.register("Another Participant"); return instance; })
          .then( function(instance) { return instance.getParticipant(1); })
          .then( function(value) {
              assert.equal(value, "Another Participant");
              done();
          });
  });

});