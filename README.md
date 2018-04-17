This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## What is it?

The goal of this project is to test if an string is a palindrome or not.

What is a palindrome? A palindrome is a text is a word, number or phrase that reads the same way forward and backward.

## Before you start

This is a fast React project. I take the way of two components (what it's what asked for) but it can be done with only one component and without comunication between the components.

From here we can complicate (or doing in more easy way) as much as we want:

- It can be use Redux, but I don't think it's necesary for purposes, because I don't think that we need more states (on this case).
- It can be use some backend in order to log or use some libraries in JS in order to create a database on the web client.
- It can be done without React or something like (not a library, like React, a framework like Angular) Vue, Polymer... in simple (vanilla) JS (and it will be fast to develop and to mantain). With React this is a little monster (with a Framework too) :)
- I have used Bootstrap as a HTML framework, something that force to put JQuery and make this very slow and memory consuming. It can be done without but it's the way that show you that I know HTML frameworks (like Foundation). I tried to load this from CDN and Google in order to be a lees size npm project (I know that puting the package.json, src and public will be enough).
- The color I choose are the worst, sorry about that :)

## Folder Structure

This is the folder structure:

```
palindrome/
  README.md
  package.json
  public/
    index.html
    favicon.ico
  src/
    components/
      inputtext/
        inputtext.js
        inputtext.css
      testpalindrome/
        testpalindrome.js
        testpalindrome.css
    App.css
    App.js
    App.test.js
    index.css
    index.js
```

Readme.md: this file
package.json: necesary for npm. Where it is the version needed for runing.
index.html: index file of the application, here is the root component.
components/: where the two components are (CSS and JS files).
inputtext.js/inputtext.css: the form component with store the text and send to the component who test it.
testpalindrome.js/testpalindrome.css: the component who test if its a palindrome and put yes or no.
App.js: root component of the App (principal) where calls the first component (the form component, see notes after).
App.test.js: not used but it can be for testing.
index.css: general styles
index.js: the base of React. It can be more complex but the app don't need it.

## How it works

index.js -> App.js -> components/inputtext <-> components/testpalindrome

From the index.js it mount the App.js who import the first component (the form component) wich need to import the testpalindrome.
Eveyone import they css file (in order to separate, for easy reading and know what are included in).

The index.js will search for the div with id name root and put inside the App component who their only purpose it's to include the inputtext one. The inputtext uses one state for the text (called value, an string) we must test if it's a palindrome. I have used an input that when it changes (you write on it) it fires a handleChangeText who change the  text (value, remember). When you change it, it change the component content, easy. On the rendering of the component I use to import other component (it says that two components are needed, but it can be done on this component) called TestPalindrome. I pass the string from inputtext to testpalindrome components and this resolve if it's a palindrome or not and render a simply "yes" or "no" with some css artifacts. Nothing complex. TestPalindrome need two things, a property wich is the text (string) will test if it's a palindrome and a state wich is if is a palindrome or not (boolean).

Inside are the documentation of how it works.

## How make it works

The easy way for seen it:

npm install
npm start

You can build it if you want, but not needed.

## Available Scripts

In the project directory, you can run:

### `npm install`

Download an install the necesary for running the App.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Supported Browsers

By default, the generated project uses the latest version of React.

You can refer [to the React documentation](https://reactjs.org/docs/react-dom.html#browser-support) for more information about supported browsers.

## Testing

No test unit is included. No Karma, no Jest, no Enzyme...

## Backend

No backend it's needed for this app. No API, no conection with any external JSON o XML file.
