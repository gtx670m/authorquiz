import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import AuthorQuiz from './AuthorQuiz';
import registerServiceWorker from './registerServiceWorker';
import { authors, getTurnData } from './data';
import { Provider } from 'react-redux';
import store from './store/store';

import { BrowserRouter, Route, withRouter } from 'react-router-dom';

import AddAuthorForm from './components/AddAuthorForm';

let state = {
  turnData: getTurnData(authors)
};

function resetState() {
  return state = {
    turnData: getTurnData(authors)
  };
}

function App() {
  return <AuthorQuiz {...state}
    onContinue={() => {
      resetState();
      render();
    }}

  />;
}

const AuthorWrapper = withRouter(({ history }) =>
  <AddAuthorForm onAddAuthor={author => {
    authors.push(author);
    console.log(authors);
    history.push('/');
  }} />
);

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <React.Fragment>
          {/* Group a list of children without */}
          {/* adding extra nodes to the DOM */}
          <Route exact path="/" component={App} />
          <Route exact path="/add" component={AuthorWrapper} />
        </React.Fragment>
      </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
  registerServiceWorker();
}
render();







