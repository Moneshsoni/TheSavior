pragma solidity 0.8.9;
contract OnlyOwner{
    address public owner;
    uint public my_amount;
    uint public userAmount;
    constructor(){
        owner = msg.sender;
    }
    modifier OnlyOwner(){
        require(msg.sender==owner,"only owner can call");
        _;
    }

    function fillAmount(uint amount)public OnlyOwner{
        my_amount = amount;
    }

    function getAmount(uint amount)public{
        require(amount<=my_amount,"You can't get enuff amount");
        my_amount -= amount;
        userAmount += amount;
    }
}
