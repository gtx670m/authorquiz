import React, { Component } from 'react';
import './AuthorQuiz.scss';
import './bootstrap.min.css';
// import PropValidation from './components/PropValidation';
import Hero from './components/Hero';
import Turn from './components/Turn';
import Continue from './components/Continue';
import Footer from './components/Footer';
import DOMEvents from './components/DOMEvents';
import PreventDefault from './components/PreventDefault';
import EvenCounter from './events/EvenCounter';
import { authors } from './data';

import Form from './components/Form/Form';
import FormLibrary from './components/Form/FormLibrary';


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
        <hr />
        <Continue />
        {/* <PropValidation a={5} b={2} /> */}
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

export default AuthorQuiz;
