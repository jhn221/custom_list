import React from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './page/Main/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Main/>
      </header>
    </div>
  );
}

export default App;
