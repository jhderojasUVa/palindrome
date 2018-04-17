import React, { Component } from 'react';
import TestPalindrome from '../testpalindrome/testpalindrome';
import './inputtext.css';

class InputText extends Component {

  constructor(props) {
    super(props);
    // Creationg the state value of "value" where contains the text you will test
    // It's an state because we send to the other component
    this.state = {
      value: '',
    };

    this.handleChangeText = this.handleChangeText.bind(this);
  }

  handleChangeText(event) {
    // This will handle when you change the text on the input
    // We take the event as an argument

    // It can be done by following the structure, but maybe it's more
    // easy to understand separate it

    // The target of the event
    const mytarget = event.target;
    // The value wich is the text
    const textvalue = mytarget.value;
    // And now changing the state
    this.setState({value: textvalue});
  }

  render() {
    // The easy way is to create a div wich have and call the other component who test if it's a palindrome or not
    // So we create an input text (I use the bootstrap style) with value the value of the state and as it changes
    // it calls the handleChangeText and next I call the other component with a prop called textToTest that it's
    // the text to test (of course)
    return (
      <div className="InputText">
        <input type="text" className="form-control mb-2" name="textval" value={this.state.value} onChange={this.handleChangeText} />
        <TestPalindrome textToTest={this.state.value}></TestPalindrome>
      </div>
    );
  }
}

export default InputText;
