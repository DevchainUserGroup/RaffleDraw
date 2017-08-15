pragma solidity ^0.4.4;

contract Lottery {

    string[] private participants;

  function Lottery() {
    // constructor
  }

  function register(string name) returns (bool) {
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
