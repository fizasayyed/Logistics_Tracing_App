// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract Seller {
// The seller's address , the seller will be the contract's owner
    address owner;
    uint product_id=1;
    uint order_id=1;
// The Product struct
struct Product {
    uint id;
    string name;
    string desc;
    bool sold;
    uint pp;
    address buyer;
    uint timestamp;
}
// The Buyer struct
struct Buyer {
    uint oid;
    string name;
    string addr;   
    uint ph;

}

// The Order struct
struct Order {
    uint pid;
    uint oid;
    string name;
    // uint quantity;
    // uint number;
    // uint price;
    uint pp;
    // uint safepay;
    address addr;
    bool odd;
    bool packd;
    bool handOvr;
    
}
// Mapping 
mapping (uint256 => Product) public Products;
mapping (uint => Buyer) internal BuyerDetails;
mapping (uint => Order) public Ods;
// Array to store products
Product[] public products_list;
Product private productInfo;

constructor(address _owner) {
   
    owner = _owner;
}
//////////MODIFIER///////////////
modifier onlySeller() {
    require(msg.sender == owner,"Not Seller");
    _;

}   

// Function to add prodcut
function addProduct(
string memory name,
string memory desc,
uint pp) public
{   
    
    productInfo=Product(product_id,name,desc,false,pp,address(0),block.timestamp);
    Products[product_id]=(productInfo);
    products_list.push(productInfo);
    product_id++;

}
// Function to requeest Quote for products giving Product ID
function requestQuote(uint _ProductID) external view returns (uint, 
    string memory, 
    string memory, 
    bool, 
    address,
    uint) {
        
    require(Products[_ProductID].id > 0, "no product");
    require(_ProductID > 0 && _ProductID <=  product_id, "invalid Product_ID");

        return (Products[_ProductID].id,
        Products[_ProductID].name,
        Products[_ProductID].desc,
        Products[_ProductID].sold,
        Products[_ProductID].buyer,
        Products[_ProductID].timestamp);

}

function queryOrder(uint number)  external view returns
(
string memory name,
uint pp,
address buyer
) {
    // Return the order data
    return(Ods[number].name, 
    Ods[number].pp, 
    Ods[number].addr);
}
function Buy(uint pID,address _Buyer,string memory _name,string memory _address,uint40 _phone) public payable returns (uint, address) {
        Products[pID].sold = true;
        Products[pID].buyer = _Buyer;
        uint toPay = Products[pID].pp;
        Ods[order_id] = Order(order_id,pID,Products[pID].name,toPay,_Buyer,true,false,false);
        BuyerDetails[order_id] = Buyer(order_id,_name,_address,_phone);
        order_id++;
        return (toPay, owner);
}

function fv(uint oid) external view returns 
(uint,
string memory,
string memory,
uint){
        return (Ods[oid].pid,
        BuyerDetails[oid].addr,
        BuyerDetails[oid].name,
        BuyerDetails[oid].ph);
}
function handOverOrder(uint oid) external onlySeller returns (uint) {
        Ods[oid].handOvr = true;
        return (Ods[oid].pid);
}
function packedOrder(uint OID) public onlySeller {
        Ods[OID].packd = true;
}

function sendInvoice(uint oid) external view returns(
uint,
uint,
string memory,
uint,
address,
bool 
) {     
    return (Ods[oid].pid,
    Ods[oid].oid,
    Ods[oid].name,
    Ods[oid].pp,
    Ods[oid].addr,
    Ods[oid].packd);

}

}