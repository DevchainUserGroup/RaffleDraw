pragma solidity ^0.4.11;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/RaffleDraw.sol";

contract TestRaffleDraw {

  function testRandomWithNew() {
    RaffleDraw raffleDraw = RaffleDraw(DeployedAddresses.RaffleDraw());
    raffleDraw.random(10);
  }
}
