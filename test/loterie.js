var Loterie = artifacts.require("./Loterie.sol");

contract('Loterie with 1 participant', function(accounts) {
  it("should Toto not be participant", function(done) {
    var loterie;
    Loterie.deployed().then(function(instance) {
      loterie = instance;
      return loterie.isRegisteredParticipant.call('Toto');
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
	    return loterie.isRegisteredParticipant.call('Toto');
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
     return loterie.registerParticipant('Toto');
   }).then(function(result) {
     return loterie.registerLot('Tahiti en business');
   }).then(function(result) {
      return loterie.drawLoterie(0);
   }).then(function(result) {
     return loterie.getWinner.call(0);
   }).then(function(winner) {
     assert.equal('Toto',winner[0]);
     assert.equal('Tahiti en business',winner[1]);
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
      return loterie.registerParticipant('Tata');
    }).then(function(result) {
      return loterie.count.call();
    }).then(function(result) {
      assert.equal(2,result.valueOf());
      return loterie.registerParticipant('Titi');
    }).then(function(result) {
      return loterie.count.call();
    }).then(function(result) {
      assert.equal(3,result.valueOf());
      return loterie.removeParticipant('Tata');
    }).then(function(result) {
	    done();
    });
  });
});

contract('Loterie with some lots', function(accounts) {
  it("should register lot Vol Tahiti en business", function(done) {
  	var loterie;
    Loterie.deployed().then(function(instance) {
    	loterie = instance;
      return instance.registerParticipant('Toto');
    }).then(function(result) {
      return loterie.registerLot('Tahiti en business');
    }).then(function(result) {
      return loterie.registerParticipant('Titi');
    }).then(function(result) {
      return loterie.count.call();
    }).then(function(result) {
      assert.equal(2,result.valueOf());
	    done();
    });
  });
});
