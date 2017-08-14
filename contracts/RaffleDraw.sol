pragma solidity ^0.4.11;

import "./Mortal.sol";

contract RaffleDraw is Mortal {
    
    uint public maxParticipants = 10;
    string[] public participants;

    /* this runs when the contract is executed */
    function RaffleDraw() public {
        
    }

    /* random function */
    function random(uint modulo) constant returns (uint) {
        return uint(block.blockhash(block.number - 1)) % modulo;
    }
 
    function addParticipant(string participant) public {
       if (participants.length >=  maxParticipants) throw; 
       participants.push(participant);
    }

    function getParticipant(uint position) constant returns (string) {
       return participants[position];
    }
    
   
}
