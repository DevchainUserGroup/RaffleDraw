pragma solidity ^0.4.11;

import "./Mortal.sol";

contract RaffleDraw is Mortal {
    
    uint private maxParticipants = 10;
    string[] private participants;

    uint private maxPrizes = 5;
    string[] private prizes;

    string[] private winners;


    function RaffleDraw() public {
    }

    function random(uint modulo) constant returns (uint) {
        return uint(block.blockhash(block.number - 1)) % modulo;
    }

    function getRandomWinner() constant returns (string) {
        string winner = participants[random(participants.length)];
        addWinner(winner);   
        return winner;
    }

    /* TODO: Make private */
    function addWinner(string winner) {
       winners.push(winner);
    }

    function getWinner(uint position) constant returns (string) {
       return winners[position];
    }

    function addParticipant(string participant) public {
       if (participants.length >=  maxParticipants) throw; 
       participants.push(participant);
    }

    function getParticipant(uint position) constant returns (string) {
       return participants[position];
    }
    
    function addPrize(string prize) public {
       if (prizes.length >=  maxPrizes) throw;
       prizes.push(prize);
    }

    function getPrize(uint position) constant returns (string) {
       return prizes[position];
    }
   
}
