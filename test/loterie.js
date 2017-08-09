var Loterie = artifacts.require("./Loterie.sol");

contract('Loterie with 1 participant', function(accounts) {
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
	    assert.equal('Toto',result);
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
 it("should the only participant be the winner", function(done) {
   var loterie;
   Loterie.deployed().then(function(instance) {
     loterie = instance;
     return instance.registerParticipant('Toto');
   }).then(function(result) {
//     loterie.Wins({}, {fromBlock: 0, toBlock: 'latest'}).watch(function(error, logs) {
//	console.log('==================== AND THE WINNER IS ===========   :   ');
//	console.log(logs.args);
//});
     loterie.drawLoterie();
   }).then(function(result) {
     return loterie.getWinner.call();
   }).then(function(result) {
     assert.equal(0,result);
     done();
   });
 });
});

contract('Loterie with 2 participants', function(accounts) {
  it("should register participants Toto and Titi", function(done) {
  	var loterie;
    Loterie.deployed().then(function(instance) {
    	loterie = instance;
      return instance.registerParticipant('Toto');
    }).then(function(result) {
      return loterie.count.call();
    }).then(function(result) {
      assert.equal(1,result.valueOf());
      return loterie.registerParticipant('Titi');
    }).then(function(result) {
      return loterie.count.call();
    }).then(function(result) {
      assert.equal(2,result.valueOf());
	    done();
    });
  });
});
