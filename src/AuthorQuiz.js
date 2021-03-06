import React, { Component } from 'react';
import './AuthorQuiz.scss';
import './bootstrap.min.css';
import { connect } from 'react-redux';
// import * as actions from './actions';


// import PropValidation from './training/PropValidation';
import Hero from './components/Hero';
import Turn from './components/Turn';
import Continue from './components/Continue';
import Footer from './components/Footer';

import { Link } from 'react-router-dom';


class AuthorQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: ""
    }
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    return (
      <div className="container-fluid" >
        <Hero />
        <Turn />
        <Continue />
        {/* <PropValidation a={5} b={2} /> */}
        <p><Link to="/add">Add an author</Link></p>
        <hr />
        <p><Link to="/training">Training page</Link></p>
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
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorQuiz);
