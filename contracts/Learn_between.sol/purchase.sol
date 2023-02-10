pragma solidity 0.8.9;
contract Lod{
    address public owner;
    mapping(address=>uint) public puckbalances;
    string public dappName;

    mapping(address=>uint)public balances; 
    constructor(){
        owner = msg.sender;
        puckbalances[address(this)] = 10;
    }

    function refill(uint amount)public{
        require(msg.sender==owner,"You are not owner");
        puckbalances[address(this)]+=amount;
    }

    function purchase(uint amount)public payable{
        require(msg.value>=amount* 1 ether,"you must pay atleast 1 ETH");
        require(puckbalances[address(this)]>=amount,"not enogh cupCoks in to stock this complete purchase");
        puckbalances[address(this)] -= amount;
        puckbalances[msg.sender] += amount;
    }

    function setDapp(string memory _value)public{
        dappName = _value;
    }

    function getBalance(address _owner)public view returns(uint256){
        return balances[_owner];
    }


}
