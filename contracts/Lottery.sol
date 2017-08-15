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

}
