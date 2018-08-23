import React, { Component } from 'react';

class Book extends Component {
  clickHandler = () => {
    this.props.clickHandler(this.props.title);
  }
  render() {
    return (
      <div className="answer" onClick={this.clickHandler}>
        <h4>{this.props.title}</h4>
      </div>
    );
  }
}

export default Book;
