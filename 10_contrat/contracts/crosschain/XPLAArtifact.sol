// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract XPLAArtifact is ERC721 {

    uint256 public totalSupply;
    mapping (address => bool) public isMinted;

    constructor() ERC721("XPLAArtifact", "XPLAA") {}

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        virtual
    {
        require(from == address(0) || to == address(0), "XPLAArtifact: non transferrable");
        super._beforeTokenTransfer(from, to, tokenId, 1);
    }

    function mint() public {
        require(!isMinted[msg.sender], "Already minted");
        isMinted[msg.sender] = true;
        _mint(msg.sender, totalSupply);
        totalSupply++;
    }

}