import React, { Component } from 'react';

class DOMEvents extends Component {
  render() {
    // const clickHandler = (synthEvent) => {
    //   console.log(synthEvent);
    // }
    const clickHandler = console.log;
    return (
      <button onClick={clickHandler}>
        Make an event
      </button>
    );
  }
}

export default DOMEvents;
