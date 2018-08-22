import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
function Hello(props) {
  return <h1>Hello at {props.now}</h1>
}

describe('When setting up testing', () => {
  it("should fail", () => {
    expect(1 + 1).toBe(3);
  });
});
describe('When testing directly', () => {
  it("should fail", () => {
    expect(1 + 1).toBe(3);
  });
});


