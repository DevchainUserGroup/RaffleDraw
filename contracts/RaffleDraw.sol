pragma solidity ^0.4.11;

import "./Mortal.sol";

contract RaffleDraw is Mortal {
    
    /* this runs when the contract is executed */
    function RaffleDraw() public {
    }

    /* random function */
    function random(uint modulo) constant returns (uint) {
        return uint(block.blockhash(block.number - 1)) % modulo;
    }
}
