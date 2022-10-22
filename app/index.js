let SellerContractAddress;
let SellerContractABI;
let signer;
let provider;
let accounts;



async function add() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const desc = document.getElementById("description").value;
  const pp = document.getElementById("pp").value;
  await SellerContractAddress.addProduct(name,price,desc,pp);
  
  
}

async function requestQuote() {
  const PID = document.getElementById("pid").value;
  await SellerContractAddress.requestQuote(PID);
  
}


async function doInitMetamask() {
  SellerContractAddress = "0x8E373B0DEe8b05e66ef46477B1A6a38daF4df103";
  SellerContractABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "Ods",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "pid",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "oid",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "pp",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "odd",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "packd",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "handOvr",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "Products",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "price",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "desc",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "sold",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "pp",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "buyer",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "products_list",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "price",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "desc",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "sold",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "pp",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "buyer",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "price",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "desc",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "pp",
          "type": "uint256"
        }
      ],
      "name": "addProduct",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_ProductID",
          "type": "uint256"
        }
      ],
      "name": "requestQuote",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "number",
          "type": "uint256"
        }
      ],
      "name": "queryOrder",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "pp",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "buyer",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "pID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_Buyer",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_address",
          "type": "string"
        },
        {
          "internalType": "uint40",
          "name": "_phone",
          "type": "uint40"
        }
      ],
      "name": "Buy",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "oid",
          "type": "uint256"
        }
      ],
      "name": "fv",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "oid",
          "type": "uint256"
        }
      ],
      "name": "handOverOrder",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "OID",
          "type": "uint256"
        }
      ],
      "name": "packedOrder",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
    provider = new ethers.providers.Web3Provider(web3.currentProvider);
    //  provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    
      console.log("Account:", await signer.getAddress());
    try {
        await provider.send("eth_requestAccounts", []);
    } catch {
        console.log("Connection error");
    }

    accounts = await provider.listAccounts();
    console.log(accounts);

    signer = await provider.getSigner(accounts[0]);
    console.log(signer);

    console.log(SellerContractAddress);
    console.log(SellerContractABI);

    MultiSigWallet = new ethers.Contract( SellerContractAddress, SellerContractABI, signer);
  }
  doInitMetamask();
