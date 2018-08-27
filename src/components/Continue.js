import React, { Component } from 'react';

class Continue extends Component {
  onContinue = () => {
    this.props.onContinue();
  }
  render() {
    return (
      <div className="row continue">
        {this.props.show
          ? <div className="col-11">
            <button className="btn btn=primary btn-lg float-right" onClick={this.onContinue}>Continue</button>
          </div>
          : null
        }
      </div>
    );
  }
}

export default Continue;
