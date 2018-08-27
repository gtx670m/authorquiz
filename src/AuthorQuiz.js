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

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    // var { editing_data } = nextProps;
    // console.log(editing_data);
    // if (nextProps) {
    //   this.setState({
    //     id: editing_data.id,
    //     name: editing_data.name,
    //     date: editing_data.date ? editing_data.date : '',
    //     status: editing_data.status
    //   });
    // }
  }


  onContinue = () => {
    this.props.onContinue();
    this.setState({
      backgroundColor: ""
    });
  }

  render() {
    const { answer } = this.props;

    // if (answer) {
    //   this.setState({
    //     backgroundColor: "green"
    //   });
    // } else {
    //   this.setState({
    //     backgroundColor: "red"
    //   });
    // }
    return (
      <div className="container-fluid" >
        <Hero />
        <Turn
          // clickHandler={() => this.clickHandler()}
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
  console.log(state);
  return {
    answer: state.check.answer
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
