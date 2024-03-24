/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { LaCoin, LaCoinInterface } from "../../../contracts/token/LaCoin";

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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
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
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "to_",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "source_",
        type: "string",
      },
    ],
    name: "burnCoin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "to_",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "source_",
        type: "string",
      },
    ],
    name: "getCoin",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
        name: "from_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "source_",
        type: "string",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "source_",
        type: "string",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    name: "setDeveloperRole",
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
    name: "setTransferRockFalce",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "setTransferRockTrue",
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
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608034620004cf576001600160401b039060409080820183811182821017620004b957825260128152602090712637b7ba20b23b32b73a3ab9329021b7b4b760711b8282015282519383850185811082821117620004b95784526004908186526306c6158560e41b848701528251818111620004a4576003908154906001958683811c9316801562000499575b8884101462000484578190601f938481116200042e575b508890848311600114620003c757600092620003bb575b505060001982851b1c191690861b1782555b8751928311620003a65783548581811c911680156200039b575b8782101462000386578181116200033b575b5085908311600114620002cf57829394959697600093620002c3575b505082851b92600019911b1c19161790555b60ff1990808260065416176006557f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a692836000526005938482528560002033600052825260ff8660002054161562000287575b507f4504b9dfd7400a1522f49a8b4a100552da9236849581fd59b7363eb48c6a474c806000528482528560002033600052825260ff866000205416156200024b575b507fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177593846000528082528560002033600052825260ff866000205416156200020d575b855161179f9081620004d58239f35b8460005281528460002090336000525283600020918254161790553390339060008051602062001c74833981519152600080a43880808080620001fe565b80600052848252856000203360005282528560002083858254161790553390339060008051602062001c74833981519152600080a438620001bb565b80600052848252856000203360005282528560002083858254161790553390339060008051602062001c74833981519152600080a43862000179565b01519150388062000114565b90601f1983169184600052866000209260005b81811062000325575098848798999a979697106200030a575b50505050811b01905562000126565b01519060f884600019921b161c1916905538808080620002fb565b8a830151855593870193918801918801620002e2565b84600052866000208280860160051c8201928987106200037c575b0160051c019086905b8281106200036f575050620000f8565b600081550186906200035f565b9250819262000356565b602285634e487b7160e01b6000525260246000fd5b90607f1690620000e6565b604184634e487b7160e01b6000525260246000fd5b015190503880620000ba565b90889350601f19831691866000528a6000209260005b8c828210620004175750508411620003fe575b505050811b018255620000cc565b015160001983871b60f8161c19169055388080620003f0565b8385015186558c97909501949384019301620003dd565b90915084600052886000208480850160051c8201928b86106200047a575b918a91869594930160051c01915b8281106200046a575050620000a3565b600081558594508a91016200045a565b925081926200044c565b602286634e487b7160e01b6000525260246000fd5b92607f16926200008c565b604183634e487b7160e01b6000525260246000fd5b634e487b7160e01b600052604160045260246000fd5b600080fdfe608060408181526004918236101561001657600080fd5b600092833560e01c91826301ffc9a714610e615750816306fdde0314610d6c578163095ea7b314610d4257816315f570dc14610bf557816318160ddd14610bd6578163205581f014610b6657816323b872dd14610a9c578163248a9ca314610a715781632f2ff15d14610a0f578163313ce567146109f357816336568abe14610961578163381368c01461093857816339509351146108e857816370a08231146108b157816375b238fc146108765781639103a0e01461083b57816391d14854146107f4578163945d12291461073957816395d89b411461061e578163a217fddf14610603578163a457c2d71461055e578163a9059cbb1461052d578163d3fc986414610240578163d539139314610205578163d547741f146101c257508063dc6feecc146101995763dd62ed3e1461014e57600080fd5b346101955780600319360112610195578060209261016a610efc565b610172610f17565b6001600160a01b0391821683526001865283832091168252845220549051908152f35b5080fd5b82346101bf57806003193601126101bf576101b261100a565b60ff196006541660065580f35b80fd5b919050346102015780600319360112610201576101fe91356101f960016101e7610f17565b938387526005602052862001546111f8565b611303565b80f35b8280fd5b505034610195578160031936011261019557602090517f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a68152f35b839150346101955761025136610f81565b90927f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a680865260209060058252878720338852825260ff88882054161561036557506001600160a01b03841691821561032457509561031e9291867fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef7fb1982cf70d681c270404fe4902b705912301b15b84fa41f9b74d64baa3fd904298996102fc89600254611379565b6002558383528281528483208981540190558451898152a35193849384611742565b0390a180f35b60649188519162461bcd60e51b8352820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152fd5b8783918861037233611633565b9183519061037f82610f2d565b6042825286820192606036853782511561051a57603084538251906001918210156105075790607860218501536041915b81831161049c5750505061045b57604861042e93859361043d93610457975196879376020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b8c8601526104058c8251928391603789019101610eb4565b8401917001034b99036b4b9b9b4b733903937b6329607d1b603784015251809386840190610eb4565b01036028810185520183610f5f565b5193849362461bcd60e51b85528401526024830190610ed7565b0390fd5b606485878087519262461bcd60e51b845283015260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b909192600f811660108110156104f4576f181899199a1a9b1b9c1cb0b131b232b360811b901a6104cc858761160c565b53881c9280156104e1576000190191906103b0565b634e487b7160e01b825260118952602482fd5b634e487b7160e01b835260328a52602483fd5b634e487b7160e01b815260328852602490fd5b634e487b7160e01b815260328752602490fd5b50503461019557806003193601126101955760209061055761054d610efc565b602435903361139c565b5160018152f35b905082346101bf57826003193601126101bf57610579610efc565b918360243592338152600160205281812060018060a01b03861682526020522054908282106105b257602085610557858503873361150a565b608490602086519162461bcd60e51b8352820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152fd5b50503461019557816003193601126101955751908152602090f35b8284346101bf57806003193601126101bf5781519181845492600184811c9181861695861561072f575b602096878510811461071c579087899a92868b999a9b5291826000146106f2575050600114610697575b858861069389610684848a0385610f5f565b51928284938452830190610ed7565b0390f35b815286935091907f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5b8284106106da575050508201018161068461069388610672565b8054848a0186015288955087949093019281016106c0565b60ff19168882015294151560051b8701909401945085935061068492506106939150899050610672565b634e487b7160e01b835260228a52602483fd5b92607f1692610648565b50503461019557602036600319011261019557610754610efc565b61075c61100a565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a69182845260056020528084209160018060a01b03169182855260205260ff8185205416156107a9578380f35b82845260056020528084208285526020528320600160ff1982541617905533917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8480a43880808380f35b9050346102015781600319360112610201578160209360ff92610815610f17565b90358252600586528282206001600160a01b039091168252855220549151911615158152f35b505034610195578160031936011261019557602090517f4504b9dfd7400a1522f49a8b4a100552da9236849581fd59b7363eb48c6a474c8152f35b505034610195578160031936011261019557602090517fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c217758152f35b5050346101955760203660031901126101955760209181906001600160a01b036108d9610efc565b16815280845220549051908152f35b50503461019557806003193601126101955761055760209261093161090b610efc565b338352600186528483206001600160a01b03821684528652918490205460243590611379565b903361150a565b83346101bf57806003193601126101bf5761095161100a565b600160ff19600654161760065580f35b8391503461019557826003193601126101955761097c610f17565b90336001600160a01b0383160361099857906101fe9135611303565b608490602085519162461bcd60e51b8352820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152fd5b5050346101955781600319360112610195576020905160128152f35b9050346102015781600319360112610201573590610a2b610f17565b908284526005602052610a43600182862001546111f8565b828452600560209081528185206001600160a01b039093168086529290528084205460ff16156107a9578380f35b9050346102015760203660031901126102015781602093600192358152600585522001549051908152f35b8391503461019557606036600319011261019557610ab8610efc565b610ac0610f17565b91846044359460018060a01b038416815260016020528181203382526020522054906000198203610afa575b60208661055787878761139c565b848210610b235750918391610b18602096956105579503338361150a565b919394819350610aec565b606490602087519162461bcd60e51b8352820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152fd5b50503461019557602036600319011261019557610b81610efc565b610b8961100a565b7f4504b9dfd7400a1522f49a8b4a100552da9236849581fd59b7363eb48c6a474c9182845260056020528084209160018060a01b03169182855260205260ff8185205416156107a9578380f35b5050346101955781600319360112610195576020906002549051908152f35b8391503461019557610c0636610f81565b9092610c1061100a565b6001600160a01b038316908115610cf557818652856020528686205490858210610ca7575095858286829961031e96957fa258bae80719dab9076bee665c847b4513622dde3284cfade385bdc7405bc8529a5283602052038383205586600254036002557fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60208451898152a35193849384611742565b608490602089519162461bcd60e51b8352820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152fd5b608490602088519162461bcd60e51b8352820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152fd5b505034610195578060031936011261019557602090610557610d62610efc565b602435903361150a565b8284346101bf57806003193601126101bf578151918160035492600184811c91818616958615610e57575b602096878510811461071c578899509688969785829a529182600014610e30575050600114610dd4575b5050506106939291610684910385610f5f565b9190869350600383527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5b828410610e185750505082010181610684610693610dc1565b8054848a018601528895508794909301928101610dff565b60ff19168782015293151560051b8601909301935084925061068491506106939050610dc1565b92607f1692610d97565b849134610201576020366003190112610201573563ffffffff60e01b81168091036102015760209250637965db0b60e01b8114908115610ea3575b5015158152f35b6301ffc9a760e01b14905083610e9c565b60005b838110610ec75750506000910152565b8181015183820152602001610eb7565b90602091610ef081518092818552858086019101610eb4565b601f01601f1916010190565b600435906001600160a01b0382168203610f1257565b600080fd5b602435906001600160a01b0382168203610f1257565b6080810190811067ffffffffffffffff821117610f4957604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff821117610f4957604052565b6060600319820112610f12576004356001600160a01b0381168103610f1257916024359167ffffffffffffffff604435818111610f125782602382011215610f12578060040135918211610f495760405192610fe7601f8401601f191660200185610f5f565b82845260248383010111610f125781600092602460209301838601378301015290565b3360009081527f9d977511370a0aca39bae27f77b61d448e526e7cd16429212b70d98e478d5b5e602090815260408083205490927f4504b9dfd7400a1522f49a8b4a100552da9236849581fd59b7363eb48c6a474c9160ff161561106e5750505050565b61107733611633565b9184519061108482610f2d565b604282528482019260603685378251156111e457603084538251906001918210156111e45790607860218501536041915b8183116111765750505061113457604861045793869361111893611109985198899376020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b8a860152610405815180928c603789019101610eb4565b01036028810187520185610f5f565b5192839262461bcd60e51b845260048401526024830190610ed7565b60648486519062461bcd60e51b825280600483015260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b909192600f811660108110156111d0576f181899199a1a9b1b9c1cb0b131b232b360811b901a6111a6858761160c565b5360041c9280156111bc576000190191906110b5565b634e487b7160e01b82526011600452602482fd5b634e487b7160e01b83526032600452602483fd5b634e487b7160e01b81526032600452602490fd5b60009080825260209060058252604092838120338252835260ff8482205416156112225750505050565b61122b33611633565b9184519061123882610f2d565b604282528482019260603685378251156111e457603084538251906001918210156111e45790607860218501536041915b8183116112bd5750505061113457604861045793869361111893611109985198899376020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b8a860152610405815180928c603789019101610eb4565b909192600f811660108110156111d0576f181899199a1a9b1b9c1cb0b131b232b360811b901a6112ed858761160c565b5360041c9280156111bc57600019019190611269565b906000918083526005602052604083209160018060a01b03169182845260205260ff60408420541661133457505050565b8083526005602052604083208284526020526040832060ff1981541690557ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b339380a4565b9190820180921161138657565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b039081169182156114b757169182156114665760008281528060205260408120549180831061141257604082827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef958760209652828652038282205586815220818154019055604051908152a3565b60405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608490fd5b60405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608490fd5b6001600160a01b039081169182156115bb571691821561156b5760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260018252604060002085600052825280604060002055604051908152a3565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608490fd5b60405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608490fd5b90815181101561161d570160200190565b634e487b7160e01b600052603260045260246000fd5b604051906060820182811067ffffffffffffffff821117610f4957604052602a825260208201604036823782511561161d5760309053815160019081101561161d57607860218401536029905b8082116116d45750506116905790565b606460405162461bcd60e51b815260206004820152602060248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b9091600f8116601081101561172d576f181899199a1a9b1b9c1cb0b131b232b360811b901a611703848661160c565b5360041c918015611718576000190190611680565b60246000634e487b7160e01b81526011600452fd5b60246000634e487b7160e01b81526032600452fd5b611766939260609260018060a01b0316825260208201528160408201520190610ed7565b9056fea26469706673582212202b6483ee706d2e672b7fd5a2595d063cff418beed9bdd23d59ec193e979a640864736f6c634300081300332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d";

type LaCoinConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LaCoinConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LaCoin__factory extends ContractFactory {
  constructor(...args: LaCoinConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LaCoin> {
    return super.deploy(overrides || {}) as Promise<LaCoin>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LaCoin {
    return super.attach(address) as LaCoin;
  }
  override connect(signer: Signer): LaCoin__factory {
    return super.connect(signer) as LaCoin__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LaCoinInterface {
    return new utils.Interface(_abi) as LaCoinInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): LaCoin {
    return new Contract(address, _abi, signerOrProvider) as LaCoin;
  }
}
