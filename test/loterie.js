var Loterie = artifacts.require("./Loterie.sol");

contract('Loterie', function(accounts) {
  it("should Toto not be participant", function(done) {
    var loterie;
    Loterie.deployed().then(function(instance) {
      loterie = instance;
      return loterie.isRegistered.call('Toto');
    }).then(function(result) {
      assert.equal(-1,result.valueOf());
      done();
    });
  });
  it("should register participant Toto", function(done) {
  	var loterie;
    Loterie.deployed().then(function(instance) {
    	loterie = instance;
      return instance.registerParticipant('Toto');
    }).then(function(result) {
	    return loterie.isRegistered.call('Toto');
    }).then(function(result) {
      assert.equal(0,result.valueOf());
      return loterie.count.call();
    }).then(function(result) {
      assert.equal(1,result.valueOf());
      return loterie.participant.call(0);
    }).then(function(result) {
	    assert.equal('Toto',result.valueOf());
	    done();
    });
  });
  it("should not register participant Toto twice", function(done) {
    var loterie;
    Loterie.deployed().then(function(instance) {
      loterie = instance;
      return instance.registerParticipant('Toto');
    }).then(function(result) {
      return loterie.count.call();
    }).then(function(result) {
      assert.equal(1,result.valueOf());
      return loterie.registerParticipant('Toto');
    }).then(function(result) {
      return loterie.count.call();
    }).then(function(result) {
      assert.equal(1,result.valueOf());
      done();
    });
  });
});
