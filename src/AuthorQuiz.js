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

class AuthorQuiz extends Component {
  render() {
    return (
      <div className="container-fluid" >
        <Hero />
        <Turn
          author={this.props.turnData.author}
          books={this.props.turnData.books}
        />
        <Continue />
        {/* <PropValidation a={5} b={2} /> */}
        <DOMEvents />
        <Footer />
        <PreventDefault />
        <EvenCounter onEvenClick={(data) => {
          console.log(`even ${data}`);
        }} />
      </div >
    );
  }

}

// function AuthorQuiz({ turnData }) {
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
