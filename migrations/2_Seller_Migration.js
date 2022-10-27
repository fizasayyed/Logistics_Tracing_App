const Seller = artifacts.require("Seller");

module.exports = function (deployer) {
  deployer.deploy(Seller,"0xE3bc418d67C8fDDd31497cf6AE11c41898f5D0EB");
};
