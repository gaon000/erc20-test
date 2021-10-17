const TestToken = artifacts.require("./Test");

module.exports = (deployer) => {
  deployer.deploy(TestToken);
};