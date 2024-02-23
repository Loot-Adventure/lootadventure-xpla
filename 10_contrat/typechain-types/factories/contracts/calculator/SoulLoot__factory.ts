/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  SoulLoot,
  SoulLootInterface,
} from "../../../contracts/calculator/SoulLoot";

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
    inputs: [
      {
        internalType: "address",
        name: "nft_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data_",
        type: "bytes",
      },
    ],
    name: "calcArtifact",
    outputs: [
      {
        internalType: "uint256",
        name: "_seed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_artifactType",
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
        name: "nft_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data_",
        type: "bytes",
      },
    ],
    name: "calcEquipment",
    outputs: [
      {
        internalType: "uint256",
        name: "_seed",
        type: "uint256",
      },
      {
        internalType: "uint256[8]",
        name: "_equipmentIds",
        type: "uint256[8]",
      },
      {
        internalType: "string[8]",
        name: "_equipmentNames",
        type: "string[8]",
      },
      {
        internalType: "uint256[8]",
        name: "_equipmentRarities",
        type: "uint256[8]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nft_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data_",
        type: "bytes",
      },
    ],
    name: "calcItem",
    outputs: [
      {
        internalType: "uint256",
        name: "_seed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_itemType",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_rarity",
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
        name: "nft_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data_",
        type: "bytes",
      },
    ],
    name: "calcSoul",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
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
] as const;

const _bytecode =
  "0x6080604081815234610109577fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177590600090828252602092828452818320338452845260ff8284205416156100d1575b507f4504b9dfd7400a1522f49a8b4a100552da9236849581fd59b7363eb48c6a474c92838352828152818320338452815260ff828420541615610098575b61177e858161010f8239f35b83835282815281832090338452528120600160ff19825416179055339160008051602061188d833981519152339280a43880808061008c565b8083528284528183203384528452818320600160ff198254161790553390339060008051602061188d8339815191528580a43861004e565b600080fdfe608060408181526004918236101561001657600080fd5b600060e0918135831c90816301ffc9a714610e1b57508063205581f014610cb1578063248a9ca314610c865780632f2ff15d14610bdc57806336568abe14610b4a5780634adc7cfd146108b05780635bb5e70114610492578063759974b3146103cf57806375b238fc146103945780639103a0e01461035957806391d1485414610312578063a217fddf146102f7578063cf293e0f14610276578063d547741f146102345763e60d7e76146100ca57600080fd5b3461023157806100d936610f2d565b50855163884b889560e01b8152878101919091529290839060249082906001600160a01b03165afa9182156102255781926101fb575b5061017382936101aa9301805160a061016861015a61014c61013f61ffff95866020818351169201511690611708565b858c885101511690611708565b846060875101511690611708565b836080865101511690611708565b925101511690611708565b90600a61019d6101b561010087018051606060ff9889958387602081809751169201511690611734565b838d865101511690611734565b925101511690611734565b16029283169283036101e8576060856001866101d18787611708565b50515191600a815193808552066020840152820152f35b634e487b7160e01b815260118652602490fd5b6101aa925061021e610173913d8085833e6102168183610eef565b810190611416565b925061010f565b508351903d90823e3d90fd5b80fd5b5083833461027257806003193601126102725761026f913561026a6001610259610e8a565b93838752866020528620015461101e565b6111d1565b80f35b8280fd5b838286346102f35781602461028a36610f2d565b50865163884b889560e01b81529485015283919082906001600160a01b03165afa9182156102e85780926102cd575b505051516003825191808352166020820152f35b6102e192503d8091833e6102168183610eef565b82806102b9565b8351903d90823e3d90fd5b5080fd5b5082346102f357816003193601126102f35751908152602090f35b508284346102725781600319360112610272578160209360ff92610334610e8a565b903582528186528282206001600160a01b039091168252855220549151911615158152f35b5082346102f357816003193601126102f357602090517f4504b9dfd7400a1522f49a8b4a100552da9236849581fd59b7363eb48c6a474c8152f35b5082346102f357816003193601126102f357602090517fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c217758152f35b50828434610272578260246103e336610f2d565b50855163884b889560e01b81529485015283919082906001600160a01b03165afa92831561048757809361046a575b50508151519161ffff80602083015116928181840151168260608501511691836080860151169360c08160a0880151169601511695815197885260208801528601526060850152608084015260a083015260c0820152f35b61047f9293503d8091833e6102168183610eef565b908380610412565b8251903d90823e3d90fd5b50839034610231576104a336610f2d565b50939085516104b181610ea0565b610100809136903786516104c481610ea0565b845b8281106108a257505086516104da81610ea0565b369037855163884b889560e01b8152848101869052602493916001600160a01b031682828681845afa91821561089857839261087c575b508151519088519061052282610ea0565b61012098898501518352610140976102008987015196602097888701528d6101608201519087015261018081015160608701526101a081015160808701526101c081015160a08701526101e081015160c08701520151888501528b51996105888b610ea0565b8c51639e41b73f60e01b815281810184905288818481885afa9081156107d6578991610862575b508b528c516377b403ad60e11b815281810184905288818481885afa9081156107d6578991610848575b508b8801528c51639720c96960e01b815281810184905288818481885afa9081156107d657899161082e575b508b8e01528c51639bdc1b6960e01b815281810184905288818481885afa9081156107d6578991610814575b5060608c01528c51630e99990d60e01b815281810184905288818481885afa9081156107d65789916107fa575b5060808c01528c51636a3f934f60e11b815281810184905288818481885afa9081156107d65789916107e0575b5060a08c01528c51630ce4135560e31b815281810184905288818481885afa9081156107d65790899493929185916107bc575b5060c08d01528d51948593849263c08a5dd560e01b84528301525afa9081156107b2578591610790575b50858896959601528851986106fc8a610ea0565b60018095818c5281868d015281838d01528160608d01528160808d01528160a08d01528160c08d01528b0152519761074061024092838b01948b52858b0190610fae565b88015290610340870195935b60088110610767578780886107638983018d610fae565b0390f35b909192828061078383979961023f198c82030188528a51610ff9565b980195940192910161074c565b6107ac91503d8087833e6107a48183610eef565b8101906116a6565b8a6106e8565b8a513d87823e3d90fd5b6107d091503d8087833e6107a48183610eef565b8f6106be565b8e513d8b823e3d90fd5b6107f491503d808b833e6107a48183610eef565b8e61068b565b61080e91503d808b833e6107a48183610eef565b8e61065e565b61082891503d808b833e6107a48183610eef565b8e610631565b61084291503d808b833e6107a48183610eef565b8e610605565b61085c91503d808b833e6107a48183610eef565b8e6105d9565b61087691503d808b833e6107a48183610eef565b8e6105af565b6108919192503d8085833e6102168183610eef565b9088610511565b88513d85823e3d90fd5b6060828201526020016104c6565b508383346102725760209081600319360112610b46576108ce610e6f565b917fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177593848652858252828620338752825260ff83872054161561097f57508385528481528185206001600160a01b039093168086529281528185205460ff1615610936578480f35b83855284815281852083865290528320805460ff1916600117905533917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8480a4818080808480f35b82858761098b3361126c565b9183519061099882610ed3565b60428252868201926060368537825115610b335760308453825190600191821015610b205790607860218501536041915b818311610ab557505050610a74576048610a47938593610a5693610a70975196879376020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b8c860152610a1e8c8251928391603789019101610fd6565b8401917001034b99036b4b9b9b4b733903937b6329607d1b603784015251809386840190610fd6565b01036028810185520183610eef565b5193849362461bcd60e51b85528401526024830190610ff9565b0390fd5b606485878087519262461bcd60e51b845283015260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b909192600f81166010811015610b0d576f181899199a1a9b1b9c1cb0b131b232b360811b901a610ae58587611245565b53881c928015610afa576000190191906109c9565b634e487b7160e01b825260118952602482fd5b634e487b7160e01b835260328a52602483fd5b634e487b7160e01b815260328852602490fd5b634e487b7160e01b815260328752602490fd5b8380fd5b838286346102f357826003193601126102f357610b65610e8a565b90336001600160a01b03831603610b81579061026f91356111d1565b608490602085519162461bcd60e51b8352820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152fd5b508284346102725781600319360112610272573590610bf9610e8a565b9082845283602052610c106001828620015461101e565b82845260208481528185206001600160a01b039093168086529290528084205460ff1615610c3c578380f35b828452836020528084208285526020528320600160ff1982541617905533917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8480a48180808380f35b5082843461027257602036600319011261027257816020936001923581528085522001549051908152f35b508383346102725760209081600319360112610b4657610ccf610e6f565b917f4504b9dfd7400a1522f49a8b4a100552da9236849581fd59b7363eb48c6a474c93848652858252828620338752825260ff838720541615610d3757508385528481528185206001600160a01b039093168086529281528185205460ff1615610936578480f35b828587610d433361126c565b91835190610d5082610ed3565b60428252868201926060368537825115610b335760308453825190600191821015610b205790607860218501536041915b818311610dd657505050610a74576048610a47938593610a5693610a70975196879376020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b8c860152610a1e8c8251928391603789019101610fd6565b909192600f81166010811015610b0d576f181899199a1a9b1b9c1cb0b131b232b360811b901a610e068587611245565b53881c928015610afa57600019019190610d81565b90508434610272576020366003190112610272573563ffffffff60e01b81168091036102725760209250637965db0b60e01b8114908115610e5e575b5015158152f35b6301ffc9a760e01b14905083610e57565b600435906001600160a01b0382168203610e8557565b600080fd5b602435906001600160a01b0382168203610e8557565b610100810190811067ffffffffffffffff821117610ebd57604052565b634e487b7160e01b600052604160045260246000fd5b6080810190811067ffffffffffffffff821117610ebd57604052565b90601f8019910116810190811067ffffffffffffffff821117610ebd57604052565b67ffffffffffffffff8111610ebd57601f01601f191660200190565b6060600319820112610e85576004356001600160a01b0381168103610e8557916024359160443567ffffffffffffffff8111610e855781602382011215610e8557806004013590610f7d82610f11565b92610f8b6040519485610eef565b82845260248383010111610e855781600092602460209301838601378301015290565b6000915b60088310610fbf57505050565b600190825181526020809101920192019190610fb2565b60005b838110610fe95750506000910152565b8181015183820152602001610fd9565b9060209161101281518092818552858086019101610fd6565b601f01601f1916010190565b600090808252602090828252604092838120338252835260ff8482205416156110475750505050565b6110503361126c565b9184519061105d82610ed3565b604282528482019260603685378251156111bd57603084538251906001918210156111bd5790607860218501536041915b81831161114f5750505061110d576048610a709386936110f1936110e2985198899376020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b8a860152610a1e815180928c603789019101610fd6565b01036028810187520185610eef565b5192839262461bcd60e51b845260048401526024830190610ff9565b60648486519062461bcd60e51b825280600483015260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b909192600f811660108110156111a9576f181899199a1a9b1b9c1cb0b131b232b360811b901a61117f8587611245565b5360041c9280156111955760001901919061108e565b634e487b7160e01b82526011600452602482fd5b634e487b7160e01b83526032600452602483fd5b634e487b7160e01b81526032600452602490fd5b9060009180835282602052604083209160018060a01b03169182845260205260ff60408420541661120157505050565b80835282602052604083208284526020526040832060ff1981541690557ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b339380a4565b908151811015611256570160200190565b634e487b7160e01b600052603260045260246000fd5b604051906060820182811067ffffffffffffffff821117610ebd57604052602a82526020820160403682378251156112565760309053815160019081101561125657607860218401536029905b80821161130d5750506112c95790565b606460405162461bcd60e51b815260206004820152602060248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b9091600f81166010811015611366576f181899199a1a9b1b9c1cb0b131b232b360811b901a61133c8486611245565b5360041c9180156113515760001901906112b9565b60246000634e487b7160e01b81526011600452fd5b60246000634e487b7160e01b81526032600452fd5b67ffffffffffffffff8111610ebd5760051b60200190565b519060ff82168203610e8557565b81601f82011215610e85578051916113b88361137b565b926113c66040519485610eef565b808452602092838086019260051b820101928311610e85578301905b8282106113f0575050505090565b8380916113fc84611393565b8152019101906113e2565b519061ffff82168203610e8557565b9060208083830312610e8557825167ffffffffffffffff93848211610e8557019061034082840312610e85576040928351946102409384870187811083821117610ebd578087528151838111610e8557820190606082860312610e85576102a090818a0181811086821117610ebd5789528251815286830151858111610e8557866114a29185016113a1565b9261026093848c01528981015190868211610e85576114c3918891016113a1565b9061028091828c01528a526114d9878501611407565b878b01526114e8898501611407565b898b01526114f860608501611407565b60608b015261150960808501611407565b60808b015261151a60a08501611407565b60a08b015261152b60c08501611407565b60c08b01528560ff85011215610e855788519260c0840184811087821117610ebd578a5283986101a0948587019a898c11610e85578a60e08901915b8d831061168e5750505060e08d0152876101bf87011215610e85578a519960808b018b811089821117610ebd578c528a6102209b8c8901928b8411610e85578f908d90925b85841061167357505061010091500152516101208d01528501516101408c01528401516101608b01528301516101808a0152820151908801526102c08101516101c08801526102e08101516101e0880152610300810151610200880152610320810151918211610e85570181601f82011215610e855780519061163a6116318361137b565b96519687610eef565b818652838087019260051b820101928311610e85578301905b828210611664575050505082015290565b81518152908301908301611653565b81925061167f84611393565b8152019101908f908d906115ac565b819061169984611407565b8152019101908b90611567565b602081830312610e855780519067ffffffffffffffff8211610e85570181601f82011215610e855780516116d981610f11565b926116e76040519485610eef565b81845260208284010111610e85576117059160208085019101610fd6565b90565b91909161ffff8080941691160191821161171e57565b634e487b7160e01b600052601160045260246000fd5b9060ff8091169116019060ff821161171e5756fea26469706673582212209d3ad2f55274dc3b27e33b4f8f6f75bf10fd47d27e3ea0282581ae9ffeebd11064736f6c634300081300332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d";

type SoulLootConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SoulLootConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SoulLoot__factory extends ContractFactory {
  constructor(...args: SoulLootConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SoulLoot> {
    return super.deploy(overrides || {}) as Promise<SoulLoot>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SoulLoot {
    return super.attach(address) as SoulLoot;
  }
  override connect(signer: Signer): SoulLoot__factory {
    return super.connect(signer) as SoulLoot__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SoulLootInterface {
    return new utils.Interface(_abi) as SoulLootInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SoulLoot {
    return new Contract(address, _abi, signerOrProvider) as SoulLoot;
  }
}
