import React, { Component } from 'react';
import './testpalindrome.css';

class TestPalindrome extends Component {

  constructor(props) {
    super(props);

    // The state of if it's a palindrome or no wich is a boolean
    this.state = {
      isPalindrome: false
    }
    // The text we must test, it comes so it's a property
    this.props = {
      textToTest: ''
    };
  }

  render() {
    // This render the component and put yes if the testPalindrome function say true and no if false
    this.state.isPalindrome = testPalindrome(this.props.textToTest);
    return (
      <div className="TestPalindrome">
        <p>Is a palindrome?: <span className="response">{this.state.isPalindrome ? (<span className="yes">'yes'</span>) : (<span className="no">'no'</span>)}</span></p>
      </div>
    );
  }
}

function testPalindrome(textToTest) {
    // A palindrome have the same words in reverse order so
    // we take textToTest
    // textToTest: the text to test (sting)
    // return boolean (true if yes, false if not)

    // Then reverse it
    var reverseText = textToTest.split('').reverse().join('');
    // An for last, test it changing que isPalindrome state, easy
    if (textToTest === reverseText) {
      // Yes, it is
      return true;
    } else {
      // No it is not
      return false;
    }
  }

export default TestPalindrome;
