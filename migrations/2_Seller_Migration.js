const Seller = artifacts.require("Seller");

module.exports = function (deployer) {
  deployer.deploy(Seller,"0x0137f84b7A2357Bc9BFE76a5747DDA64d588a476");
};
