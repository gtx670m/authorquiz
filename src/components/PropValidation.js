import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PropValidation extends Component {
  render() {
    return (
      <h1>
        {this.props.a}+{this.props.b}={this.props.a + this.props.b}
      </h1>
    );
  }
}
PropValidation.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired
};

export default PropValidation;
