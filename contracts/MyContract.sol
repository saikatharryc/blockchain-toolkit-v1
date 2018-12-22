pragma solidity ^0.5.0;

contract MyContract {
    bytes value;

    constructor() public {
        value = "myValue";
    }

    function get() public view returns(bytes memory) {
        return value;
    }

    function set(bytes memory _value) public {
        value = _value;
    }
}