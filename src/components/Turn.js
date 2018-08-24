import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types';


// import { authors } from '../data';

class Turn extends Component {
  setColor() {
    return {
      backgroundColor: this.props.backgroundColor
    }
  }
  clickHandler = (data) => {
    this.props.clickHandler(data)
  }
  render() {
    const { author, books } = this.props;
    return (
      <div className="row turn" style={this.setColor()}>
        <div className="col-4 offset-1 books">
          <img src={author.imageUrl} className="authorimage" alt="Author" />
        </div>
        <div className="col-6">
          {books.map((title) => <Book title={title} key={title} clickHandler={this.clickHandler} />)}
        </div>
      </div>
    );
  }
}
Turn.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  books: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// function Turn({ author, books }) {
//   return (
//     <div className="row turn" style={{ backgroundcolor: "white" }}>
//       <div className="col-4 offset-1">
//         <img src={author.imageUrl} className="authorimage" alt="Author" />
//       </div>
//       <div className="col-6">
//         {books.map((title) => <Book title={title} key={title} />)}
//       </div>
//     </div>
//   );
// }

export default Turn;
