// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.26;

contract WavePay {
    address public owner;

    struct Transfer {
        address recipient;
        uint256 amount;
        uint256 timestamp;
    }
    
    struct User {
        address[] savedAddresses;
        Transfer[] transferHistory;
    }

    mapping(address => User) private users;

    event AddressSaved(address indexed user, address[] savedAddresses);
    event AddressUpdated(address indexed user, address[] updatedAddresses);
    event MultiTransfer(address indexed sender, address[] recipients, uint256 totalAmount);
    event TransferSingle(address indexed sender, address indexed recipient, uint256 amount);

    constructor() {
        owner = msg.sender;
    }
    function saveAddresses(address[] memory _addresses) public {
        users[msg.sender].savedAddresses = _addresses;
        emit AddressSaved(msg.sender, _addresses);
    }

    function getUserAddresses() external view returns (address[] memory) {
        return users[msg.sender].savedAddresses;
    }

}
