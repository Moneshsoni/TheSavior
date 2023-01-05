pragma solidity 0.8.9;
import "@openzeppelin/contracts/utils/Strings.sol";
contract Test{

    function ToString(address account)public pure returns(string memory){
        return Strings.toHexString(uint256(uint160(account)), 20);
    }
}
