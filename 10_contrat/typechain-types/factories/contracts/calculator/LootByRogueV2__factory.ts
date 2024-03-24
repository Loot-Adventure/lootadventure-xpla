/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  LootByRogueV2,
  LootByRogueV2Interface,
} from "../../../contracts/calculator/LootByRogueV2";

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
    name: "calcJob",
    outputs: [
      {
        internalType: "uint256",
        name: "_seed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_jobType",
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
  "0x6080604081815234610109577fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177590600090828252602092828452818320338452845260ff8284205416156100d1575b507f4504b9dfd7400a1522f49a8b4a100552da9236849581fd59b7363eb48c6a474c92838352828152818320338452815260ff828420541615610098575b61191a858161010f8239f35b83835282815281832090338452528120600160ff198254161790553391600080516020611a29833981519152339280a43880808061008c565b8083528284528183203384528452818320600160ff1982541617905533903390600080516020611a298339815191528580a43861004e565b600080fdfe608080604052600436101561001357600080fd5b60003560e01c90816301ffc9a714610fa857508063205581f014610e45578063248a9ca314610e1657806325ea03f414610d9d5780632f2ff15d14610cea57806336568abe14610c585780634adc7cfd146109f35780635bb5e70114610507578063759974b31461044557806375b238fc1461040a5780639103a0e0146103cf57806391d1485414610382578063a217fddf14610366578063cf293e0f1461010a5763d547741f146100c457600080fd5b34610105576040366003190112610105576101036004356100e3611011565b908060005260006020526100fe6001604060002001546111a5565b611358565b005b600080fd5b3461010557610118366110b4565b506000809160246040518095819363884b889560e01b8352600483015260018060a01b03165afa90811561035a576101e992600092610335575b506101b460e08301805160a06101a961019b61018d61017f61ffff95866020818351169201511690611879565b856040885101511690611879565b846060875101511690611879565b836080865101511690611879565b925101511690611879565b6101db6101f461010085018051606060ff988995838760208180975116920151169061188f565b83604086510151169061188f565b92510151169061188f565b1690600a820294851694850361031f5760609461021091611879565b50806102355750506002905b515190600a604051928084520660208301526040820152f35b600181036102485750506003905b61021c565b6002810361025a57505060049061021c565b60040361026a575060059061021c565b600a6102208301515111600014610284575060069061021c565b906101208101511580610312575b80610305575b806102f8575b806102eb575b806102de575b806102d1575b806102c4575b15610243576001915061021c565b50610200810151156102b6565b506101e0810151156102b0565b506101c0810151156102aa565b506101a0810151156102a4565b506101808101511561029e565b5061016081015115610298565b5061014081015115610292565b634e487b7160e01b600052601160045260246000fd5b6103539192503d806000833e61034b8183611076565b810190611587565b9083610152565b6040513d6000823e3d90fd5b3461010557600036600319011261010557602060405160008152f35b346101055760403660031901126101055761039b611011565b600435600052600060205260406000209060018060a01b0316600052602052602060ff604060002054166040519015158152f35b346101055760003660031901126101055760206040517f4504b9dfd7400a1522f49a8b4a100552da9236849581fd59b7363eb48c6a474c8152f35b346101055760003660031901126101055760206040517fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c217758152f35b34610105576000610455366110b4565b5060405163884b889560e01b815260048101919091529190829060249082906001600160a01b03165afa801561035a5760e0916000916104ec575b508051519061ffff908160208201511691806040830151168160608401511690826080850151169260c08160a0870151169501511694604051968752602087015260408601526060850152608084015260a083015260c0820152f35b61050191503d806000833e61034b8183611076565b82610490565b3461010557610515366110b4565b509060405161052381611027565b610100809136903760405161053781611027565b60005b8281106109e557505060405161054f81611027565b36903760405163884b889560e01b815260048101839052916000836024816001600160a01b0386165afa92831561035a576000936109c8575b508251516040519261059984611027565b61012085015184526101408501516020850152610160850151604085015261018085015160608501526101a085015160808501526101c085015160a08501526101e085015160c085015261020085015160e0850152604051926105fb84611027565b604051639e41b73f60e01b8152600481018290526000816024816001600160a01b0387165afa90811561035a576000916109ad575b5084526040516377b403ad60e11b8152600481018290526000816024816001600160a01b0387165afa90811561035a57600091610992575b506020850152604051639720c96960e01b8152600481018290526000816024816001600160a01b0387165afa90811561035a57600091610977575b5060408581019190915251639bdc1b6960e01b8152600481018290526000816024816001600160a01b0387165afa90811561035a5760009161095c575b506060850152604051630e99990d60e01b8152600481018290526000816024816001600160a01b0387165afa90811561035a57600091610941575b506080850152604051636a3f934f60e11b8152600481018290526000816024816001600160a01b0387165afa90811561035a57600091610926575b5060a0850152604051630ce4135560e31b815260048101829052906000826024816001600160a01b0387165afa801561035a57600092839161090c575b5060c086015260405163c08a5dd560e01b8152600481019190915291829060249082906001600160a01b03165afa90811561035a576000916108e9575b5060e0830152610872610200604051956107e987611027565b6107f76101208201516118a3565b87526108076101408201516118a3565b602088015261081a6101608201516118a3565b604088015261082d6101808201516118a3565b60608801526108406101a08201516118a3565b60808801526108536101c08201516118a3565b60a08801526108666101e08201516118a3565b60c088015201516118a3565b60e085015260405192610892610240918286019386526020860190611135565b6101208401526103408301919060005b600881106108c1575050506108bd8293610140840190611135565b0390f35b9091926020806108de60019361023f198982030187528751611180565b9501930191016108a2565b61090691503d806000833e6108fe8183611076565b810190611817565b856107d0565b61092091503d8085833e6108fe8183611076565b88610793565b61093b91503d806000833e6108fe8183611076565b87610756565b61095691503d806000833e6108fe8183611076565b8761071b565b61097191503d806000833e6108fe8183611076565b876106e0565b61098c91503d806000833e6108fe8183611076565b876106a3565b6109a791503d806000833e6108fe8183611076565b87610668565b6109c291503d806000833e6108fe8183611076565b87610630565b6109de9193503d806000833e61034b8183611076565b9183610588565b60608282015260200161053a565b346101055760208060031936011261010557610a0d610ffb565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775918260005260008152604060002033600052815260ff6040600020541615610ac757600083815280825260408082206001600160a01b0390941680835293835290205460ff1615610a7b57005b826000526000815260406000209082600052526040600020600160ff1982541617905533917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d600080a4005b9050610ad2336113dd565b91604051610adf8161105a565b60428152828101916060368437815115610c4257603083538151600190811015610c4257607860218401536041905b808211610bfe575050610bbb57610b8793610b969260489260405196879376020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b88860152610b5e815180928a60378901910161115d565b8401917001034b99036b4b9b9b4b733903937b6329607d1b60378401525180938684019061115d565b01036028810185520183611076565b610bb760405192839262461bcd60e51b845260048401526024830190611180565b0390fd5b6064836040519062461bcd60e51b825280600483015260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b9091600f81166010811015610c42576f181899199a1a9b1b9c1cb0b131b232b360811b901a610c2d84866113cc565b5360041c91801561031f576000190190610b0e565b634e487b7160e01b600052603260045260246000fd5b3461010557604036600319011261010557610c71611011565b336001600160a01b03821603610c8d5761010390600435611358565b60405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608490fd5b3461010557604036600319011261010557600435610d06611011565b816000526000602052610d206001604060002001546111a5565b81600052600060205260406000209060018060a01b0316908160005260205260ff6040600020541615610d4f57005b8160005260006020526040600020816000526020526040600020600160ff1982541617905533917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d600080a4005b34610105576000610dad366110b4565b5060405163884b889560e01b815260048101919091529190829060249082906001600160a01b03165afa801561035a57604091600091610dfb575b5051516003825191808352166020820152f35b610e1091503d806000833e61034b8183611076565b82610de8565b346101055760203660031901126101055760043560005260006020526020600160406000200154604051908152f35b346101055760208060031936011261010557610e5f610ffb565b7f4504b9dfd7400a1522f49a8b4a100552da9236849581fd59b7363eb48c6a474c918260005260008152604060002033600052815260ff6040600020541615610ecd57600083815280825260408082206001600160a01b0390941680835293835290205460ff1615610a7b57005b9050610ed8336113dd565b91604051610ee58161105a565b60428152828101916060368437815115610c4257603083538151600190811015610c4257607860218401536041905b808211610f64575050610bbb57610b8793610b969260489260405196879376020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b88860152610b5e815180928a60378901910161115d565b9091600f81166010811015610c42576f181899199a1a9b1b9c1cb0b131b232b360811b901a610f9384866113cc565b5360041c91801561031f576000190190610f14565b34610105576020366003190112610105576004359063ffffffff60e01b821680920361010557602091637965db0b60e01b8114908115610fea575b5015158152f35b6301ffc9a760e01b14905083610fe3565b600435906001600160a01b038216820361010557565b602435906001600160a01b038216820361010557565b610100810190811067ffffffffffffffff82111761104457604052565b634e487b7160e01b600052604160045260246000fd5b6080810190811067ffffffffffffffff82111761104457604052565b90601f8019910116810190811067ffffffffffffffff82111761104457604052565b67ffffffffffffffff811161104457601f01601f191660200190565b6060600319820112610105576004356001600160a01b038116810361010557916024359160443567ffffffffffffffff811161010557816023820112156101055780600401359061110482611098565b926111126040519485611076565b828452602483830101116101055781600092602460209301838601378301015290565b6000915b6008831061114657505050565b600190825181526020809101920192019190611139565b60005b8381106111705750506000910152565b8181015183820152602001611160565b906020916111998151809281855285808601910161115d565b601f01601f1916010190565b600090808252602090828252604092838120338252835260ff8482205416156111ce5750505050565b6111d7336113dd565b918451906111e48261105a565b6042825284820192606036853782511561134457603084538251906001918210156113445790607860218501536041915b8183116112d657505050611294576048610bb793869361127893611269985198899376020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b8a860152610b5e815180928c60378901910161115d565b01036028810187520185611076565b5192839262461bcd60e51b845260048401526024830190611180565b60648486519062461bcd60e51b825280600483015260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b909192600f81166010811015611330576f181899199a1a9b1b9c1cb0b131b232b360811b901a61130685876113cc565b5360041c92801561131c57600019019190611215565b634e487b7160e01b82526011600452602482fd5b634e487b7160e01b83526032600452602483fd5b634e487b7160e01b81526032600452602490fd5b9060009180835282602052604083209160018060a01b03169182845260205260ff60408420541661138857505050565b80835282602052604083208284526020526040832060ff1981541690557ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b339380a4565b908151811015610c42570160200190565b604051906060820182811067ffffffffffffffff82111761104457604052602a8252602082016040368237825115610c4257603090538151600190811015610c4257607860218401536029905b80821161147e57505061143a5790565b606460405162461bcd60e51b815260206004820152602060248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b9091600f811660108110156114d7576f181899199a1a9b1b9c1cb0b131b232b360811b901a6114ad84866113cc565b5360041c9180156114c257600019019061142a565b60246000634e487b7160e01b81526011600452fd5b60246000634e487b7160e01b81526032600452fd5b67ffffffffffffffff81116110445760051b60200190565b519060ff8216820361010557565b81601f8201121561010557805191611529836114ec565b926115376040519485611076565b808452602092838086019260051b820101928311610105578301905b828210611561575050505090565b83809161156d84611504565b815201910190611553565b519061ffff8216820361010557565b906020808383031261010557825167ffffffffffffffff938482116101055701906103408284031261010557604092835194610240938487018781108382111761104457808752815183811161010557820190606082860312610105576102a090818a018181108682111761104457895282518152868301518581116101055786611613918501611512565b9261026093848c015289810151908682116101055761163491889101611512565b9061028091828c01528a5261164a878501611578565b878b0152611659898501611578565b898b015261166960608501611578565b60608b015261167a60808501611578565b60808b015261168b60a08501611578565b60a08b015261169c60c08501611578565b60c08b01528560ff850112156101055788519260c0840184811087821117611044578a5283986101a0948587019a898c11610105578a60e08901915b8d83106117ff5750505060e08d0152876101bf87011215610105578a519960808b018b811089821117611044578c528a6102209b8c8901928b8411610105578f908d90925b8584106117e457505061010091500152516101208d01528501516101408c01528401516101608b01528301516101808a0152820151908801526102c08101516101c08801526102e08101516101e0880152610300810151610200880152610320810151918211610105570181601f82011215610105578051906117ab6117a2836114ec565b96519687611076565b818652838087019260051b820101928311610105578301905b8282106117d5575050505082015290565b815181529083019083016117c4565b8192506117f084611504565b8152019101908f908d9061171d565b819061180a84611578565b8152019101908b906116d8565b6020818303126101055780519067ffffffffffffffff8211610105570181601f8201121561010557805161184a81611098565b926118586040519485611076565b8184526020828401011161010557611876916020808501910161115d565b90565b91909161ffff8080941691160191821161031f57565b9060ff8091169116019060ff821161031f57565b600090806118af575090565b6001915060159006601381036118c6575050600390565b60138111156118d6575050600490565b600e1015611876575060029056fea264697066735822122080f333233854de6faa391493832e5b1d88af0b82bbb1f92e21b55cf4e61bacbf64736f6c634300081300332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d";

type LootByRogueV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LootByRogueV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LootByRogueV2__factory extends ContractFactory {
  constructor(...args: LootByRogueV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LootByRogueV2> {
    return super.deploy(overrides || {}) as Promise<LootByRogueV2>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LootByRogueV2 {
    return super.attach(address) as LootByRogueV2;
  }
  override connect(signer: Signer): LootByRogueV2__factory {
    return super.connect(signer) as LootByRogueV2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LootByRogueV2Interface {
    return new utils.Interface(_abi) as LootByRogueV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LootByRogueV2 {
    return new Contract(address, _abi, signerOrProvider) as LootByRogueV2;
  }
}
