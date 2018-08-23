const author = [
  {
    name: 'Mark Twain',
    imageUrl: 'images/authors/marktwain.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['The Adventures of Huckleberry Finn']
  }
];

const state = {
  turnData: {
    author: author[0],
    books: author[0].books
  }
};

export { state };
