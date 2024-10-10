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

    function updateAddresses(address[] memory addresses) public {
        users[msg.sender].savedAddresses = addresses;
        emit AddressUpdated(msg.sender, addresses);
    }
    
    function transferToMultiple(address[] memory recipients, uint256[] memory amounts) public payable {
        require(recipients.length == amounts.length, "Error: Recipients and amounts must be of same length");
        uint256 totalAmount = 0;

        for (uint256 i = 0; i < recipients.length; i++) {
            require(msg.value >= amounts[i], "Error: Insufficient funds");
            totalAmount += amounts[i];
            payable(recipients[i]).transfer(amounts[i]);
            
            users[msg.sender].transferHistory.push(Transfer(recipients[i], amounts[i], block.timestamp));
        }

        emit MultiTransfer(msg.sender, recipients, totalAmount);
    }

    function transfer(address recipient, uint256 amount) public payable {
        require(msg.value >= amount, "Error: Incorrect Ether amount sent");
        
        payable(recipient).transfer(amount);
        
        users[msg.sender].transferHistory.push(Transfer(recipient, amount, block.timestamp));
        
        emit TransferSingle(msg.sender, recipient, amount);
    }

    function checkBalance() public view returns (uint256) {
        return address(this).balance;
    }
    
    function getTransferHistory(address user) public view returns (Transfer[] memory) {
        return users[user].transferHistory;
    }

}
