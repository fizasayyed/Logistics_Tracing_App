// SPDX-License-Identifier: MIT
import "./Seller.sol";
import "./Freight.sol";

pragma solidity 0.8.17;

contract Buyer {
    // Seller
    address seller;
    Seller s;
    address freight;
    Freight f;
constructor(address _seller,address _freight) {
    seller = _seller;
    s = Seller(_seller);
    freight = _freight;
    f = Freight(_freight);
}

function requestQuote(uint _ProductID) public view returns (
        uint, 
        string memory, 
        string memory, 
        bool, 
        address,
        uint){
        
        return s.requestQuote(_ProductID);
}

// function sendOrder(string memory goods, uint quantity) public {


// }

function queryOrder(uint number)  external view returns
(string memory name,
uint pp,
address buyer
)  {

    // Return the order data
    return s.queryOrder(number);
}


function Buy(uint pid, string memory name, string memory addss,uint40 ph) public payable {address _Buyer = msg.sender;
        (uint num, address _seller) = s.Buy(pid,_Buyer,name,addss,ph);
        require(msg.value == num, "Low Fund");
        (bool success,) = (_seller).call{value: msg.value}("");
        require(success,"Buy failed!");
}

function BookFreighter(uint OID) public payable {
    (,uint freighterPrice, address freightAccount) = f.bookFreight(OID, seller);
    require(msg.value == freighterPrice, "invalidFund");
    (bool done,) = freightAccount.call{value: msg.value}("");
    require(done == true, "failed");
}

function getInvoice(uint oid) external view returns 
(uint,
uint,
string memory,
uint,
address,
bool 
) {

    // Return the invoice data
    return s.sendInvoice(oid);
}


}