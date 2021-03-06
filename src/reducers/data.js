import * as types from '../constants/ActionTypes';
import { shuffle, sample } from 'underscore';

var initialState = [
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

function check_answer(answer, author, state) {
  const check = initialState.find(author =>
    author.books.some(title => title === answer)
  )
  if (check.name === author) {
    state.answer = true;
  } else {
    state.answer = false;
  }
}

export default (state = { turnData: getTurnData(initialState), answer: '' }, action) => {
  switch (action.type) {
    case types.CHECK_ANSWER:
      check_answer(action.answer, action.author, state);
      return { ...state };
    case types.CONTINUE:
      state.answer = '';
      state.turnData = getTurnData(initialState);
      return { ...state }
    case types.ADD_AUTHOR:
      const { name, imageUrl, books } = action;
      let newAuthor = {
        name: name,
        imageUrl: imageUrl,
        books: books
      }
      initialState.push(newAuthor);
      return { ...state }
    default: return state;
  }
};
