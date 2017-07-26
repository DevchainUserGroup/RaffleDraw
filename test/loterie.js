var Loterie = artifacts.require("./Loterie.sol");

contract('Loterie', function(accounts) {
  it("should register participant Toto", function(done) {
    var loterie = Loterie.deployed().then(function(instance) {
    	return instance.registerParticipant.call('Toto');
    }).then(function(result) {
	    assert.isTrue(result.valueOf());
	    done();
    });
  });
});
