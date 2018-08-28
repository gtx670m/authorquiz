import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from "./AuthorQuiz";
import Enzyme, { mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';
import Turn from './components/Turn';

Enzyme.configure({ adapter: new Adapter() });
const state = {
  turnData: {
    books: [
      'The Adventures of Huckleberry Finn',
      'Life on the Mississippi',
      'Roughing It',
      'What the hell'
    ],
    author: {
      name: 'Mark Twain',
      imageUrl: 'images/authors/marktwain.jpg',
      imageSource: 'Wikimedia Commons',
      books: [
        'The Adventures of Huckleberry Finn',
        'Life on the Mississippi',
        'Roughing It'
      ]
    }
  }
};
// beforeEach(); Applies to all tests in this file
// afterEach();
describe("Author Quiz", () => {
  it.only("renders without crashing", () => { //test only
    const div = document.createElement("div");
    ReactDOM.render(<AuthorQuiz {...state} />, div);
  });

  describe("when no answer has been selected", () => {
    // beforeEach(); Applies only to tests in this describe block
    let wrapper;
    beforeAll(() => { //setup before testing
      wrapper = mount(<AuthorQuiz {...state} />)
    });
    xit("should have no background color", () => { //skipped
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('');
    });
    // afterAll();
  });

  describe("When the wrong answer has been selected", () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(<Turn
        author={state.turnData.author}
        books={state.turnData.books}
        backgroundColor={"red"}
      />)
    });
    it("should have red background color", () => {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('red');
    });
  });

  describe("When the right answer has been selected", () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(<Turn
        author={state.turnData.author}
        books={state.turnData.books}
        backgroundColor={"green"}
      />)
    });
    it("should have green background color", () => {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('green');
    });
  });

  describe("When the first answer is selected", () => {
    let wrapper;
    const clickHandler = jest.fn();
    beforeAll(() => {
      wrapper = mount(<Turn
        author={state.turnData.author}
        books={state.turnData.books}
        clickHandler={clickHandler}
      />);
      wrapper.find('.answer').first().simulate('click');
    });
    it("onAnswerSelected should be called", () => {
      expect(clickHandler).toHaveBeenCalled();
    });
    it("should receive The Adventures of Huckleberry Finn", () => {
      expect(clickHandler).toHaveBeenCalledWith("The Adventures of Huckleberry Finn");
    })
  });
});
