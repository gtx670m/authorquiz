import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import AuthorQuiz from './AuthorQuiz';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';

import { BrowserRouter, Route } from 'react-router-dom';

import AddAuthorForm from './components/AddAuthorForm';
import TrainingPage from './components/training/TrainingPage';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
        {/* Group a list of children without */}
        {/* adding extra nodes to the DOM */}
        <Route exact path="/" component={AuthorQuiz} />
        <Route exact path="/add" component={AddAuthorForm} />
        <Route exact path="/training" component={TrainingPage} />
      </React.Fragment>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();








