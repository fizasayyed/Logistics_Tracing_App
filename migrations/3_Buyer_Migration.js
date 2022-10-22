const Buyer = artifacts.require("Buyer");

module.exports = function (deployer) {
  deployer.deploy(Buyer,"0x6dEf47A3253c1B7da86E29a2359104e3CFD1c07d","0xFDbC57AB8E4Cc8aCFd8B8EF9374Eed9c89a1a35f");
};
