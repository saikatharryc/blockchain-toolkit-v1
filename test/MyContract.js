const web3 = require('web3');

const MyContract = artifacts.require('./MyContract.sol');

contract('MyContract', (accounts) => {
  it('initializes with the correct value', async () => {
    const myContract = await MyContract.deployed()
    const value = await myContract.get()
    const valueFromChain = web3.utils.hexToAscii(value);
    assert.equal(valueFromChain,'myValue')
  })

  it('can update the value', async () => {
    const myContract = await MyContract.deployed()
    const testVal = 'Hi There';
    const encodedVal = web3.utils.asciiToHex(testVal);
    myContract.set(encodedVal);
    const value = await myContract.get();
    const valueFromChain = web3.utils.hexToAscii(value);
    assert.equal(valueFromChain, testVal)
  })
})  