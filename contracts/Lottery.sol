pragma solidity ^0.4.4;

import "./Mortal.sol";

contract Lottery is Mortal {

    function Lottery() {}

    function randomIntBetweenZeroAnd(uint upperBound) constant returns (uint) {
        return uint(block.blockhash(block.number - 1)) % upperBound;
    }
    //
    // Participant
    //

    string[] private participants;

    function addParticipant(string name) returns (bool) {
        participants.push(name);
        return true;
    }

    function getParticipant(uint index) constant returns (string) {
        return participants[index];
    }

    //
    // Price
    //

    string[] private prices;

    function addPrice(string name) returns (bool) {
        prices.push(name);
    }

    function getPrice(uint index) constant returns (string) {
        return prices[index];
    }

}
