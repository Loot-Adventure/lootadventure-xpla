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
        name: "owner",
        type: "address",
      },
      {
        components: [
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
        indexed: false,
        internalType: "struct SoulControler.Equips",
        name: "equips",
        type: "tuple",
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
    name: "MINTER_ROLE",
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
    inputs: [
      {
        internalType: "address",
        name: "eoa_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "tba_",
        type: "address",
      },
    ],
    name: "attachEquip",
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
      {
        internalType: "address",
        name: "tba_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "type_",
        type: "uint256",
      },
    ],
    name: "attachEquipInit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "eoa_",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "tokenIds_",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "tba_",
        type: "address",
      },
    ],
    name: "attachEquips",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "tokenIds_",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "tba_",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "types_",
        type: "uint256[]",
      },
    ],
    name: "attachEquipsInit",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "getCoin",
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
    inputs: [
      {
        internalType: "address",
        name: "tba_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "type_",
        type: "uint256",
      },
    ],
    name: "getIsEquip",
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
    inputs: [],
    name: "getJobNft",
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
        name: "from_",
        type: "address",
      },
    ],
    name: "seizureEquipment",
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
        internalType: "address",
        name: "ft_",
        type: "address",
      },
    ],
    name: "setCoin",
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
        internalType: "address",
        name: "nft_",
        type: "address",
      },
    ],
    name: "setJobNft",
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
    name: "setMinterRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "setNftsOffGame",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "setNftsOnGame",
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
        name: "eoa_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
    ],
    name: "withdrawEquip",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060408181523462000123577fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177590600090828252602092828452818320338452845260ff828420541615620000e9575b507f4504b9dfd7400a1522f49a8b4a100552da9236849581fd59b7363eb48c6a474c92838352828152818320338452815260ff828420541615620000ae575b600680546001600160a01b031916331790556124108581620001298239f35b83835282815281832090338452528120600160ff19825416179055339160008051602062002539833981519152339280a4388080806200008f565b8083528284528183203384528452818320600160ff1982541617905533903390600080516020620025398339815191528580a43862000050565b600080fdfe60806040908082526004908136101561001757600080fd5b600092833560e01c91826301ffc9a714611515575081630d6037ea146114d5578163205581f014611466578163248a9ca31461143b5781632762efb5146114125781632dad418c146113e05781632f2ff15d1461133657816336568abe146112a55781633b19e84a1461127c57816346460bf3146110ec5781634adc7cfd14610e3c5781634db9706c14610e13578163610d596914610dd35781636bd912ff14610d4e5781636d8ee9ed14610afd57816373ebd3ae14610ad457816375b238fc14610a9957816378792848146109c65781637bc843ce1461086257816382e46b75146108225781638b34b3d7146107f95781639005f00f1461078d5781639103a0e01461075257816391d148541461070b578163945d122914610664578163945ff5eb14610624578163a217fddf1461060957838263bd3e1446146105a6578263be59fa7c14610542578263cf2e86d6146102c257508163d539139314610299578163d547741f14610258578163dcb285f81461022f57508063f0f44260146101ec5763fcaa4f0b146101a957600080fd5b346101e85760203660031901126101e8576101c2611569565b6101ca61169c565b81546001600160a01b0319166001600160a01b039190911617905580f35b5080fd5b823461022c57602036600319011261022c57610206611569565b61020e61169c565b60018060a01b03166001600160601b0360a01b600654161760065580f35b80fd5b8390346101e857816003193601126101e85760025490516001600160a01b039091168152602090f35b905034610295578060031936011261029557610292913561028d600161027c611584565b9383875286602052862001546119cf565b611afd565b80f35b8280fd5b8390346101e857816003193601126101e857602090516000805160206123bb8339815191528152f35b9291503461053e5760209182600319360112610539576102e0611569565b6102e861169c565b6001600160a01b0381811680875260078087528588208651929791929061030e826115da565b80548252600181015490838301918252600281015490898401918252600381015490606085019182528c8a820154916080870192835260058101549160a088019283528960068301549260c08a019384520154908160e08a0152600a420691819280156000146104025750505050505050505050519688525285848120555b84610396578580f35b8060025416906006541691813b156103fe578680946103c8875198899687958694637921219560e11b86528501611e68565b03925af19081156103f557506103e1575b808080808580f35b6103ea906115b0565b61022c5780386103d9565b513d84823e3d90fd5b8680fd5b909192939495969798995060018114600014610433575050505050505050505196885252856001858220015561038d565b90919293949596979850600281146000146104625750505050505050505196885252856002858220015561038d565b9091929394959697506003811460001461048f57505050505050505196885252856003858220015561038d565b90919293949596508b81146000146104b85750505050505051968852528583858220015561038d565b90919293949550600581146000146104e15750505050505196885252856005858220015561038d565b9091929394506006811460001461050857505050505196885252856006858220015561038d565b8694509a95909194929a14610522575b505050505061038d565b938352819052868220015594503886818080610518565b505050fd5b5050fd5b9291503461053e578260031936011261053e576002546001600160a01b031691823b15610539578392602484928451958693849263090bc25560e41b845233908401525af19081156103f557506105965750f35b61059f906115b0565b61022c5780f35b8091843461053e578260031936011261053e576105c161169c565b6002546001600160a01b0316803b1561053957602484928451958693849263088c1ba760e31b845233908401525af19081156103f55750610600575080f35b610292906115b0565b8390346101e857816003193601126101e85751908152602090f35b833461022c57602036600319011261022c5761063e611569565b61064661169c565b60018060a01b03166001600160601b0360a01b600154161760015580f35b8390346101e85760203660031901126101e85761067f611569565b61068761169c565b6000805160206123bb83398151915291828452836020528084209160018060a01b03169182855260205260ff8185205416156106c1578380f35b828452836020528084208285526020528320600160ff1982541617905533917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8480a48180808380f35b919050346102955781600319360112610295578160209360ff9261072d611584565b903582528186528282206001600160a01b039091168252855220549151911615158152f35b8390346101e857816003193601126101e857602090517f4504b9dfd7400a1522f49a8b4a100552da9236849581fd59b7363eb48c6a474c8152f35b9050346102955760603660031901126102955760008051602061239b833981519152916107cf6107bb611584565b916107c4611897565b826044359135611f73565b6001600160a01b0381168452600760205281842091519182916107f3919083611f10565b0390a180f35b8390346101e857816003193601126101e85760035490516001600160a01b039091168152602090f35b833461022c57602036600319011261022c5761083c611569565b61084461169c565b60018060a01b03166001600160601b0360a01b600554161760055580f35b90503461029557806003193601126102955761087c611569565b6002548251627eeac760e11b8152338582019081526024356020808301829052966001600160a01b039094169493909290918790829081906040010381885afa9081156109bc5790879392918991610985575b50906108de6024921515611ead565b86519586938492634956fd3f60e11b84528301525afa91821561097b578592610938575b5060008051602061239b833981519152936109256107f3949360079333906120d8565b3386525280842090519182913383611f10565b9291508383813d8311610974575b6109508183611613565b81010312610970579151909160008051602061239b833981519152610902565b8480fd5b503d610946565b83513d87823e3d90fd5b8481939592503d83116109b5575b61099d8183611613565b810103126109b157518692906108de6108cf565b8780fd5b503d610993565b86513d8a823e3d90fd5b9050346102955760603660031901126102955767ffffffffffffffff918035838111610970576109f99036908301611635565b92610a02611584565b91604435918211610a9557610a1991369101611635565b610a21611897565b6001600160a01b03821690855b8551811015610a915780610a5b610a48610a8c93896120c4565b5186610a5484876120c4565b5191611f73565b838852600760205260008051602061239b833981519152610a84878a2088519182918983611f10565b0390a161209f565b610a2e565b8680f35b8580fd5b8390346101e857816003193601126101e857602090517fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c217758152f35b919050346102955782600319360112610295575490516001600160a01b03909116815260209150f35b90503461029557606036600319011261029557610b18611569565b6024803567ffffffffffffffff8111610a9557610b389036908601611635565b610b4061159a565b92610b49611897565b6002546001600160a01b0385811693911691885b8251811015610d4a576000805160206123bb8339815191528a526020908a8252888b20338c52825260ff898c2054168015610ccb575b15610c6b57610ba281856120c4565b51895190634956fd3f60e11b82528b82015282818981895afa908115610c61578c91610c2e575b50610c1992610bf482610bde6007948d611ca7565b610c1e575b8b610bee868a6120c4565b51611f73565b878d525260008051602061239b833981519152610a848a8d208b519182918c83611f10565b610b5d565b610c29818d896120d8565b610be3565b90508281813d8311610c5a575b610c458183611613565b81010312610c565751610c19610bc9565b8b80fd5b503d610c3b565b8a513d8e823e3d90fd5b885162461bcd60e51b8152808b018390526035818901527f536f756c436f6e74726f6c6572207c20596f7520617265206e6f7420746f6b65604482015274371037bbb732b91037b91029b7bab626b4b73a32b960591b6064820152608490fd5b50610d0282610cda83876120c4565b518b51627eeac760e11b815233818f0190815260208101929092529283918291604090910190565b0381895afa908115610c61578c91610d1d575b501515610b93565b90508281813d8311610d43575b610d348183611613565b81010312610c56575138610d15565b503d610d2a565b8980f35b91905034610295576020366003190112610295576101009282906001600160a01b03610d78611569565b168152600760205220805492600182015492600283015490600384015490840154916005850154936007600687015496015496815198895260208901528701526060860152608085015260a084015260c083015260e0820152f35b833461022c57602036600319011261022c57610ded611569565b610df561169c565b60018060a01b03166001600160601b0360a01b600254161760025580f35b8390346101e857816003193601126101e85760015490516001600160a01b039091168152602090f35b90503461029557602090816003193601126110e857610e59611569565b917fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177593848652858252828620338752825260ff838720541615610f0a57508385528481528185206001600160a01b039093168086529281528185205460ff1615610ec1578480f35b83855284815281852083865290528320805460ff1916600117905533917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8480a4388080808480f35b828587610f1633611b98565b91835190610f23826115f7565b604282528682019260603685378251156110d557603084538251906001918210156110c25790607860218501536041915b818311611057575050506110165783610fe66048889561100895610fd79560449a9951968793610fae8b86019b76020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b8d528251928391603789019101611ada565b8401917001034b99036b4b9b9b4b733903937b6329607d1b603784015251809386840190611ada565b01036028810185520183611613565b5195869462461bcd60e51b865285015251809281602486015285850190611ada565b601f01601f19168101030190fd5b606485878087519262461bcd60e51b845283015260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b909192600f811660108110156110af576f181899199a1a9b1b9c1cb0b131b232b360811b901a6110878587611b71565b53881c92801561109c57600019019190610f54565b634e487b7160e01b825260118952602482fd5b634e487b7160e01b835260328a52602483fd5b634e487b7160e01b815260328852602490fd5b634e487b7160e01b815260328752602490fd5b8380fd5b90503461029557606036600319011261029557611107611569565b916024359061111461159a565b6002548451627eeac760e11b8152338482019081526020818101879052939593946001600160a01b0394938516939290918690829081906040010381875afa9081156112725791839187938c91611237575b50906111756024921515611ead565b89519586938492634956fd3f60e11b84528301525afa9182156109bc5788926111f4575b5081856111cd9260008051602061239b8339815191529983836111c060079a999882611ca7565b6111e3575b505050611f73565b83168652526107f3828520925192839283611f10565b6111ec926120d8565b3883836111c5565b938093925084813d8311611230575b61120d8183611613565b810103126109b1579251919290919060008051602061239b833981519152611199565b503d611203565b93809293508491503d831161126b575b6112518183611613565b8101031261126757905185918391611175611166565b8980fd5b503d611247565b88513d8c823e3d90fd5b8390346101e857816003193601126101e85760065490516001600160a01b039091168152602090f35b8383346101e857826003193601126101e8576112bf611584565b90336001600160a01b038316036112db57906102929135611afd565b608490602085519162461bcd60e51b8352820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152fd5b919050346102955781600319360112610295573590611353611584565b908284528360205261136a600182862001546119cf565b82845260208481528185206001600160a01b039093168086529290528084205460ff1615611396578380f35b828452836020528084208285526020528320600160ff1982541617905533917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8480a43880808380f35b8390346101e857806003193601126101e857602090611409611400611569565b60243590611ca7565b90519015158152f35b8390346101e857816003193601126101e85760055490516001600160a01b039091168152602090f35b9190503461029557602036600319011261029557816020936001923581528085522001549051908152f35b8390346101e85760203660031901126101e857611481611569565b61148961169c565b7f4504b9dfd7400a1522f49a8b4a100552da9236849581fd59b7363eb48c6a474c91828452836020528084209160018060a01b03169182855260205260ff8185205416156106c1578380f35b833461022c57602036600319011261022c576114ef611569565b6114f761169c565b60018060a01b03166001600160601b0360a01b600354161760035580f35b84908434610295576020366003190112610295573563ffffffff60e01b81168091036102955760209250637965db0b60e01b8114908115611558575b5015158152f35b6301ffc9a760e01b14905083611551565b600435906001600160a01b038216820361157f57565b600080fd5b602435906001600160a01b038216820361157f57565b604435906001600160a01b038216820361157f57565b67ffffffffffffffff81116115c457604052565b634e487b7160e01b600052604160045260246000fd5b610100810190811067ffffffffffffffff8211176115c457604052565b6080810190811067ffffffffffffffff8211176115c457604052565b90601f8019910116810190811067ffffffffffffffff8211176115c457604052565b9080601f8301121561157f5781359067ffffffffffffffff82116115c4578160051b6040519360209361166a85840187611613565b8552838086019282010192831161157f578301905b82821061168d575050505090565b8135815290830190830161167f565b3360009081527fcf0e2fee954c1b210b650a2cee16f85c2d817015d3803a8d10b7d7ece2d532126020908152604080832054909291907f4504b9dfd7400a1522f49a8b4a100552da9236849581fd59b7363eb48c6a474c9060ff16156117025750505050565b61170b33611b98565b90845190611718826115f7565b6042825283820194606036873782511561188357603086538251906001918210156118835790607860218501536041915b818311611815575050506117d357846117af60486110089360449798519889916117a08984019876020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b8a52610fae815180928d603789019101611ada565b01036028810189520187611613565b5194859362461bcd60e51b8552600485015251809281602486015285850190611ada565b60648386519062461bcd60e51b825280600483015260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b909192600f8116601081101561186f576f181899199a1a9b1b9c1cb0b131b232b360811b901a6118458587611b71565b5360041c92801561185b57600019019190611749565b634e487b7160e01b82526011600452602482fd5b634e487b7160e01b83526032600452602483fd5b634e487b7160e01b81526032600452602490fd5b3360009081527f0781d7cac9c378efa22a7481e4d4d29704a680ddf504b3bc50b517700ee11e6c6020908152604080832054909291906000805160206123bb8339815191529060ff16156118eb5750505050565b6118f433611b98565b90845190611901826115f7565b6042825283820194606036873782511561188357603086538251906001918210156118835790607860218501536041915b818311611989575050506117d357846117af60486110089360449798519889916117a08984019876020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b8a52610fae815180928d603789019101611ada565b909192600f8116601081101561186f576f181899199a1a9b1b9c1cb0b131b232b360811b901a6119b98587611b71565b5360041c92801561185b57600019019190611932565b60008181526020818152604092838320338452825260ff8484205416156119f65750505050565b6119ff33611b98565b90845190611a0c826115f7565b6042825283820194606036873782511561188357603086538251906001918210156118835790607860218501536041915b818311611a94575050506117d357846117af60486110089360449798519889916117a08984019876020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b8a52610fae815180928d603789019101611ada565b909192600f8116601081101561186f576f181899199a1a9b1b9c1cb0b131b232b360811b901a611ac48587611b71565b5360041c92801561185b57600019019190611a3d565b60005b838110611aed5750506000910152565b8181015183820152602001611add565b9060009180835282602052604083209160018060a01b03169182845260205260ff604084205416611b2d57505050565b80835282602052604083208284526020526040832060ff1981541690557ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b339380a4565b908151811015611b82570160200190565b634e487b7160e01b600052603260045260246000fd5b604051906060820182811067ffffffffffffffff8211176115c457604052602a8252602082016040368237825115611b8257603090538151600190811015611b8257607860218401536029905b808211611c39575050611bf55790565b606460405162461bcd60e51b815260206004820152602060248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b9091600f81166010811015611c92576f181899199a1a9b1b9c1cb0b131b232b360811b901a611c688486611b71565b5360041c918015611c7d576000190190611be5565b60246000634e487b7160e01b81526011600452fd5b60246000634e487b7160e01b81526032600452fd5b811580611e47575b15611cbb575050600190565b60019182811480611e24575b15611cd157505090565b6002811480611e00575b15611ce557505090565b6003811480611ddc575b15611cf957505090565b6004811480611db8575b15611d0d57505090565b6005811480611d94575b15611d2157505090565b6006811480611d70575b15611d3557505090565b6007149081611d4d575b50611d4a5750600090565b90565b905060018060a01b03166000526007602052600760406000200154151538611d3f565b506001600160a01b0382166000908152600760205260409020600601541515611d2b565b506001600160a01b0382166000908152600760205260409020600501541515611d17565b506001600160a01b0382166000908152600760205260409020600401541515611d03565b506001600160a01b0382166000908152600760205260409020600301541515611cef565b506001600160a01b0382166000908152600760205260409020600201541515611cdb565b506001600160a01b03821660009081526007602052604090208301541515611cc7565b506001600160a01b0381166000908152600760205260409020541515611caf565b6001600160a01b0391821681529116602082015260408101919091526001606082015260a060808201819052600490820152630307830360e41b60c082015260e00190565b15611eb457565b60405162461bcd60e51b815260206004820152602e60248201527f536f756c436f6e74726f6c6572207c20596f7520617265206e6f74204571756960448201526d3836b2b73a27333a1037bbb732b960911b6064820152608490fd5b6001600160a01b03909116815281546020820152600182015460408201526002820154606082015260038201546080820152600482015460a0820152600582015460c0820152600682015460e08201526007909101546101008201526101200190565b9180611f9557506001600160a01b03166000908152600760205260409020555b565b60018103611fbb57506001600160a01b0316600090815260076020526040902060010155565b60028103611fe157506001600160a01b0316600090815260076020526040902060020155565b6003810361200757506001600160a01b0316600090815260076020526040902060030155565b6004810361202d57506001600160a01b0316600090815260076020526040902060040155565b6005810361205357506001600160a01b0316600090815260076020526040902060050155565b6006810361207957506001600160a01b0316600090815260076020526040902060060155565b600714612084575050565b60018060a01b03166000526007602052600760406000200155565b60001981146120ae5760010190565b634e487b7160e01b600052601160045260246000fd5b8051821015611b825760209160051b010190565b9160018060a01b03908160025416906000838516815260076020526040812091600760405193612107856115da565b8054855260018101546020860152600281015460408601526003810154606086015260048101546080860152600581015460a0860152600681015460c0860152015460e08401528061226e575050805192600082525b831561220e5784166000526007602052600760e0604060002092805184556020810151600185015560408101516002850155606081015160038501556080810151600485015560a0810151600585015560c081015160068501550151910155803b1561157f576121e8936000809460405196879586948593637921219560e11b855260048501611e68565b03925af18015612202576121f95750565b611f93906115b0565b6040513d6000823e3d90fd5b60405162461bcd60e51b815260206004820152603260248201527f536f756c436f6e74726f6c6572207c20596f7520646f206e6f742073657420746044820152716869732045717569706d656e742d5479706560701b6064820152608490fd5b6001810361229857505060208101519280851660005260076020526000600160408220015561215d565b600281036122c35750508284166000526007602052600260406000200154926000604083015261215d565b600381036122ee5750508284166000526007602052600360406000200154926000606083015261215d565b600481036123195750508284166000526007602052600460406000200154926000608083015261215d565b60058103612345575050828416600052600760205260056040600020015492600060a08301525b61215d565b60068103612370575050828416600052600760205260066040600020015492600060c083015261215d565b909390600619016123405792604060079185871681528260205220015492600060e083015261215d56feb69dea7d9f3608a67eab97f6329ec566eb31d12cc471c53cf479fdd3531b4fb69f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6a2646970667358221220e7374ad4ec8c18f73af22f3dafc50058d36fe427b1538e6dea5ac58e705ade2964736f6c634300081300332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d";

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
