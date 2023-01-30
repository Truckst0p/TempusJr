import React from 'react';
import fleekLogo from './fleek-logo.png';
import reactLogo from './react-logo.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={fleekLogo} className="Fleek-logo" alt="fleek-logo" />
        <span className="Big-plus">+</span>
        <img src={reactLogo} className="React-logo" alt="react-logo" />
        <p>
          Blog post #1, Tempus Jr travels back to May 28, 2016 to save Harambe
        </p>
        <a
          className="App-link"
          href="https://tweaklabs.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More About Tweaks!
        </a>
      </header>
    </div>
  );
}

export default App;
