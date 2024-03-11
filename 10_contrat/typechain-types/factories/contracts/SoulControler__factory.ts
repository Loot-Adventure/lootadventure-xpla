/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  SoulControler,
  SoulControlerInterface,
} from "../../contracts/SoulControler";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "onwer_",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weapon",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cheastArmor",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "headArmor",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "waistArmor",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "footArmor",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "handArmor",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "necklace",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ring",
        type: "uint256",
      },
    ],
    name: "UpdateEquips",
    type: "event",
  },
  {
    inputs: [],
    name: "ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEVELOPER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getArtifactNft",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEquipmentNft",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
    ],
    name: "getEquips",
    outputs: [
      {
        internalType: "uint256",
        name: "weapon",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "cheastArmor",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "headArmor",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "waistArmor",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "footArmor",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "handArmor",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "necklace",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ring",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getItemNft",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSoulLoot",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTreasury",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getXp",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "granted_",
        type: "address",
      },
    ],
    name: "setAdminRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nft_",
        type: "address",
      },
    ],
    name: "setArtifactNft",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
    ],
    name: "setChestArmor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "granted_",
        type: "address",
      },
    ],
    name: "setDeveloperRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nft_",
        type: "address",
      },
    ],
    name: "setEquipmentNft",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "weapon_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "chestArmor_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "headArmor_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "waistArmor_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "footArmor_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "handArmor_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "necklace_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ring_",
        type: "uint256",
      },
    ],
    name: "setEquips",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
    ],
    name: "setFootArmor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
    ],
    name: "setHandArmor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
    ],
    name: "setHeadArmor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nft_",
        type: "address",
      },
    ],
    name: "setItemNft",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
    ],
    name: "setNecklace",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "player_",
        type: "address",
      },
    ],
    name: "setNftsOnGame",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
    ],
    name: "setRing",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nft_",
        type: "address",
      },
    ],
    name: "setSoulLoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "treasury_",
        type: "address",
      },
    ],
    name: "setTreasury",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
    ],
    name: "setWaistArmor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
    ],
    name: "setWeapon",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ft_",
        type: "address",
      },
    ],
    name: "setXp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenIdEquipment_",
        type: "uint256",
      },
    ],
    name: "transferEquipment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenIdItem_",
        type: "uint256",
      },
    ],
    name: "transferItem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenIdEquipment_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenIdItem_",
        type: "uint256",
      },
    ],
    name: "transferNfts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060408181523461011e577fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177590600090828252602092828452818320338452845260ff8284205416156100e5575b507f4504b9dfd7400a1522f49a8b4a100552da9236849581fd59b7363eb48c6a474c92838352828152818320338452815260ff8284205416156100ab575b600680546001600160a01b03191633179055611e368581620001248239f35b83835282815281832090338452528120600160ff19825416179055339160008051602062001f5a833981519152339280a43880808061008c565b8083528284528183203384528452818320600160ff198254161790553390339060008051602062001f5a8339815191528580a43861004e565b600080fdfe60806040908082526004918236101561001757600080fd5b60009260e08435811c93846301ffc9a71461133b575083630487c898146112945784846305cfee08146111dd575083630d6037ea1461119c578363205581f01461112857836323a132f614611073578363248a9ca3146110485783632f2ff15d14610f9657836336568abe14610f045783633b19e84a14610edb5783633c1acaf114610e2557836349da562d14610d765783634adc7cfd14610abb5783634b82ba0d14610a055783634db9706c146109dc5783635e8dc9b1146109b3578363610d5969146109735784846367c65e9914610910575083636bd912ff1461088d57836375b238fc146108525783638690c916146107a257836389047273146106ed5783638b34b3d7146106c45783639103a0e014610689578363918d1c011461066057836391d148541461061a578363945ff5eb146105da57836394d381861461059a578484639a124d9914610537575083639c4416b214610487578363a217fddf1461046c57848463a9b8ec1f1461037057508363c278f994146102b857508263d547741f1461027757508163dcb285f81461024a57508063f0f442601461020a5763fe15f4b3146101c857600080fd5b34610207576020366003190112610207576101e161138f565b6101e96113c0565b60018060a01b03166001600160601b0360a01b600354161760035580f35b80fd5b50346102075760203660031901126102075761022461138f565b61022c6113c0565b60018060a01b03166001600160601b0360a01b600654161760065580f35b90503461027357816003193601126102735760025490516001600160a01b039091168152602090f35b5080fd5b9150346102b457806003193601126102b4576102b191356102ac600161029b6113aa565b9383875286602052862001546115bb565b61176e565b80f35b8280fd5b92503461036c57602036600319011261036c57610366600080516020611de18339815191529382356102f48160018060a01b0360025416611c67565b3387526007602052848720855161030a81611713565b8154958682526001830154602083015260028301549788818401526003840154918260608501528401549283608082015260076005860154958660a0840152600681015460c0840152015496879101525197878998338a611918565b0390a180f35b8380fd5b808385346104685760603660031901126104685761038c61138f565b6103946113c0565b6002546006546001600160a01b0390811692918116803b156104425786855180928183816103d48c637921219560e11b9b8c84528b602435928501611d9b565b03925af1801561045e57908791610446575b50508060035416906006541691813b15610442578680946104168751988996879586948552604435928501611d9b565b03925af190811561043957506104295750f35b610432906116e9565b6102075780f35b513d84823e3d90fd5b8680fd5b61044f906116e9565b61045a5785886103e6565b8580fd5b85513d89823e3d90fd5b5050fd5b84833461027357816003193601126102735751908152602090f35b92503461036c57602036600319011261036c57610366600080516020611de1833981519152938235906104c48260018060a01b0360025416611d01565b33875260076020528487209085516104db81611713565b825495868252600184015460208301526002840154978881840152600385015491826060850152850154928360808201526005860154948560a083015260076006880154978860c085015201549101525197889786338a611918565b8083853461046857806003193601126104685761055261138f565b61055a6113c0565b6002546006546001600160a01b03908116949116803b1561045a5761041694868094865197889586948593637921219560e11b8552602435928501611d9b565b8434610207576020366003190112610207576105b461138f565b6105bc6113c0565b60018060a01b03166001600160601b0360a01b600554161760055580f35b8434610207576020366003190112610207576105f461138f565b6105fc6113c0565b60018060a01b03166001600160601b0360a01b600154161760015580f35b848383346102b457816003193601126102b457816020936106396113aa565b92358152808552209060018060a01b0316600052825260ff81600020541690519015158152f35b84833461027357816003193601126102735760035490516001600160a01b039091168152602090f35b848334610273578160031936011261027357602090517f4504b9dfd7400a1522f49a8b4a100552da9236849581fd59b7363eb48c6a474c8152f35b848383346102b457826003193601126102b4575490516001600160a01b03909116815260209150f35b92503461036c57602036600319011261036c57600254600080516020611de1833981519152938235936103669261072e9086906001600160a01b03166119ff565b33875260076020528087209080519061074682611713565b82549586835260018401546020840152600284015482840152600384015490816060850152840154918260808501526005850154938460a082015260076006870154968760c0840152015496879101525197878998338a611918565b92503461036c57602036600319011261036c57610366600080516020611de18339815191529382356107de8160018060a01b0360025416611b33565b3387526007602052848720908551906107f682611713565b82549586835260018401546020840152600284015497888185015260038501549182606086015285015460808501526005850154938460a082015260076006870154968760c0840152015496879101525197878998338a611918565b848334610273578160031936011261027357602090517fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c217758152f35b8493503461036c57602036600319011261036c576101009383906001600160a01b036108b761138f565b1681526007602052208054936001820154936002830154906003840154908401549160058501549360076006870154960154978151998a5260208a01528801526060870152608086015260a085015260c0840152820152f35b8083853461046857806003193601126104685761092b61138f565b6109336113c0565b6003546006546001600160a01b03908116949116803b1561045a5761041694868094865197889586948593637921219560e11b8552602435928501611d9b565b84346102075760203660031901126102075761098d61138f565b6109956113c0565b60018060a01b03166001600160601b0360a01b600254161760025580f35b84833461027357816003193601126102735760055490516001600160a01b039091168152602090f35b84833461027357816003193601126102735760015490516001600160a01b039091168152602090f35b9250903461036c57602036600319011261036c57600254600080516020611de18339815191529383359261036692610a479085906001600160a01b0316611a99565b338752600760205280872090805190610a5f82611713565b82549586835260018401546020840152600284015497888385015260038501546060850152840154918260808501526005850154938460a082015260076006870154968760c0840152015496879101525197878998338a611918565b509150346102b4576020908160031936011261036c57610ad961138f565b917fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c217759384600052600082528260002033600052825260ff83600020541615610b97575060008481528082528281206001600160a01b039094168082529382528290205460ff1615610b48578480f35b836000526000815281600020908360005252600020600160ff1982541617905533917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d600080a4388080808480f35b8285610ba233611809565b908251610bae81611730565b60428152858101916060368437815115610d6157603083538151600190811015610d4c57607860218401536041905b808211610cdf575050610c9e5783610c6e60488895610c9095610c5f9560449a9951968793610c368b86019b76020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b8d5282519283916037890191016116c6565b8401917001034b99036b4b9b9b4b733903937b6329607d1b6037840152518093868401906116c6565b0103602881018552018361174c565b5195869462461bcd60e51b8652850152518092816024860152858501906116c6565b601f01601f19168101030190fd5b606485878087519262461bcd60e51b845283015260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b9091600f81166010811015610d37576f181899199a1a9b1b9c1cb0b131b232b360811b901a610d0e84866117e2565b53871c918015610d22576000190190610bdd565b601188634e487b7160e01b6000525260246000fd5b603289634e487b7160e01b6000525260246000fd5b603287634e487b7160e01b6000525260246000fd5b603286634e487b7160e01b6000525260246000fd5b92503461036c57602036600319011261036c57610366600080516020611de1833981519152938235610db28160018060a01b0360025416611bcd565b3387526007602052848720908551610dc981611713565b82549586825260018401546020830152600284015497888184015260038501549182606085015285015492836080820152600586015460a082015260076006870154968760c0840152015496879101525197878998338a611918565b9250903461036c57602036600319011261036c57600254600080516020611de18339815191529383359261036692610e679085906001600160a01b031661195c565b338752600760205280872090805190610e7f82611713565b82548252600183015460208301526002830154968782840152600384015490816060850152840154918260808501526005850154938460a082015260076006870154968760c0840152015496879101525197878998338a611918565b84833461027357816003193601126102735760065490516001600160a01b039091168152602090f35b50839034610273578260031936011261027357610f1f6113aa565b90336001600160a01b03831603610f3b57906102b1913561176e565b608490602085519162461bcd60e51b8352820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152fd5b848383346102b457816003193601126102b4573590610fb36113aa565b9082845283602052610fca600182862001546115bb565b600083815260208181528282206001600160a01b039094168083529390528190205460ff1615610ff8578380f35b8260005260006020528060002082600052602052600020600160ff1982541617905533917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d600080a48180808380f35b848383346102b45760203660031901126102b457816020936001923581528085522001549051908152f35b92503461036c57602036600319011261036c57600254600080516020611de183398151915293823593610366926110b49086906001600160a01b031661195c565b3387526007602052808720908051906110cc82611713565b8254958683526001840154602084015260028401548083850152600385015491826060860152850154928360808601526005860154948560a082015260076006880154978860c08401520154978891015251988998338a611918565b8483346102735760203660031901126102735761114361138f565b61114b6113c0565b7f4504b9dfd7400a1522f49a8b4a100552da9236849581fd59b7363eb48c6a474c91826000526000602052806000209160018060a01b0316918260005260205260ff81600020541615610ff8578380f35b848234610273576020366003190112610273576111b761138f565b6111bf6113c0565b81546001600160a01b0319166001600160a01b039190911617905580f35b80838534610468576020366003190112610468576111f961138f565b6112016113c0565b6002546003546001600160a01b03918216949190811690853b1561044257869060248651809a819363090bc25560e41b9889845216998a888401525af1801561128a57611276575b859650803b1561045a578592836024928651978895869485528401525af190811561043957506104295750f35b949095611282906116e9565b938590611249565b84513d88823e3d90fd5b509150346102b4576101003660031901126102b457600080516020611de183398151915291356103666024359260443560643560843560a4359160c4359360e435956113308760018060a01b03600254166112ef8c8261195c565b6112f98d8261195c565b61130385826119ff565b61130d8682611a99565b6113178782611b33565b6113218882611bcd565b61132b8982611c67565b611d01565b51988998338a611918565b859083346102b45760203660031901126102b4573563ffffffff60e01b81168091036102b45760209250637965db0b60e01b811490811561137e575b5015158152f35b6301ffc9a760e01b14905083611377565b600435906001600160a01b03821682036113a557565b600080fd5b602435906001600160a01b03821682036113a557565b3360009081527fcf0e2fee954c1b210b650a2cee16f85c2d817015d3803a8d10b7d7ece2d532126020908152604080832054909291907f4504b9dfd7400a1522f49a8b4a100552da9236849581fd59b7363eb48c6a474c9060ff16156114265750505050565b61142f33611809565b9084519061143c82611730565b604282528382019460603687378251156115a757603086538251906001918210156115a75790607860218501536041915b818311611539575050506114f757846114d36048610c909360449798519889916114c48984019876020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b8a52610c36815180928d6037890191016116c6565b0103602881018952018761174c565b5194859362461bcd60e51b85526004850152518092816024860152858501906116c6565b60648386519062461bcd60e51b825280600483015260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b909192600f81166010811015611593576f181899199a1a9b1b9c1cb0b131b232b360811b901a61156985876117e2565b5360041c92801561157f5760001901919061146d565b634e487b7160e01b82526011600452602482fd5b634e487b7160e01b83526032600452602483fd5b634e487b7160e01b81526032600452602490fd5b60008181526020818152604092838320338452825260ff8484205416156115e25750505050565b6115eb33611809565b908451906115f882611730565b604282528382019460603687378251156115a757603086538251906001918210156115a75790607860218501536041915b818311611680575050506114f757846114d36048610c909360449798519889916114c48984019876020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b8a52610c36815180928d6037890191016116c6565b909192600f81166010811015611593576f181899199a1a9b1b9c1cb0b131b232b360811b901a6116b085876117e2565b5360041c92801561157f57600019019190611629565b60005b8381106116d95750506000910152565b81810151838201526020016116c9565b67ffffffffffffffff81116116fd57604052565b634e487b7160e01b600052604160045260246000fd5b610100810190811067ffffffffffffffff8211176116fd57604052565b6080810190811067ffffffffffffffff8211176116fd57604052565b90601f8019910116810190811067ffffffffffffffff8211176116fd57604052565b9060009180835282602052604083209160018060a01b03169182845260205260ff60408420541661179e57505050565b80835282602052604083208284526020526040832060ff1981541690557ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b339380a4565b9081518110156117f3570160200190565b634e487b7160e01b600052603260045260246000fd5b604051906060820182811067ffffffffffffffff8211176116fd57604052602a82526020820160403682378251156117f3576030905381516001908110156117f357607860218401536029905b8082116118aa5750506118665790565b606460405162461bcd60e51b815260206004820152602060248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b9091600f81166010811015611903576f181899199a1a9b1b9c1cb0b131b232b360811b901a6118d984866117e2565b5360041c9180156118ee576000190190611856565b60246000634e487b7160e01b81526011600452fd5b60246000634e487b7160e01b81526032600452fd5b95926101009794919a9998959261012088019b60018060a01b03168852602088015260408701526060860152608085015260a084015260c083015260e08201520152565b604051627eeac760e11b81523360048201526024810183905290602090829060449082906001600160a01b03165afa9081156119f3576000916119c2575b50158015906119ba575b156113a557336000526007602052604060002055565b5080156119a4565b906020823d82116119eb575b816119db6020938361174c565b810103126102075750513861199a565b3d91506119ce565b6040513d6000823e3d90fd5b604051627eeac760e11b81523360048201526024810183905290602090829060449082906001600160a01b03165afa9081156119f357600091611a68575b5015801590611a60575b156113a557336000526007602052600260406000200155565b508015611a47565b906020823d8211611a91575b81611a816020938361174c565b8101031261020757505138611a3d565b3d9150611a74565b604051627eeac760e11b81523360048201526024810183905290602090829060449082906001600160a01b03165afa9081156119f357600091611b02575b5015801590611afa575b156113a557336000526007602052600360406000200155565b508015611ae1565b906020823d8211611b2b575b81611b1b6020938361174c565b8101031261020757505138611ad7565b3d9150611b0e565b604051627eeac760e11b81523360048201526024810183905290602090829060449082906001600160a01b03165afa9081156119f357600091611b9c575b5015801590611b94575b156113a557336000526007602052600460406000200155565b508015611b7b565b906020823d8211611bc5575b81611bb56020938361174c565b8101031261020757505138611b71565b3d9150611ba8565b604051627eeac760e11b81523360048201526024810183905290602090829060449082906001600160a01b03165afa9081156119f357600091611c36575b5015801590611c2e575b156113a557336000526007602052600560406000200155565b508015611c15565b906020823d8211611c5f575b81611c4f6020938361174c565b8101031261020757505138611c0b565b3d9150611c42565b604051627eeac760e11b81523360048201526024810183905290602090829060449082906001600160a01b03165afa9081156119f357600091611cd0575b5015801590611cc8575b156113a557336000526007602052600660406000200155565b508015611caf565b906020823d8211611cf9575b81611ce96020938361174c565b8101031261020757505138611ca5565b3d9150611cdc565b604051627eeac760e11b81523360048201526024810183905290602090829060449082906001600160a01b03165afa9081156119f357600091611d6a575b5015801590611d62575b156113a557336000526007602052600760406000200155565b508015611d49565b906020823d8211611d93575b81611d836020938361174c565b8101031261020757505138611d3f565b3d9150611d76565b6001600160a01b0391821681529116602082015260408101919091526001606082015260a060808201819052600490820152630307830360e41b60c082015260e0019056feace9facd8d50e03f5c34c1031999eb84f5a16b841e90bb0d388a27e98db9abdfa2646970667358221220e45691d0e9e2fd6b64e19194e260ef519ea360001b9233c266f09c425c1955f464736f6c634300081300332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d";

type SoulControlerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SoulControlerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SoulControler__factory extends ContractFactory {
  constructor(...args: SoulControlerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SoulControler> {
    return super.deploy(overrides || {}) as Promise<SoulControler>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SoulControler {
    return super.attach(address) as SoulControler;
  }
  override connect(signer: Signer): SoulControler__factory {
    return super.connect(signer) as SoulControler__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SoulControlerInterface {
    return new utils.Interface(_abi) as SoulControlerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SoulControler {
    return new Contract(address, _abi, signerOrProvider) as SoulControler;
  }
}
