pragma solidity ^0.4.11;

contract Loterie {

  event Registration(string someone);
  event Wins(string winner, string lot);

  string[] public participants;
  string[] public lots;

  WonLot[] winners;

  struct WonLot {
  	string participant;
  	string lot;
  	bool cancelled;
  }

  address owner;

  modifier onlyOwner {
  	require(msg.sender == owner);
 	_;
  }

  function Loterie() {
    owner = msg.sender;
  }

  function registerParticipant(string someone) onlyOwner {
    int index = isRegisteredParticipant(someone);
    if (index == -1) {
      participants.push(someone);
      Registration(someone);
    }
  }

  function count() constant returns (uint) {
    return participants.length;
  }

  function isRegisteredParticipant(string someone) returns (int) {
    return isRegisteredGeneric(someone, participants);
  }

  function isRegisteredLot(string something) returns (int) {
    return isRegisteredGeneric(something, lots);
  }

  function isRegisteredGeneric(string some, string[] array) private returns (int) {
    bytes32 hash = sha3(some);
    for (uint i = 0; i < array.length; i++) {
      if (hash == sha3(array[i])) {
        return int(i);
      }
    }
    return -1;
  }

  function removeParticipant(string someone) onlyOwner {
  	uint index = uint(isRegisteredParticipant(someone));
      delete participants[index];
      participants[index]=participants[participants.length-1];
      participants.length --;
  }

  function registerLot(string something) onlyOwner {
  	int index = isRegisteredLot(something);
    if (index == -1) {
      lots.push(something);
    }
  }

  function participant(uint index) returns (string) {
    return participants[index];
  }

  function drawLoterie(uint lotIndex) onlyOwner {
  	string lot = lots[lotIndex];
  	//delete lots[lotIndex];
  	//lots[lotIndex] = lots[lots.length-1];
  	//lots.length--;
    uint index = uint(block.blockhash(block.number - 1)) % participants.length;
    string winner=participants[index];
    winners.push(WonLot(winner, lot, false));
    Wins(winner, lot);
    //kill();
  }

  function kill() onlyOwner {
  	suicide(owner);
  }
  
  function random(uint modulo) constant returns (uint) {
    return uint(block.blockhash(block.number - 1)) % modulo;
  }

  function getWinner(uint index) constant returns (string, string) {
    WonLot wonlot = winners[index];
  	return (wonlot.participant, wonlot.lot);
  }

}
