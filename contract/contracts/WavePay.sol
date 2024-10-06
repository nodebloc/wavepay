// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.26;

contract WavePay {
    address public owner;

    event AddressSaved(address indexed user, address[] savedAddresses);
    event AddressUpdated(address indexed user, address[] updatedAddresses);
    event MultiTransfer(address indexed sender, address[] recipients, uint256 totalAmount);
    event TransferSingle(address indexed sender, address indexed recipient, uint256 amount);

    constructor() {
        owner = msg.sender;
    }
}
