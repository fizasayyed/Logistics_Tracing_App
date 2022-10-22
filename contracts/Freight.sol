// SPDX-License-Identifier: MIT

import "./Buyer.sol";
import "./Seller.sol";

pragma solidity ^0.8.17;

contract Freight{
    Buyer B;
    uint ExpoCount = 1;
    // freight forwarder address
    address fAcc; 
    uint fc = 10;
    Seller s;
    // frieght booking struct
    struct freightBook{
        uint oid;
        uint pid;
        string name;
        uint ph;
        string addr;
        // string email;
        bool bkd;
    }
    mapping (uint => freightBook) internal FBooks;

    struct productDetails{
        uint expoid;
        uint oid;
        uint pid;
        bool handOver;
        bool delstrat;
        bool expoClr;
        bool impoClr;
        bool delivered;
    }
    mapping (uint => productDetails) public ProdDetails;

    constructor (address adr){
        fAcc = adr;
    }

    modifier onlyFreighter() {
        require(msg.sender == fAcc,"Not Freighter");
        _;
    }

    function bookFreight(uint oid, address seller) external returns (bool,uint,address){
        s = Seller(seller);
        (uint pid,string memory addr,string memory name,uint ph) = s.fv(oid);
        FBooks[oid] = freightBook(oid,pid,name,ph,addr,true);
        return (true,fc,fAcc);
    }

    function pickOrder(uint oid) public onlyFreighter {
        uint pID = s.handOverOrder(oid);
        ProdDetails[ExpoCount] = productDetails(ExpoCount,oid,pID,true,false,false,false,false);
        ExpoCount++;
    }

    function stratdel(uint expoid) public onlyFreighter {
        ProdDetails[expoid].delstrat = true;
    }

    function expoClearance(uint expoid) public onlyFreighter {
        ProdDetails[expoid].expoClr = true;
    }

    function impoClearance(uint _ExpoID) public onlyFreighter {
        ProdDetails[_ExpoID].impoClr = true; 
	    ProdDetails[_ExpoID].delivered = true;
    }
    
}