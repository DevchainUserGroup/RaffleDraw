pragma solidity ^0.4.4;

contract Loterie {

  event Registration(string someone);
  event Wins(uint index);

  string[] public participants;
  uint  winner;
  address owner;

	modifier onlyOwner {
 		require(msg.sender == owner);
 		_;
	}

  function Loterie() {
    owner = msg.sender;
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

  function registerParticipant(string someone) onlyOwner {
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

  function drawLoterie() onlyOwner {
    uint index = uint(block.blockhash(block.number - 1)) % participants.length;
    winner = index;
    Wins(winner);
    kill();
  }

  function kill() onlyOwner {
  	suicide(owner);
  }

  function getWinner() constant returns (uint) {
  	return winner;
  }

}
