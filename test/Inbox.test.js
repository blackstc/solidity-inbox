const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')
const web3 = new Web3(ganache.provider())

beforeEach(async () => {
  // Get a list of all accounts
  const fetchedAccounts = await web3.eth.getAccounts()
  console.log(fetchedAccounts)

  // Use one account to deploy project
})

describe('Inbox', () => {
  it('deploys a contract', () => {})
})
