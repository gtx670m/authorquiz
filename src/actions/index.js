import * as types from '../constants/ActionTypes';

export const check_answer = (answer, author) => {
  return {
    type: types.CHECK_ANSWER,
    answer,
    author
  }
}
