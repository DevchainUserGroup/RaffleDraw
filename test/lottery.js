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
});
