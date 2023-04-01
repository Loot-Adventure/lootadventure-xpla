// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract RogueLoot is ERC721, Ownable, Pausable {
    using Counters for Counters.Counter;
    using Strings for uint256;
    using Strings for uint128;
    using Strings for uint32;
    Counters.Counter private _tokenIdCounter;

    struct AdventureRecord {
        uint256 seed;
        uint128 turn;
        uint32 hp;
        uint32 attack;
        uint32 defence;
        uint32 recovery;
        uint256 weapon;
        uint256 chestArmor;
        uint256 headArmor;
        uint256 waistArmor;
        uint256 footArmor;
        uint256 handArmor;
        uint256 necklace;
        uint256 ring;
    }
    mapping (uint256 => AdventureRecord) public tokens;

    constructor() ERC721("RogueLoot", "RLOOT") {}

    function mint(address to, AdventureRecord calldata recode) public onlyOwner {
        _tokenIdCounter.increment();
        uint256 tokenId = _tokenIdCounter.current();
        tokens[tokenId] = recode;

        _safeMint(to, tokenId);
    }

    string[] private weapons = [
        "Warhammer",
        "Quarterstaff",
        "Maul",
        "Mace",
        "Club",
        "Katana",
        "Falchion",
        "Scimitar",
        "Long Sword",
        "Short Sword",
        "Ghost Wand",
        "Grave Wand",
        "Bone Wand",
        "Wand",
        "Grimoire",
        "Chronicle",
        "Tome",
        "Book"
    ];
    
    string[] private chestArmor = [
        "Divine Robe",
        "Silk Robe",
        "Linen Robe",
        "Robe",
        "Shirt",
        "Demon Husk",
        "Dragonskin Armor",
        "Studded Leather Armor",
        "Hard Leather Armor",
        "Leather Armor",
        "Holy Chestplate",
        "Ornate Chestplate",
        "Plate Mail",
        "Chain Mail",
        "Ring Mail"
    ];
    
    string[] private headArmor = [
        "Ancient Helm",
        "Ornate Helm",
        "Great Helm",
        "Full Helm",
        "Helm",
        "Demon Crown",
        "Dragon's Crown",
        "War Cap",
        "Leather Cap",
        "Cap",
        "Crown",
        "Divine Hood",
        "Silk Hood",
        "Linen Hood",
        "Hood"
    ];
    
    string[] private waistArmor = [
        "Ornate Belt",
        "War Belt",
        "Plated Belt",
        "Mesh Belt",
        "Heavy Belt",
        "Demonhide Belt",
        "Dragonskin Belt",
        "Studded Leather Belt",
        "Hard Leather Belt",
        "Leather Belt",
        "Brightsilk Sash",
        "Silk Sash",
        "Wool Sash",
        "Linen Sash",
        "Sash"
    ];
    
    string[] private footArmor = [
        "Holy Greaves",
        "Ornate Greaves",
        "Greaves",
        "Chain Boots",
        "Heavy Boots",
        "Demonhide Boots",
        "Dragonskin Boots",
        "Studded Leather Boots",
        "Hard Leather Boots",
        "Leather Boots",
        "Divine Slippers",
        "Silk Slippers",
        "Wool Shoes",
        "Linen Shoes",
        "Shoes"
    ];
    
    string[] private handArmor = [
        "Holy Gauntlets",
        "Ornate Gauntlets",
        "Gauntlets",
        "Chain Gloves",
        "Heavy Gloves",
        "Demon's Hands",
        "Dragonskin Gloves",
        "Studded Leather Gloves",
        "Hard Leather Gloves",
        "Leather Gloves",
        "Divine Gloves",
        "Silk Gloves",
        "Wool Gloves",
        "Linen Gloves",
        "Gloves"
    ];
    
    string[] private necklaces = [
        "Necklace",
        "Amulet",
        "Pendant"
    ];
    
    string[] private rings = [
        "Gold Ring",
        "Silver Ring",
        "Bronze Ring",
        "Platinum Ring",
        "Titanium Ring"
    ];
    
    string[] private suffixes = [
        "of Power",
        "of Giants",
        "of Titans",
        "of Skill",
        "of Perfection",
        "of Brilliance",
        "of Enlightenment",
        "of Protection",
        "of Anger",
        "of Rage",
        "of Fury",
        "of Vitriol",
        "of the Fox",
        "of Detection",
        "of Reflection",
        "of the Twins"
    ];
    
    string[] private namePrefixes = [
        "Agony", "Apocalypse", "Armageddon", "Beast", "Behemoth", "Blight", "Blood", "Bramble", 
        "Brimstone", "Brood", "Carrion", "Cataclysm", "Chimeric", "Corpse", "Corruption", "Damnation", 
        "Death", "Demon", "Dire", "Dragon", "Dread", "Doom", "Dusk", "Eagle", "Empyrean", "Fate", "Foe", 
        "Gale", "Ghoul", "Gloom", "Glyph", "Golem", "Grim", "Hate", "Havoc", "Honour", "Horror", "Hypnotic", 
        "Kraken", "Loath", "Maelstrom", "Mind", "Miracle", "Morbid", "Oblivion", "Onslaught", "Pain", 
        "Pandemonium", "Phoenix", "Plague", "Rage", "Rapture", "Rune", "Skull", "Sol", "Soul", "Sorrow", 
        "Spirit", "Storm", "Tempest", "Torment", "Vengeance", "Victory", "Viper", "Vortex", "Woe", "Wrath",
        "Light's", "Shimmering"  
    ];
    
    string[] private nameSuffixes = [
        "Bane",
        "Root",
        "Bite",
        "Song",
        "Roar",
        "Grasp",
        "Instrument",
        "Glow",
        "Bender",
        "Shadow",
        "Whisper",
        "Shout",
        "Growl",
        "Tear",
        "Peak",
        "Form",
        "Sun",
        "Moon"
    ];

    function getSeed(uint256 tokenId) public view returns (string memory) {
        return tokens[tokenId].seed.toString();
    }

    function getTurn(uint256 tokenId) public view returns (string memory) {
        return tokens[tokenId].turn.toString();
    }

    function getHp(uint256 tokenId) public view returns (string memory) {
        return tokens[tokenId].hp.toString();
    }

    function getAttack(uint256 tokenId) public view returns (string memory) {
        return tokens[tokenId].attack.toString();
    }

    function getDefence(uint256 tokenId) public view returns (string memory) {
        return tokens[tokenId].defence.toString();
    }

     function getRecovery(uint256 tokenId) public view returns (string memory) {
        return tokens[tokenId].recovery.toString();
    }
    
    function getWeapon(uint256 tokenId) public view returns (string memory) {
        return pluck(tokens[tokenId].weapon, weapons);
    }
    
    function getChest(uint256 tokenId) public view returns (string memory) {
        return pluck(tokens[tokenId].chestArmor, chestArmor);
    }
    
    function getHead(uint256 tokenId) public view returns (string memory) {
        return pluck(tokens[tokenId].headArmor, headArmor);
    }
    
    function getWaist(uint256 tokenId) public view returns (string memory) {
        return pluck(tokens[tokenId].waistArmor, waistArmor);
    }

    function getFoot(uint256 tokenId) public view returns (string memory) {
        return pluck(tokens[tokenId].footArmor, footArmor);
    }
    
    function getHand(uint256 tokenId) public view returns (string memory) {
        return pluck(tokens[tokenId].handArmor, handArmor);
    }
    
    function getNeck(uint256 tokenId) public view returns (string memory) {
        return pluck(tokens[tokenId].necklace, necklaces);
    }
    
    function getRing(uint256 tokenId) public view returns (string memory) {
        return pluck(tokens[tokenId].ring, rings);
    }

    function pluck(uint256 rand, string[] memory sourceArray) public view returns (string memory) {
        if (rand == 0) {
            return "Empty";
        }
        string memory output = sourceArray[rand % sourceArray.length];
        uint256 greatness = rand % 21;
        if (greatness == 0) {
            return output;
        }
        if (greatness > 14) {
            output = string(abi.encodePacked(output, " ", suffixes[rand % suffixes.length]));
        }
        if (greatness >= 19) {
            string[2] memory name;
            name[0] = namePrefixes[rand % namePrefixes.length];
            name[1] = nameSuffixes[rand % nameSuffixes.length];
            if (greatness == 19) {
                output = string(abi.encodePacked('"', name[0], ' ', name[1], '" ', output));
            } else {
                output = string(abi.encodePacked('"', name[0], ' ', name[1], '" ', output, " +1"));
            }
        }
        return output;
    }

    function tokenURI(uint256 tokenId) override public view returns (string memory) {
        string[29] memory parts;
        parts[0] = '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 350 350"><style>.base { fill: white; font-family: serif; font-size: 14px; }</style><rect width="100%" height="100%" fill="black" /><text x="10" y="20" class="base">';

        parts[1] = getSeed(tokenId);

        parts[2] = '</text><text x="10" y="40" class="base">';

        parts[3] = getTurn(tokenId);

        parts[4] = '</text><text x="10" y="60" class="base">';

        parts[5] = getHp(tokenId);

        parts[6] = '</text><text x="10" y="80" class="base">';

        parts[7] = getAttack(tokenId);

        parts[8] = '</text><text x="10" y="100" class="base">';

        parts[9] = getDefence(tokenId);

        parts[10] = '</text><text x="10" y="120" class="base">';

        parts[11] = getRecovery(tokenId);

        parts[12] = '</text><text x="10" y="160" class="base">';

        parts[13] = getWeapon(tokenId);

        parts[14] = '</text><text x="10" y="180" class="base">';

        parts[15] = getChest(tokenId);

        parts[16] = '</text><text x="10" y="200" class="base">';

        parts[17] = getHead(tokenId);

        parts[18] = '</text><text x="10" y="220" class="base">';

        parts[19] = getWaist(tokenId);

        parts[20] = '</text><text x="10" y="240" class="base">';

        parts[21] = getFoot(tokenId);

        parts[22] = '</text><text x="10" y="260" class="base">';

        parts[23] = getHand(tokenId);

        parts[24] = '</text><text x="10" y="280" class="base">';

        parts[25] = getNeck(tokenId);

        parts[26] = '</text><text x="10" y="300" class="base">';

        parts[27] = getRing(tokenId);

        parts[28] = '</text></svg>';

        string memory output = string(abi.encodePacked(parts[0], parts[1], parts[2], parts[3], parts[4], parts[5], parts[6], parts[7], parts[8]));
        output = string(abi.encodePacked(output, parts[9], parts[10], parts[11], parts[12], parts[13], parts[14], parts[15], parts[16]));
        output = string(abi.encodePacked(output, parts[17], parts[18], parts[19], parts[20], parts[21], parts[22], parts[23], parts[24]));
        output = string(abi.encodePacked(output, parts[25], parts[26], parts[27], parts[28]));
        
        string memory json = Base64.encode(bytes(string(abi.encodePacked('{"name": "Adventure Record #', tokenId.toString(), '", "description": "Loot is randomized adventurer gear generated and stored on chain. Stats, images, and other functionality are intentionally omitted for others to interpret. Feel free to use Loot in any way you want.", "image": "data:image/svg+xml;base64,', Base64.encode(bytes(output)), '"}'))));
        output = string(abi.encodePacked('data:application/json;base64,', json));

        return output;
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }
}