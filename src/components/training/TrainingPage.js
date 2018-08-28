import React, { Component } from 'react';
import '../../bootstrap.min.css';
import { connect } from 'react-redux';
// import * as actions from './actions';

// import PropValidation from './training/PropValidation';
import DOMEvents from './DOMEvents';
import PreventDefault from './PreventDefault';
import EvenCounter from './EvenCounter';

import Form from './Form';
import FormLibrary from './FormLibrary';

import { Link } from 'react-router-dom';

class TrainingPage extends Component {
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
        <p><Link to="/">Back to Home</Link></p>
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

export default connect(mapStateToProps, mapDispatchToProps)(TrainingPage);
