import React from 'react';
import ReactDOM from 'react-dom';
import {YOUTUBE_API_KEY} from './config/youtube.js';

const App = () => {
  return <div>Hi!</div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));
// ReactDOM.render(<App />, document.getElementById('container'));