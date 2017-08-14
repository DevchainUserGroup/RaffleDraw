pragma solidity ^0.4.11;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/RaffleDraw.sol";

contract TestRaffleDraw {

  function testRandomWith1() {
    RaffleDraw raffleDraw = RaffleDraw(DeployedAddresses.RaffleDraw());
    uint expected = 0;
    Assert.equal(raffleDraw.random(1), expected, "Should be a correct value");
  }

}
