import React from 'react';

import PlayButton from './PlayButton';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <PlayButton
        onClickHandler={() => alert('Hello!')}
      />
    </div>
  );
}

export default App;
