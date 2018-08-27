import * as types from '../constants/ActionTypes';
// import { shuffle, sample } from 'underscore';
// import { stat } from 'fs';

var initialState = {
    answer: ''
};

function check_answer(answer, author, state) {
    const check = state.state.data.find(author =>
        author.books.some(title => title === answer)
    )
    if (check.name === author) {
        state.answer = true;
    } else {
        state.answer = false;
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.CHECK_ANSWER:
            // check_answer(action.answer, action.author, state);
            console.log(state);
            return state;
        default: return state;
    }
};
