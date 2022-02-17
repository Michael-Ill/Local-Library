// function findAccountById(accounts, id) {
//   for (let i = 0; i < accounts.length; i++) {
//     if (accounts[i].id === id) {
//       return accounts[i];
//     }
//   }
// }

function findAccountById (accounts, id) {
  let foundId = accounts.find((account) => account.id === id);
  return foundId;
}

function sortAccountsByLastName(accounts) {
let sortedAccounts = accounts.sort((accountA, accountB) =>
 accountA.name.last > accountB.name.last ? 1 : -1
);
return sortedAccounts;
}

function getTotalNumberOfBorrows(account, books) {
  const accountID = account.id;
  let total = 0;
  books.forEach(book => book.borrows.forEach(borrow => accountID === borrow.id && total++));
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  return books.filter((book) => book.borrows[0].id == account.id) 
  .map((book) => {
    return {...book,
      author:authors.find(author => author.id === book.authorId)};
  })  
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
