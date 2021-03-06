import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <div className="row">
        <div className="jumbotron col-10 offset-1">
          {/* offset from the left by one column */}
          <h1>Author Quiz</h1>
          <p>Select the book written by the author shown</p>
        </div>
      </div>
    );
  }
}

export default Hero;
