// migrations/2_deploy.js
const ERC20Minter = artifacts.require('ERC20Minter');

module.exports = async function (deployer) {
    await deployer.deploy(ERC20Minter, 'ERC20Minter', 'ERM');
};