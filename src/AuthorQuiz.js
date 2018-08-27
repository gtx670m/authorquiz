import React, { Component } from 'react';
import './AuthorQuiz.scss';
import './bootstrap.min.css';

import { connect } from 'react-redux';
import * as actions from './actions';

// import PropValidation from './training/PropValidation';
import Hero from './components/Hero';
import Turn from './components/Turn';
import Continue from './components/Continue';
import Footer from './components/Footer';
import DOMEvents from './training/DOMEvents';
import PreventDefault from './training/PreventDefault';
import EvenCounter from './events/EvenCounter';
import { authors } from './data';

import Form from './training/Form';
import FormLibrary from './training/FormLibrary';

import { Link } from 'react-router-dom';


class AuthorQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: ""
    }
  }

  clickHandler = (data) => {
    const check = authors.find(author =>
      author.books.some(title => title === data)
    )
    if (check.name === this.props.turnData.author.name) {
      this.setState({
        backgroundColor: "green"
      });
    } else {
      this.setState({
        backgroundColor: "red"
      });
    }
  }

  onContinue = () => {
    this.props.onContinue();
    this.setState({
      backgroundColor: ""
    });
  }

  render() {

    return (
      <div className="container-fluid" >
        <Hero />
        <Turn
          author={this.props.turnData.author}
          books={this.props.turnData.books}
          clickHandler={data => this.clickHandler(data)}
          backgroundColor={this.state.backgroundColor}
        />

        <Continue show={this.state.backgroundColor === "green"} onContinue={() => this.onContinue()} />
        {/* <Continue show={true} onContinue={() => this.onContinue()} /> */}
        {/* <PropValidation a={5} b={2} /> */}
        <p><Link to="/add">Add an author</Link></p>
        <br />
        <DOMEvents />
        <br />
        <PreventDefault />
        <hr />
        <EvenCounter onEvenClick={(data) => {
          console.log(`even ${data}`);
        }} />
        <hr />
        <Form />
        <hr />
        <FormLibrary />
        <br />
        <Footer />
      </div >
    );
  }

}

// function AuthorQuiz({turnData}) {
//   return (
//     <div class="container-fluid">
//       <Hero />
//       <Turn {...turnData} />
//       <Continue />
//       {/* <PropValidation a={5} b={2} /> */}
//       <Footer />
//     </div >
//   );
// }

// export default AuthorQuiz;

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
    // delete_all_dispatch: () => {
    //   dispatch(actions.delete_all_action());
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorQuiz);
