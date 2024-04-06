// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract XPLAArtifact is ERC721 {

    uint256 public totalSupply;
    mapping (address => bool) public isMinted;

    constructor() ERC721("XPLAArtifact", "XPLAA") {}

    function mint() public {
        require(!isMinted[msg.sender], "Already minted");
        isMinted[msg.sender] = true;
        _mint(msg.sender, totalSupply);
        totalSupply++;
    }

}