var ConvertLib = artifacts.require("./ConvertLib.sol");
var Loterie = artifacts.require("./MetaCoin.sol");
var MetaCoin = artifacts.require("./Loterie.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  deployer.deploy(Loterie);
};
