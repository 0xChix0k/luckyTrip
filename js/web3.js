const address = '0xcEdDE3382Ff839D8EEF7357C16bDF111d77a72f2';
const ABI = [
  {
    inputs: [
      { internalType: 'string', name: 'initNotRevealedUri', type: 'string' },
      { internalType: 'string', name: 'name_', type: 'string' },
      { internalType: 'string', name: 'symbol_', type: 'string' },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'approved', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'operator', type: 'address' },
      { indexed: false, internalType: 'bool', name: 'approved', type: 'bool' },
    ],
    name: 'ApprovalForAll',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'from', type: 'address' },
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '_quantity', type: 'uint256' }],
    name: 'firstMint',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getStatus',
    outputs: [
      { internalType: 'bool', name: '_first', type: 'bool' },
      { internalType: 'bool', name: '_pre', type: 'bool' },
      { internalType: 'bool', name: '_pub', type: 'bool' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getWithdrawAddress',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'owner', type: 'address' },
      { internalType: 'address', name: 'operator', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  { inputs: [], name: 'name', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
  {
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '_quantity', type: 'uint256' }],
    name: 'preMint',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '_quantity', type: 'uint256' }],
    name: 'pubMint',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  { inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  { inputs: [], name: 'revealed', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function' },
  {
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { internalType: 'bytes', name: 'data', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address[]', name: 'addresses', type: 'address[]' }],
    name: 'setAllowList',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'operator', type: 'address' },
      { internalType: 'bool', name: 'approved', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'string', name: '_newBaseURI', type: 'string' }],
    name: 'setBaseURI',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'count', type: 'uint256' }],
    name: 'setPreCount',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  { inputs: [], name: 'setReveal', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  {
    inputs: [{ internalType: 'uint8', name: '_num', type: 'uint8' }],
    name: 'setStatus',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_withdrawAddress', type: 'address' }],
    name: 'setWithdrawAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'index', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'owner', type: 'address' },
      { internalType: 'uint256', name: 'index', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  { inputs: [], name: 'withdrawAll', outputs: [], stateMutability: 'payable', type: 'function' },
];
const metamaskChainID = 1;
const metamaskHexChainID = '0x1';
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const evmChains = window.evmChains;
let web3Modal;
let contractPrice;
let contractMaxMint;
let preMintOpen;
let leafNodes;
let merkleTree;
let haveWhiteList;
let coinbase;
let myContract;
let web3;

var StringBuilder = function () {
  this._sArray = new Array();
};
StringBuilder.prototype.append = function (str) {
  this._sArray.push(str);
};
StringBuilder.prototype.toString = function () {
  return this._sArray.join('');
};

async function init() {
  // getWhiteList();
  getNFTInfo();
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        // Mikko's test key - don't copy as your mileage may vary
        infuraId: 'c780b7e9416640ac8550712b8ed6c1ac',
        bridge: 'https://bridge.walletconnect.org',
      },
    },
  };
  web3Modal = new Web3Modal({
    network: 'mainnet',
    cacheProvider: false, // optional
    providerOptions, // required
    disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
  });
  console.log('Web3Modal instance is', web3Modal);
}

//NFT資訊
async function getNFTInfo() {
  web3In = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/c780b7e9416640ac8550712b8ed6c1ac'));
  myContract = new web3In.eth.Contract(ABI, address);
  let name = await myContract.methods.name().call({ from: coinbase });
  document.getElementsByClassName('titleName')[0].textContent = name;

  // preMintOpen = await myContract.methods.getStatus().call({ from: coinbase });
  // console.log(preMintOpen);
  contractPrice = await web3In.utils.toWei('0.05', 'ether');
  document.getElementsByClassName('mint-value')[0].textContent = parseFloat(web3In.utils.fromWei(contractPrice)).toFixed(2) + 'ETH';

  let totalSupply = await myContract.methods.totalSupply().call({ from: coinbase });
  let maxTotal = '5555';
  document.getElementsByClassName('mint-total')[0].textContent = '(' + totalSupply + '/' + maxTotal + ')';

  contractMaxMint = 9999;
}

async function isConnect() {
  connected = document.querySelector('.connect').innerText;
  // console.log(connected);
  if (connected == 'CONNECT') {
    connect();
  } else {
    disConnect();
  }
}

async function connect() {
  const provider = await web3Modal.connect();
  web3 = new Web3(provider);
  console.log('Opening a dialog', web3Modal);
  if (typeof web3 !== 'undefined') {
    await web3.eth.requestAccounts().then(() => connectWallet());
  } else {
    web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
  }
  provider.on('accountsChanged', (accounts) => {
    connectWallet();
  });
  // Subscribe to chainId change
  provider.on('chainChanged', (chainId) => {
    connectWallet();
  });
  connectWallet();
}

async function disConnect() {
  // await provider.close();
  provider = null;
  await web3Modal.clearCachedProvider();
  document.getElementsByClassName('connect')[0].textContent = 'CONNECT';
}
//錢包資料
async function connectWallet() {
  chainId = await web3.eth.getChainId();
  if (chainId != metamaskChainID) {
    alert('請轉回主網!!!');
    disConnect();
    document.querySelector('.mint_btn').innerHTML = 'MINT';
  } else {
    // web3 = new Web3(provider);
    coinbase = await web3.eth.getCoinbase();
    balance = await web3.eth.getBalance(coinbase);
    document.getElementsByClassName('connect')[0].textContent = parseFloat(web3.utils.fromWei(balance)).toFixed(3) + 'ETH';
  }
}

async function mint() {
  var result = document.querySelector('.mint_btn');
  result.innerHTML = 'MINT . . . . . .';
  var amount = $('#qty_input').val();
  var price = Math.round(amount * contractPrice * 100) / 100;
  myContract = new web3.eth.Contract(ABI, address);
  await myContract.methods
    .firstMint(amount)
    .send({
      from: coinbase,
      value: price,
    })
    .then((receipt) => {
      alert('receipt')
      inReceipt(receipt);
    })
    .catch((error) => {
      console.log(error.toString(););
      alert('error');
      alert(error);
      eror(error);
    });
}

async function inReceipt(receipt) {
  var amount = $('#qty_input').val();
  var sb = new StringBuilder();
  var result = document.querySelector('.look_nft');
  let tokenId = receipt.events.Transfer.returnValues[2];
  await myContract.methods
    .tokenURI(tokenId)
    .call({ from: coinbase })
    .then(async function (uri) {
      fetch(urlCache(uri) + '?' + Math.random()).then((response) => {
        console.log('response:' + response);
        response
          .json()
          .then((data) => ({
            data: data,
          }))
          .then((myJson) => {
            console.log(myJson.data.toString());
            console.log('myJson:' + myJson.data.toString());
            $('.mint_result').addClass('active');
            $('#status').delay(1000).fadeOut(500);
            $('#preloader').delay(1000).fadeOut(500);
            $('#imgToken').attr('src', urlCache(myJson.data.image));
            $('.tokenid').text('#' + tokenId);
            // sb.append('<img src=' + urlCache(myJson.data.image) + ' alt=""');
            // sb.append('<p>');
            // for (i = 0; i < amount; i++) {
            //   sb.append('#' + tokenId);
            // }
            // sb.append('</p>');
            // result.innerHTML = sb.toString();
          });
      });
    });

  connectWallet();
  getNFTInfo();
  var result = document.querySelector('.mint_btn');
  result.innerHTML = 'MINT';
}

function eror(error) {
  console.log(error);
  document.querySelector('.mint_btn').innerHTML = 'MINT';
  $('.mint_result').removeClass('active');
}

function urlCache(url) {
  //必須使用gateway讓所有瀏覽器支援
  return url.toString().replace('ipfs://', 'https://opensea.mypinata.cloud/ipfs/');
}
//白名單資訊
async function getWhiteList() {
  // 讀CSV到array
  // const data = fs.readFileSync('whitelist.csv', 'utf-8');
  // console.log(data)
  // if (e.files[0].type == "text/csv") {
  // var reader = new FileReader();
  // reader.readAsBinaryString(e.files[0]);
  // reader.onload = function () {
  // makeMerleTree(reader.result);
  // };
  // } else {
  // alert("還敢亂塞啊!就說是CSV檔");
  // merkleRoot = "";
  // }
  const whitelistAddresses = [
    '0xfdE425c5B29d7798Fc128e04d9255e4B0bb9995F'.toLowerCase(),
    '0x40088a24eF9C303a433EefB467084dFb6fA444B5'.toLowerCase(),
    '0x6983826954690eC6367aAA4e6FE96E068B3B46cc'.toLowerCase(),
    '0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB'.toLowerCase(),
  ];
  leafNodes = whitelistAddresses.map((addr) => keccak256(addr));
  merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
  haveWhiteList = whitelistAddresses.indexOf(coinbase);
}

window.addEventListener('load', async () => {
  init();
});
