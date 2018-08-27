import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: ""
    };
  }

  onFieldChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <form>
        <input type="text" name="firstName" value={this.state.firstName} placeholder="First name"
          onChange={this.onFieldChange} />
        <input type="text" name="lastName" value={this.state.lastName} placeholder="Last name"
          onChange={this.onFieldChange} />
      </form>
    );
  }
}

export default Form;
