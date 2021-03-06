'use strict';

const accounts = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

function getNameAndBalance(accounts, accountNumber) {
  return accounts.filter(client => client.accountNumber === accountNumber)[0];
}

// console.log(getNameAndBalance(accounts, 11234543));

// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from account_number
//  - to account_number
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

function transferAmount(accounts, fromAcc, toAcc, amount) {
  let from = accounts.filter(client => client.accountNumber === fromAcc)[0];
  let to = accounts.filter(client => client.accountNumber === toAcc)[0];
  if (from === undefined || to === undefined) {
    console.log("404 - account not found");
    return;
  }
  from.balance -= amount;
  to.balance += amount;
}

transferAmount(accounts, 43546731, 4, 500.0);

//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]

module.exports = {
  getNameAndBalance: getNameAndBalance,
  transferAmount: transferAmount,
  accounts: accounts
};
