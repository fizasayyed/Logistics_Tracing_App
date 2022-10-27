const Buyer = artifacts.require("Buyer");

module.exports = function (deployer) {
  deployer.deploy(Buyer,"0x706E9168A886b72A39666FE8F8C0744137ec36F6","0xB2AbAc7fF8521CAD8549C4e73Aa84d7101B2d7D5");
};
