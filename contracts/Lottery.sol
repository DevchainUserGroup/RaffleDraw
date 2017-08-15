pragma solidity ^0.4.4;

contract Lottery {

    function Lottery() {}

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
