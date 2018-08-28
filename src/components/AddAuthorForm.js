import React, { Component } from 'react';
import './AddAuthorForm.scss';

import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom';

class AddAuthorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      imageUrl: '',
      books: [],
      bookTemp: ''
    };
    // this.onFieldChange = this.onFieldChange.bind(this);
  };

  onFieldChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // onFieldChange(event) {
  //   console.log(this);
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //     [event.target.imageUrl]: event.target.value
  //   });
  // };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, imageUrl, books } = this.state;
    this.props.add_author_dispatch(name, imageUrl, books);
  }

  handleAddBook = (event) => {
    this.setState({
      books: this.state.books.concat([this.state.bookTemp]),
      bookTemp: ''
    })
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <div className="AddAuthorForm">
        <h1>Add Author</h1>
        {/* <p>{JSON.stringify(this.props.match)}</p> */}
        {/* {"path":"/add","url":"/add","isExact":true,"params":{}} */}

        <div className="AddAuthorForm_input">
          <label htmlFor="name">Name</label>
          <input type="text" name="name"
            value={this.state.name}
            onChange={this.onFieldChange} />
        </div>
        <div className="AddAuthorForm_input">
          <label htmlFor="imageUrl">Image Url</label>
          <input type="text" name="imageUrl"
            value={this.state.imageUrl}
            onChange={this.onFieldChange} />
        </div>
        <div className="AddAuthorForm_input">
          <label htmlFor="bookTemp" >Books</label>
          {this.state.books.map(book => <p key={book}>{book}</p>)}
          <input type="text" name="bookTemp"
            value={this.state.bookTemp}
            onChange={this.onFieldChange} />
          <input type="button" value="+" onClick={this.handleAddBook} />
        </div>
        <input type="submit" value="Add"></input>
      </div>

    </form>
  }
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    add_author_dispatch: (name, imageUrl, books) => {
      dispatch(actions.add_author(name, imageUrl, books));
      props.history.push('/');
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddAuthorForm));
