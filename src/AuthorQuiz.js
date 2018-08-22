import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import PropValidation from './components/PropValidation';

class AuthorQuiz extends Component {
  render() {
    return (
      <div>
        Author Quiz
        <PropValidation a={'a'} b={2} />
      </div>
    );
  }
}

export default AuthorQuiz;
