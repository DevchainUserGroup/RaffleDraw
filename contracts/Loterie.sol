pragma solidity ^0.4.4;

contract Loterie {
  event Registration(string someone);
  string[] public participants;
  string public winner;
  function Loterie() {
    // constructor
  }
  function isRegistered(string someone) returns (int) {
    bytes32 hash = sha3(someone);
    for (uint i = 0; i < participants.length; i++) {
      if (hash == sha3(participants[i])) {
        return int(i);
      }
    }
    return -1;
  }
  function registerParticipant(string someone) {
  	int index = isRegistered(someone);
    if (index == -1) {
      participants.push(someone);
      Registration(someone);
    }
  }
  function count() returns (uint) {
    return participants.length;
  }
  function participant(uint index) returns (string) {
    return participants[index];
  }
  function drawLoterie() returns (string) {
    uint index = uint(block.blockhash(block.number - 1)) % participants.length;
    winner = participants[index];
  }
}
