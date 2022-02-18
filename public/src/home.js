function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let booksCheckedOut = books.filter((book) =>
      book.borrows.filter((record) => record.returned === false).length > 0
  );
  return booksCheckedOut.length;
}

function getMostCommonGenres(books) {
  let result = {};
  let genre = books.forEach((book) => {
    if (result[book.genre] == null) {
      result[book.genre] = 1; 
    } else {
      result[book.genre] += 1;
    }
  })
  let countArray = [];
  for (const [key, value] of Object.entries(result)) {
    countArray.push({
      'name' : key,
      'count' : value
    }); 
  }
  countArray.sort((a,b) => b.count - a.count);
  return countArray.slice(0, 5);
}  

function getMostPopularBooks(books) {
  return books
   .map((book) => {
    return { name: book.title, count: book.borrows.length };
   })
   .sort((a, b) => (a.count < b.count ? 1 : -1))
   .slice(0, 5);
 }


function getMostPopularAuthors(books,authors) {
  const result = authors.map(author => ({
  ...author,
  bookCount: books.filter(book => book.authorId === author.id).length,
  borrowCount: books.filter(book => book.authorId === author.id).reduce((acc, cur) => acc + cur.borrows.length, 0)})).sort((b, a) => a.borrowCount - b.borrowCount);
  result.length = 5;
  return result.map(result => {
  return {count: result.borrowCount, name: result.name.first + " " + result.name.last};
  })
}




module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
