import { shuffle, sample } from 'underscore';

const authors = [
  {
    name: 'Mark Twain',
    imageUrl: 'images/authors/marktwain.jpg',
    imageSource: 'Wikimedia Commons',
    books: [
      'The Adventures of Huckleberry Finn',
      'Life on the Mississippi',
      'Roughing It'
    ]
  },
  {
    name: 'Joseph Conrad',
    imageUrl: 'images/authors/josephconrad.png',
    imageSource: 'Wikimedia Commons',
    books: [
      '1',
      '2',
      '3'
    ]
  },
  {
    name: 'J.K Rowling',
    imageUrl: 'images/authors/jkrowling.jpg',
    imageSource: 'Wikimedia Commons',
    books: [
      '4',
      '5',
      '6'
    ]
  },
];

function getTurnData(authors) {
  const allBooks = authors.reduce((p, c, index) => {
    // p: initialization variable
    // c: the current element in "authors" array
    return p.concat(c.books);

  }, []);
  const fourRandomBooks = shuffle(allBooks).slice(0, 4);
  const answer = sample(fourRandomBooks);
  // return a single random item from the "fourRandomBooks" array
  return {
    books: fourRandomBooks,
    author: authors.find((author) =>
      author.books.some((title) => title === answer))
  }
}

const state = {
  turnData: getTurnData(authors)
};

export { state, authors };
