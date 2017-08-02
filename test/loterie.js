var Loterie = artifacts.require("./Loterie.sol");

contract('Loterie', function(accounts) {
  it("should register participant Toto", function(done) {
  	var loterie;
    Loterie.deployed().then(function(instance) {
    	instance.registerParticipant('Toto');
    	loterie = instance;
    }).then(function(result) {
    	console.log(loterie.registered);
	    return loterie.registered.call('Toto');
    }).then(function(result) {
	    assert.equal('Toto',result.valueOf());
	    done();
    });
  });
});
