import * as types from '../constants/ActionTypes';
import { shuffle, sample } from 'underscore';
import { stat } from 'fs';

var initialState = {
  data: [
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
  ],
  answer: ''
};

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

// function check_answer(answer, author, state) {
//   const check = state.state.data.find(author =>
//     author.books.some(title => title === answer)
//   )
//   if (check.name === author) {
//     state.answer = true;
//   } else {
//     state.answer = false;
//   }
// }

export default (state = initialState, action) => {
  switch (action.type) {
    // case types.CHECK_ANSWER:
    //   check_answer(action.answer, action.author, state);
    //   return state;
    default: return { state, getTurnData };
  }
};
