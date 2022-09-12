// This is the first file created after deleting all the other files
import React from 'react';
import ReactDOM from 'react-dom';
// The main app component must be imported before it can be displayed
import App from './App';
// Global CSS must also be imported
import './index.css';
//The ReactDom lib allows us to interact with the document object model of the browser
// It has a method called "render" which can be used to render elements and even html tags
// It takes in the element, and then where you want to rendet the element.
// In this example we used it to display a the h1 tag with value "my App" to the web page.
// the root id is from the index.html page in the public folder. It is the anchor for the whole UI
ReactDOM.render(<App/>, document.getElementById('root'));