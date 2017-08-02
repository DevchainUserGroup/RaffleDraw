var Loterie = artifacts.require("./Loterie.sol");

module.exports = function(deployer) {
  deployer.deploy(Loterie);
};
