import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as actions from '../actions';

// import { authors } from '../data';

class Turn extends Component {
  constructor(props) {
    super(props);
    const { state, getTurnData } = this.props.data;
    const { author, books } = getTurnData(state.data);
    this.state = {
      author: author,
      books: books
    }
  }

  setColor() {
    return {
      backgroundColor: this.props.backgroundColor
    }
  }
  clickHandler = (answer) => {
    this.props.check_answer_dispatch(answer, this.state.author.name);
  }
  render() {
    const { author, books } = this.state;
    return (
      <div className="row turn" style={this.setColor()}>
        <div className="col-4 offset-1 books">
          <img src={author.imageUrl} className="authorimage" alt="Author" />
        </div>
        <div className="col-6">
          {books.map((title) => <Book title={title} key={title} clickHandler={title => this.clickHandler(title)} />)}
        </div>
      </div>
    );
  }
}
// Turn.propTypes = {
//   author: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     imageUrl: PropTypes.string.isRequired,
//     imageSource: PropTypes.string.isRequired,
//     books: PropTypes.arrayOf(PropTypes.string).isRequired
//   }),
//   books: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

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

const mapStateToProps = state => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    // save_item_dispatch: (task) => {
    //   dispatch(actions.save_item_action(task));
    // },
    check_answer_dispatch: (answer, author) => {
      dispatch(actions.check_answer(answer, author));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Turn);
