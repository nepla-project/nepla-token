// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Nepla is ERC20 {

  constructor(string memory _name, string memory _symbol, uint256 _initialSupply, address _genesisAddress) ERC20(_name, _symbol) {
    _mint(_genesisAddress, _initialSupply);
  }
}