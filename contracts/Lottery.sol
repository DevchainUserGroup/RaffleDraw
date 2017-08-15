pragma solidity ^0.4.4;

import "./Mortal.sol";

contract Lottery is Mortal {

    struct Drawing {
        string winner;
        string price;
        bool accepted;
    }
    Drawing[] private drawings;

    uint private nextPriceIndex;

    function Lottery() {
        nextPriceIndex = 0;
    }

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

    function getWinner() constant returns (string) {
        uint i = randomIntBetweenZeroAnd(participants.length);
        return getParticipant(i);
    }

    function winnerAcceptNextPrice(string winner) {
        string price = prices[nextPriceIndex];
        nextPriceIndex++;
        drawings.push(Drawing(winner, price, true));
    }

    function getDrawingAtIndex(uint index) constant returns (string, string, bool) {
        Drawing drawing = drawings[index];
        return (drawing.winner, drawing.price, drawing.accepted);
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
