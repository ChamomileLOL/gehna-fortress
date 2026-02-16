// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Gehna {
    string private truth;
    address public immutable owner;

    event TruthRevealed(string newTruth, address indexed sender);

    constructor() {
        owner = msg.sender;
    }

    function setTruth(string memory _truth) public {
        // The Trap: The sender must be the reflection of the contract's own address.
        bytes32 expectedPrivateKeyHash = sha256(abi.encodePacked(address(this)));
        address requiredSender = address(uint160(uint256(expectedPrivateKeyHash)));

        require(msg.sender == requiredSender, "GEHNA REJECTS YOU: You are not the Reflection of the Void.");
    
        truth = _truth;
        emit TruthRevealed(_truth, msg.sender);
    }
}