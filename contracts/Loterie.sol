pragma solidity ^0.4.4;

contract Loterie {
  event Registration(string someone);
  mapping(bytes32 => string) public participants;
  function Loterie() {
    // constructor
  }
  function registered(string someone) returns (string) {
  	return participants[sha3(someone)];
  }
  function registerParticipant(string someone) {
  	bytes32 hash = sha3(someone);
  	participants[hash] = someone;
  	Registration(someone);
  } 
}
