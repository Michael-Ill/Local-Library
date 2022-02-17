function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id) 
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  const returnedArray = [];
  const borrowedArray = [];
  for (let i = 0; i < books.length; i++) {
    if (books[i].borrows[0].returned === true) {
      returnedArray.push(books[i])
    } else {
      borrowedArray.push(books[i])
    }
  } 
  return [borrowedArray, returnedArray];
} 

function getBorrowersForBook(book, accounts) {
  const bookReturnedArray = [];
  return accounts.filter((account) => book.borrows.some((borrow => borrow.id === account.id)))
  .map ((account) => {
    return {
      ...account,
      returned:book.borrows.find(borrow => borrow.id === account.id).returned,
    }
  })
  
  .slice(0, 10); 
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
