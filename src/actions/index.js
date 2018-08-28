import * as types from '../constants/ActionTypes';

export const check_answer = (answer, author) => {
  return {
    type: types.CHECK_ANSWER,
    answer,
    author
  }
}

export const continue_act = () => {
  return {
    type: types.CONTINUE
  }
}

export const add_author = (name, imageUrl, books) => {
  return {
    type: types.ADD_AUTHOR,
    name,
    imageUrl,
    books
  }
}
