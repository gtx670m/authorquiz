import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Continue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: ''
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      show: nextProps.answer
    })
  }
  onContinue = () => {
    this.props.continue_dispatch();
  }
  render() {
    return (
      <div className="row continue">
        {this.state.show
          ? <div className="col-11">
            <button className="btn btn=primary btn-lg float-right" onClick={this.onContinue}>Continue</button>
          </div>
          : null
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    answer: state.data.answer
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    continue_dispatch: () => {
      dispatch(actions.continue_act());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Continue);

